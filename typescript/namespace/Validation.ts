/*
 * @Date: 2020-10-12 17:05:10
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-12 17:05:40
 * @description: 
 */
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}