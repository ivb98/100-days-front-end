parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tZYm":[function(require,module,exports) {
var e=65,t=0,n=0,c=1,o=2,r=3,u={KeyA:o,KeyD:r,KeyW:n,KeyS:c};document.addEventListener("keydown",function(e){y(u[e.code])});var d=document.querySelector(".cube-up"),i=document.querySelector(".cube-down"),l=document.querySelector(".cube-left"),a=document.querySelector(".cube-right"),m=[{element:d,direction:n},{element:i,direction:c},{element:l,direction:o},{element:a,direction:r}];function y(u){u===o?e+=90:u===r?e-=90:u===n?t+=90:u===c&&(t-=90),cube.style.transform="rotateY(".concat(e,"deg) rotateZ(").concat(t,"deg)")}m.forEach(function(e){var t=e.direction;e.element.addEventListener("click",function(){return y(t)})});
},{}]},{},["tZYm"], null)