import { CharStreams, CommonTokenStream } from "antlr4ts";
import { GITHUBUSERSLexer } from "./GITHUBUSERSLexer";
import { GITHUBUSERSParser, FileContext } from "./GITHUBUSERSParser";
import { DefaultVisitor } from "./githubusers_visitor";

export const GetGitHubHandlesByEmail = (input: string, emailAddresses: string[]): string[] => {
    const chars = CharStreams.fromString(input);
    const lexer = new GITHUBUSERSLexer(chars);
    const tokens= new CommonTokenStream(lexer);
    const parser = new GITHUBUSERSParser(tokens);
    let tree: FileContext | null = null;

    try {
        tree = parser.file();
    } catch (error) {
        console.error(`Error parsing file: ${error}`);
    }

    if (!tree) {
        console.error(`No tree`);
        return [];
    }

    const visitor = new DefaultVisitor(emailAddresses);

    try {
        visitor.visit(tree);
    } catch (error) {
        console.error(`Error visiting tree: ${error}`);
    }

    const owners = visitor.getOwners();

    return owners;
}
