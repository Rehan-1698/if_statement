// We print the 5 stars in horizontal and 5 stars vertical direction.
// let stars ="";
// for (let i = 0; i < 5; i++) {
//     stars = stars + '* '
//     //  console.log(stars);
// }
// console.log(stars);
// for(let i =0; i< 5; i++){
//     console.log("*")
// }    


// console.log("=====2nd Question======")
// let a = 2;
// for (let i = 1; i <= 10; i++) {
//     console.log( `${a} x ${i} = ${a*i}`);

// }


for(let i = 1; i<=5; i++){
    let space = "";
    for(let k = 5; k>i; k--){
        space = space + " ";
    }
    
   let str = "";
    for(let j = 1; j<=i; j++){
    str = str + "* "
    }
    console.log(space + str)
}
