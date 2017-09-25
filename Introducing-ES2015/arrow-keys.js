/**
 * Created by bam on 9/25/17.
 */

//Define the person constructor, that takes some data
var Person = function (data) {

// and has a method called getKeys that returns the current Object's keys
    for (var key in data) {
        this[key] = data[key];
    }

    this.getKeys = function () {
        return Object.keys(this);
    }
}

//Then instantiate the new Person and give it the name Alena with the role of teacher
var Alena = new Person({name:'Alena', role:'teacher'});

//and console.log the keys
console.log('Alena\'s Keys:', Alena.getKeys());
// 'this' refers to Alena

//Then re-assign the getKeys method to a getKeys variable outside of the person instance
var getKeys= Alena.getKeys();

//Finally execute the new getKeys function and log it to the console
console.log(getKeys());


//Run this file in the console: node arrow-keys.js



//We want to get the same results for both getKeys calls