import {b} from '../home/index';

let a:number = 2;
console.log(a);

interface Lib {
  ():void;
  ver:number;
}
enum nochangge {
  JAN,
  FER,
  MAR
}
console.log(nochangge.FER);
let lib:Lib = (() => {}) as Lib;
lib.ver = 3;
console.log(typeof lib);

class A {
  a:number
}
let obj = {} as A;
obj.a = 3;