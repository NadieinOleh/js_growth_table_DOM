parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".container"),a=document.querySelector(".field"),d=a.tBodies[0],i=document.querySelector(".append-row"),u=document.querySelector(".append-column"),m=document.querySelector(".remove-row"),s=document.querySelector(".remove-column");l.addEventListener("click",function(t){if(t.target.matches(".append-row")){var r=document.querySelector("tr").cloneNode(!0);10===d.children.length&&(t.target.disabled=!0),2===d.children.length&&(m.disabled=!1),d.append(r)}t.target.matches(".remove-row")&&(d.deleteRow(-1),2===d.children.length&&(t.target.disabled=!0),10===d.children.length&&(i.disabled=!1)),t.target.matches(".append-column")&&e(a.rows).forEach(function(e){e.innerHTML+="\n      <tr>\n        <td></td>\n      </tr>",10===e.children.length&&(t.target.disabled=!0),2===e.children.length&&(s.disabled=!1)}),t.target.matches(".remove-column")&&e(a.rows).forEach(function(e){e.deleteCell(-1),e.children.length<=2&&(t.target.disabled=!0),e.children.length>=2&&(u.disabled=!1)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.75110bad.js.map