lexer grammar GITHUBUSERSLexer;

WHITESPACE      : [ \t]+ -> skip;
NEWLINE         : [\r\n]+ -> skip;
GITHUB_HANDLE   : '@' [a-zA-Z0-9_-]+;
EMAIL           : LOCAL_PART '@' DOMAIN;

fragment LOCAL_PART : [a-zA-Z0-9_.+-]+;
fragment DOMAIN     : [a-zA-Z0-9-]+ ('.' [a-zA-Z0-9-]+)+;
