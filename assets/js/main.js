

// 1 ve 2 biryerde

// function element (array){
//   var num = 0
//   for(var i = 0; i < array.length; i++) {
//     if(typeof array[i] == "number")
//     num +=array[i]
   
//   }
//   return num;
// }
// var myArray = [23, 45, 22, 36, -45, 84, 'Emil', 'Abbasov',  'ndjnjdc']

// var total = element(myArray)

// console.log(total)






//3.

// function countElements(array){
//   var dew = 0
//   var dew2 = 0 
//   for(var i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//       dew ++
//     } else {
//       dew2 ++
//     }

// }
// console.log('cut: ' + dew + 'tek: ' + dew2)
// }

// var myArray = [1, 5, 20, 32, 54, 79, 82, 91, 564, 351]

// countElements(myArray)


// 4

// var array2 = ['Tofiq', 'Ruslan', 'Səma', 3, null, 'Məhəmməd', { 'type': "user" }, [1, 2, 3]]

// for (var b in array2) {

//   if (typeof array2[b] === 'string') {

//     console.log(array2[b])
//   }
// }

// 5

// var library = [
//   {
//       author: 'Bill Gates',
//       title: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       author: 'Steve Jobs',
//       title: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       author: 'Suzanne Collins',
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       readingStatus: false
//   }
// ].forEach(function(library){
//   console.log(library.title)
// })


// 6

// var library = [
//   {
//       author: 'Bill Gates',
//       title: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       author: 'Steve Jobs',
//       title: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       author: 'Suzanne Collins',
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       readingStatus: false
//   }
// ].forEach(function(library){
//   if(library.readingStatus==true){
//     console.log(library.title)
//   }
  
// })


// 7

// var elements = [1, 1, 5, 'Mahammad', 'Mahammad', null, null, null, undefined, undefined, 4, 5, 5, 4]

// function tekrarlananlar(array) {
//   var counts = {};
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (counts[element] === undefined) {
//       counts[element] = 1;
//     } else {
//       counts[element]++;
//     }
//   }
//   return counts;
// }
// console.log(tekrarlananlar(elements))