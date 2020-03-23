//Declare name and courses
const fullName = 'Tofunmi Osho';
const courses = ['HTML', 'CSS', 'JavaScript'];

//Display name and courses
console.log(fullName);
console.log(courses);

//Display odd or even numbers between 1-200 depending on the number of courses offered
if(courses.length % 2 !== 0){
   for(i = 1; i <= 200; i++){
      if(i % 2 !== 0){
         console.log(i);
      }
   }
} else {
   for(i = 1; i <= 200; i++){
      if(i % 2 === 0){
         console.log(i);
      }
   }
}