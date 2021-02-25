var cent = []

for ( var i = 1; i <= 100; i++ ) {

     if  ( i % 3 == 0 && i % 5 == 0) {
        cent.push("fizzbuzz")   
    } else if ( i % 3 == 0){
        cent.push("fizz") 
    } else if ( i % 5 == 0) {
        cent.push("buzz")
    } else { 
        cent.push(i); 
    }
}
console.log(cent);


