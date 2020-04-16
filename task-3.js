function divisor(num) {
   const output = [];
   
   for(let i = 1; i <= num; i++) {
     let value = i;
     
     if(i % 2 === 0){
         value = 'yu'
     }
    
     if(i % 3 === 0 && isNaN(value)) {
       value += '-gi'
     } else if(i % 3 === 0) {
       value = 'gi'
     }
     
    if(i % 5 === 0 && isNaN(value)) {
       value += '-oh'
     } else if(i % 5 === 0) {
       value = 'oh'
     }
     
     output.push(value);
   }
   
   console.log(output);
   
   return output;
}
 
divisor(100);

divisor(45);