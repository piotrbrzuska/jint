// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit]
 *
 * @path ch15/15.10/15.10.2/15.10.2.11/S15.10.2.11_A1_T9.js
 * @description DecimalIntegerLiteral is not 0
 */

var arr = /((((((((((A))))))))))\10\9\8\7\6\5\4\3\2\1/.exec("AAAAAAAAAAA");

//CHECK#1
if ((arr === null) || (arr[0] !== "AAAAAAAAAAA")) {
  $ERROR('#1: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[0] === "AAAAAAAAAAA". Actual. ' + (arr && arr[0]));
}

for (i = 1; i <= 10; i++) {
  //CHECK#i
  if ((arr === null) || (arr[i] !== "A")) {
    $ERROR('#2: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[' + i + '] === "A". Actual. ' + (arr && arr[i]));
  }
}  

