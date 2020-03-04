import React from 'react';
/* const test = {
   name: 'test',
   cities: ['city 1', 'city 2', 'city 3'],
   placesLived(){
        
       this.cities.forEach((city) => {
       console.log(this.name + ' has lived in '+ city);
       
       });
   }
};
test.placesLived();*/
/*
const test = {
    name: 'test',
    cities: ['city 1', 'city 2', 'city 3'],
    placesLived() {

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;

        });
        return cityMessages;
    }
};
console.log(test.placesLived());
*/
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 8,
    multiply() {//metodo
      return this.numbers.map((number) => number * this.multiplyBy );
     //number es cada numero individual sacado del array numbers
    }
};
console.log(multiplier.multiply());

/*export const squareArrow = (x) => {
    return x * x;
}*/

export const squareArrow = (x) => x * x;


/*
export const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};*/


export const getFirstName = (fullName) => fullName.split(' ')[0];