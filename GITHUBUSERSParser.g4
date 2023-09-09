parser grammar GITHUBUSERSParser;

options { tokenVocab=GITHUBUSERSLexer; }

file            : (entry NEWLINE?)+ EOF;
entry           : GITHUB_HANDLE EMAIL;
