// Generated from GITHUBUSERSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GITHUBUSERSParserListener } from "./GITHUBUSERSParserListener";
import { GITHUBUSERSParserVisitor } from "./GITHUBUSERSParserVisitor";


export class GITHUBUSERSParser extends Parser {
	public static readonly WHITESPACE = 1;
	public static readonly NEWLINE = 2;
	public static readonly GITHUB_HANDLE = 3;
	public static readonly EMAIL = 4;
	public static readonly RULE_file = 0;
	public static readonly RULE_entry = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "entry",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITESPACE", "NEWLINE", "GITHUB_HANDLE", "EMAIL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GITHUBUSERSParser._LITERAL_NAMES, GITHUBUSERSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GITHUBUSERSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GITHUBUSERSParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GITHUBUSERSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GITHUBUSERSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GITHUBUSERSParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GITHUBUSERSParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.entry();
				this.state = 6;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GITHUBUSERSParser.NEWLINE) {
					{
					this.state = 5;
					this.match(GITHUBUSERSParser.NEWLINE);
					}
				}

				}
				}
				this.state = 10;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GITHUBUSERSParser.GITHUB_HANDLE);
			this.state = 12;
			this.match(GITHUBUSERSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GITHUBUSERSParser.RULE_entry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.match(GITHUBUSERSParser.GITHUB_HANDLE);
			this.state = 15;
			this.match(GITHUBUSERSParser.EMAIL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\x14\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x05\x02\t\n\x02\x06\x02\v\n\x02\r" +
		"\x02\x0E\x02\f\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x02\x02" +
		"\x02\x04\x02\x02\x04\x02\x02\x02\x02\x13\x02\n\x03\x02\x02\x02\x04\x10" +
		"\x03\x02\x02\x02\x06\b\x05\x04\x03\x02\x07\t\x07\x04\x02\x02\b\x07\x03" +
		"\x02\x02\x02\b\t\x03\x02\x02\x02\t\v\x03\x02\x02\x02\n\x06\x03\x02\x02" +
		"\x02\v\f\x03\x02\x02\x02\f\n\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\x0E" +
		"\x03\x02\x02\x02\x0E\x0F\x07\x02\x02\x03\x0F\x03\x03\x02\x02\x02\x10\x11" +
		"\x07\x05\x02\x02\x11\x12\x07\x06\x02\x02\x12\x05\x03\x02\x02\x02\x04\b" +
		"\f";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GITHUBUSERSParser.__ATN) {
			GITHUBUSERSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GITHUBUSERSParser._serializedATN));
		}

		return GITHUBUSERSParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GITHUBUSERSParser.EOF, 0); }
	public entry(): EntryContext[];
	public entry(i: number): EntryContext;
	public entry(i?: number): EntryContext | EntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntryContext);
		} else {
			return this.getRuleContext(i, EntryContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GITHUBUSERSParser.NEWLINE);
		} else {
			return this.getToken(GITHUBUSERSParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBUSERSParser.RULE_file; }
	// @Override
	public enterRule(listener: GITHUBUSERSParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBUSERSParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBUSERSParserVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryContext extends ParserRuleContext {
	public GITHUB_HANDLE(): TerminalNode { return this.getToken(GITHUBUSERSParser.GITHUB_HANDLE, 0); }
	public EMAIL(): TerminalNode { return this.getToken(GITHUBUSERSParser.EMAIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBUSERSParser.RULE_entry; }
	// @Override
	public enterRule(listener: GITHUBUSERSParserListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBUSERSParserListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBUSERSParserVisitor<Result>): Result {
		if (visitor.visitEntry) {
			return visitor.visitEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


