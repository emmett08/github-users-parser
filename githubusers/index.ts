import { CharStreams, CommonTokenStream } from "antlr4ts";
import { DefaultVisitor } from "./DefaultVisitor";
import { GITHUBUSERSLexer } from "./parsers/GITHUBUSERSLexer";
import { GITHUBUSERSParser, FileContext } from "./parsers/GITHUBUSERSParser";

export * from './parsers/GITHUBUSERSLexer';
export * from './parsers/GITHUBUSERSParser';
export * from './parsers/GITHUBUSERSParserListener';
export * from './parsers/GITHUBUSERSParserVisitor';
export * from './DefaultVisitor';

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
