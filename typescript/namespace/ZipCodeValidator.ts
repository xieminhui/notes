/*
 * @Date: 2020-10-12 17:05:45
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-12 17:05:48
 * @description: 
 */

/// <reference path="Validation.ts" />
namespace Validation {
  const numberRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}