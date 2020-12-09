/*
 * @Date: 2020-10-12 17:05:19
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-12 17:05:31
 * @description: 
 */

/// <reference path="Validation.ts" />

namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}