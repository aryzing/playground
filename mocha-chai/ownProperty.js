var a = Object.create(null);

a.color = 'red';

console.log(Object.prototype.hasOwnProperty.call(a, 'color'));
