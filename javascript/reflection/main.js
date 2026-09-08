class Foo {
  #bar;
  constructor(bar=10){
    this.#bar = bar;

  }
  get bar(){
    return this.#bar;
  }

  doImportantWork(x){
    console.log("#bar", this.#bar);
    console.log("x", x);
    return x*42*this.#bar;
  }
}
console.log(Foo.toString()); 
let foo = new Foo();
console.log("new Foo()", foo);

console.log(Object.getOwnPropertyNames(foo));

let proto = Object.getPrototypeOf(foo);
let descriptors = Object.getOwnPropertyDescriptors(proto);
let props = Object.getOwnPropertyNames(proto);

console.log("let proto = Object.getPrototypeOf(foo): ", proto);
console.log("Object.getOwnPropertyNames(proto)", props);
console.log("Object.getOwnPropertyDescriptors(proto)", descriptors);

const name = "doImportantWork";
const func = descriptors[name].value;
console.log("body", func.toString());

// note: need to pass `this` arg explicitly (js methods dont carry reference to their object).
const res = func.call(foo, 2);
console.log(name, "result", res);
