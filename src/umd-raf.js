(function(window, document, undefined) {
    'use strict';

    function Raf() {
        return this;
    };

    Raf.prototype.requestAnimFrame = function(_fn){
        window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.setTimeout(_fn, 1000 / 60)
        ;
        return requestAnimationFrame(_fn);
    };

    Raf.prototype.cancelRequestAnimFrame = function(_instance) {
        window.cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
        ;
        cancelAnimationFrame(_instance);
    };

     // Based off Lo-Dash's excellent UMD wrapper (slightly modified) - https://github.com/bestiejs/lodash/blob/master/lodash.js#L5515-L5543
    // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // define as an anonymous module
        define(function() {
          return Raf;
        });
    // check for `exports` after `define` in case a build optimizer adds an `exports` object
    }
    else if(typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = Raf;
    }
    else {
        window.Raf = Raf;
    }

}(window, document));