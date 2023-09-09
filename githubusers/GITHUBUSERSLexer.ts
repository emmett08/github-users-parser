// Generated from GITHUBUSERSLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class GITHUBUSERSLexer extends Lexer {
	public static readonly WHITESPACE = 1;
	public static readonly NEWLINE = 2;
	public static readonly GITHUB_HANDLE = 3;
	public static readonly EMAIL = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WHITESPACE", "NEWLINE", "GITHUB_HANDLE", "EMAIL", "LOCAL_PART", "DOMAIN",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITESPACE", "NEWLINE", "GITHUB_HANDLE", "EMAIL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GITHUBUSERSLexer._LITERAL_NAMES, GITHUBUSERSLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GITHUBUSERSLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GITHUBUSERSLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "GITHUBUSERSLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return GITHUBUSERSLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return GITHUBUSERSLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return GITHUBUSERSLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return GITHUBUSERSLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06;\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x03\x02\x06\x02\x11\n\x02\r\x02\x0E\x02\x12\x03\x02\x03\x02" +
		"\x03\x03\x06\x03\x18\n\x03\r\x03\x0E\x03\x19\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x06\x04 \n\x04\r\x04\x0E\x04!\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x06\x06)\n\x06\r\x06\x0E\x06*\x03\x07\x06\x07.\n\x07\r\x07\x0E\x07" +
		"/\x03\x07\x03\x07\x06\x074\n\x07\r\x07\x0E\x075\x06\x078\n\x07\r\x07\x0E" +
		"\x079\x02\x02\x02\b\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x02\r\x02\x02\x03\x02\x07\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x07\x02" +
		"//2;C\\aac|\b\x02--/02;C\\aac|\x06\x02//2;C\\c|\x02?\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x03\x10\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02\x07\x1D\x03\x02\x02" +
		"\x02\t#\x03\x02\x02\x02\v(\x03\x02\x02\x02\r-\x03\x02\x02\x02\x0F\x11" +
		"\t\x02\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10" +
		"\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x15" +
		"\b\x02\x02\x02\x15\x04\x03\x02\x02\x02\x16\x18\t\x03\x02\x02\x17\x16\x03" +
		"\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03" +
		"\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\b\x03\x02\x02\x1C\x06\x03" +
		"\x02\x02\x02\x1D\x1F\x07B\x02\x02\x1E \t\x04\x02\x02\x1F\x1E\x03\x02\x02" +
		"\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\b\x03" +
		"\x02\x02\x02#$\x05\v\x06\x02$%\x07B\x02\x02%&\x05\r\x07\x02&\n\x03\x02" +
		"\x02\x02\')\t\x05\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02*+\x03\x02\x02\x02+\f\x03\x02\x02\x02,.\t\x06\x02\x02-,\x03\x02" +
		"\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0207\x03\x02" +
		"\x02\x0213\x070\x02\x0224\t\x06\x02\x0232\x03\x02\x02\x0245\x03\x02\x02" +
		"\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0271\x03\x02\x02" +
		"\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\x0E\x03\x02" +
		"\x02\x02\n\x02\x12\x19!*/59\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GITHUBUSERSLexer.__ATN) {
			GITHUBUSERSLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GITHUBUSERSLexer._serializedATN));
		}

		return GITHUBUSERSLexer.__ATN;
	}

}

