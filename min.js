/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{self.WeakMap=WeakMap}catch(WeakMap){self.WeakMap=function(t,e){"use strict";function a(e){i(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(n,this)}function n(t){this.set(t[0],t[1])}var i=e.defineProperty,r=e.hasOwnProperty,s=a.prototype;return s["delete"]=function(t){return this.has(t)&&delete t[this._]},s.get=function(t){return this.has(t)?t[this._]:void 0},s.has=function(t){return r.call(t,this._)},s.set=function(t,e){return i(t,this._,{configurable:!0,value:e}),this},a}(Math.random(),Object)}