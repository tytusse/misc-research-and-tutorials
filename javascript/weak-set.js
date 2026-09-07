let ws = new WeakSet();
let items = [
  { name: "foo" },
  { name: "bar" },
];
items.forEach(ws.add, ws);
items.pop();
console.log(ws.count);
