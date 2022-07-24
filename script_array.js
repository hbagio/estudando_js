let array = ['String',1,false,['Array1'],'Bagio'];
console.log(array); 
console.log(array[2]); 
//Retornar o indice do valor
console.log(array.indexOf['Bagio']); 
//Percorre o array
array.forEach(function (item,index) {console.log(index, '-', item )} );
//Adiciona item ao final
array.push('Vanusa');

console.log(array); 
//Remove item do final
array.pop();

console.log(array); 
//Remove item do começo
array.shift();

console.log(array); 

//Adiociona item no começo
array.unshift('Hueliton');

console.log(array); 