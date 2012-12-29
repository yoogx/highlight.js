/*
Language: AADL
Author: Jerome Hugues <hugues.jerome@gmail.com>
Description: AADL is an Architecture description language standardized by the SAE, see http://www.aadl.info for more details
*/

function(hljs) {
  return {
    case_insensitive: true,
    keywords: {
      keyword: 'abstract access and applies binding calls classifier ' +
	     'connections constant delta data enumeration end event ' +
	     'feature features flow flows group in inherit initial ' +
	     'inverse is list mode modes not out parameter ' +
	     'path port private process processor prototypes ' +
	     'properties with renames package end ' +
	     'property properties provides public range reference refined ' +
	     'refines requires server set sink source ' +
	     'subcomponents system thread to type units value ' +
	     'virtual'
    },
    illegal: '{',
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,        // AADL block commenting.
      {
        className: 'comment',
        begin: '--', end: '$'
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'literal',
        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        className: 'attribute',
        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  }; // return
}
