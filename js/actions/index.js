"use strict";

export function increment() {
    return {
        type: 'PLUS',
        num: 1
    };
}

export function decrement() {
    return {
        type: 'PLUS',
        num: -1
    };
}
