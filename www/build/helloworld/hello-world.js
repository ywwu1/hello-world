/*! Built with http://stenciljs.com */
const { h } = window.helloworld;

class HelloWorld {
    render() {
        return (h("div", null,
            h("span", null, "Hello World!")));
    }
    static get is() { return "hello-world"; }
}

export { HelloWorld };
