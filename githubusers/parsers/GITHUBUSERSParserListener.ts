// Generated from GITHUBUSERSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GITHUBUSERSParser";
import { EntryContext } from "./GITHUBUSERSParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GITHUBUSERSParser`.
 */
export interface GITHUBUSERSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GITHUBUSERSParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBUSERSParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBUSERSParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBUSERSParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;
}

