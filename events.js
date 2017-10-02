/*
var events=require('events');

/* element.on('click',function(){}) ----
var myEmitter=new events.EventEmitter();
myEmitter.on('someEvent',function(mssg)
{console.log(mssg);

});
myEmitter.emit('someEvent','the Event was emitted');

*/
var events=require('events');
var util=require('util');

var Person=function(name){
  this.name=name;
};
util.inherits(Person, events.EventEmitter);

var james=new Person('james');
var loli=new Person('loli');
var pedro=new Person('pedro');
var people=[james,loli,pedro];

people.forEach(function(Person){
  Person.on('speak',function(mssg){
  console.log(Person.name + ' said : ' + mssg);
});
});
james.emit('speak', 'hey dudes');
