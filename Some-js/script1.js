
(function(window){
var federicoGreeter = {};
federicoGreeter.name = "Federico";

var greeting = "Hello ";
federicoGreeter.sayHello = function (){
    console.log(greeting + federicoGreeter.name);
}
window.federicoGreeter = federicoGreeter;

})(window);