/*
 * @Date: 2020-10-14 10:05:14
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-14 11:47:37
 * @description: 
 */

// declare var jQuery: (selector: string) => any;
// jQuery('#foo');


declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  namespace fn {
    function extend(object: any): void;
  }
}

// src/index.ts

jQuery.ajax('/api/get_something');
jQuery.fn.extend({
  check: function () {
    return this.each(function () {
      this.checked = true;
    })
  }
})