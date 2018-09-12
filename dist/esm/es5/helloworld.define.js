// helloworld: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './helloworld.core.js';
import {
  HelloWorld
} from './helloworld.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    HelloWorld
  ], opts);
}