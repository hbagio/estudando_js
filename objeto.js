let object = {String: 'String', Number: 1, Boolean: true, array:['array'], 
                objectInterno: objectInterno = {objectInterno: 'objectInterno'}  };

console.log(object);
console.log(object.String);

var arrayOb = object.array;

console.log(arrayOb);