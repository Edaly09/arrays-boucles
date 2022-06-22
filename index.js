// ## 01 - Fruits
// const fruits = ["mango", "lemon", "blueberry"]
// console.log(fruits)

// console.table(fruits)

// ## 03 - Add and Remove
// const objects = ["pen", "book","lamp"]

// objects.unshift("chair")

// console.log(objects)

// objects.pop()

// console.log(objects)

// objects.push("laptop")

// console.log(objects)

// objects.shift("chair")

// console.log(objects)

// ## 04 - Order
// const numbers = [4, 10, 8, 12, 6]

// console.log(numbers)

// numbers.reverse()

// console.log(numbers)


// ## 05 - Boucle
// const limit = 10
// let total = 0


// for(let i = 0; i <= limit; i++){

//   total = total + i

//   console.log(total)
// }

// total = 0
// const limit = 10
// let i = 0

// while(i < limit ){
//   i++

//   total = total + i

//   console.log(total)
// }


// ## 06 - Reverse

// const sentence = "Hello Konexio !"


// for(let i = 0; i < sentence.length; i++){
//   console.log()
// }



// - Créez une const `sentence` ayant pour valeur "Hello Konexio !"
// - A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")


// ## 07 - Fizzbuzz

// const max = 100

// for(let i = 0; i < 100; i++){
//   if(i % 3 === 0){
//     console.log("fizz")
//   }
//   else if(i % 5 === 0) {
//    console.log("buzz")
//   }
//   else if( i % 5 && 3 === 0){
//     console.log("fizzbuzz")
//   }
//   else if(i % 7 === 0){
//     console.log()
//   }
//   else{
//     console.log(i)
//   }

// }


// ## 08 - While

// const max = 100
// let i = 0

// while(i < max){
//   i++

//   if(i % 3 === 0){
//     console.log("fizz")
//   }
//   else if(i % 5 === 0) {
//    console.log("buzz")
//   }
//   else if( i % 5 && 3 === 0){
//     console.log("fizzbuzz")
//   }
//   else if(i % 7 === 0){
//     console.log()
//   }
//   else{
//     console.log(i)
//   }

// }


// ## 09 - Sans boucle

// const names = ["Edaly","Emad","wallid1","wallid2","Ryan","Dannh","Wade","Thomas","Jad","Mago","Benoit", "Lucas"]

// const min = 0

// const max = names.length - 1

// const random = Math.floor(Math.random() * max) + min


// console.log(names[random])

// ## 10 - Random and max

let numbers = []

// const max = 100
// const min = 0
// let Numbers = []



for(let i = 0; i < 20; i++){

  numbers[i] = Math.floor(Math.random() * 20) + 0

  // Numbers = array.push[random]
  
}

console.log(numbers)

let max = 0

for(let i = 0; i < numbers.length; i++){

  if(i < numbers[i]){
    max = numbers[i]
  }

}
console.log(max)


// - Créez un tableau vide
//     - Avec une boucle for, ajoutez 20 entiers aléatoires entre 0 et 100
// - Affichez ce tableau

// - Avec une deuxième boucle for, trouvez l'entier le plus grand de votre tableau (pas le droit d'utiliser Math.max)



