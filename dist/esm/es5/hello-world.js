/*! Built with http://stenciljs.com */
import { h } from './helloworld.core.js';
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.render = function () {
        return (h("div", null, h("span", null, "Hello World!")));
    };
    Object.defineProperty(HelloWorld, "is", {
        get: function () { return "hello-world"; },
        enumerable: true,
        configurable: true
    });
    return HelloWorld;
}());
export { HelloWorld };
