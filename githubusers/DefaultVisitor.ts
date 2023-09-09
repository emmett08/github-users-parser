import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { FileContext, EntryContext } from './parsers/GITHUBUSERSParser';
import { GITHUBUSERSParserVisitor } from './parsers/GITHUBUSERSParserVisitor';

export class DefaultVisitor extends AbstractParseTreeVisitor<void> implements GITHUBUSERSParserVisitor<void> {
    private emailAddresses: Set<string>;
    private lookup: Map<string, string>;
    private owners: Set<string>;

    constructor(emailAddresses: string[]) {
        super();
        this.emailAddresses = new Set(emailAddresses);
        this.owners = new Set();
        this.lookup = new Map<string, string>();

        console.log(`emailAddresses: ${emailAddresses}`);
    }

    protected defaultResult(): void {}

    visitFile(ctx: FileContext): void {
        super.visitChildren(ctx);
    }

    private hasEmailAddressCaseInsensitive(email: string): boolean {
        for (const emailAddress of this.emailAddresses) {
            if (emailAddress.toLowerCase() === email.toLowerCase()) {
                return true;
            }
        }
        
        return false;
    }
    
    visitEntry(ctx: EntryContext): void {
        const email = ctx.EMAIL().text;
        const handle = ctx.GITHUB_HANDLE().text;
    
        if (this.hasEmailAddressCaseInsensitive(email)) {
            console.log(`email: ${email}, handle: ${handle}`);
            this.owners.add(handle);
        }
    
        this.lookup.set(email.toLowerCase(), handle);
    }

    getOwners(): string[] {
        return Array.from(this.owners);
    }
}
