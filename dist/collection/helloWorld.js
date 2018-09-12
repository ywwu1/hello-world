export class HelloWorld {
    render() {
        return (h("div", null,
            h("span", null, "Hello World!")));
    }
    static get is() { return "hello-world"; }
}
