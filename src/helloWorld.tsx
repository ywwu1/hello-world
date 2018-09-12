import {Component} from '@stencil/core';

@Component({
    tag: 'hello-world'
})
export class HelloWorld {

    render() {
        return (
            <div> 
                <span>
                    Hello World!
                </span>
            </div>
        );
    }
}