// Take an integer and print the multiplication table of the integer up to a factor of 10 in this form (n x 1 = n)
console.log("====Question-1=====")
let n = 5;
for(let i = 1; i<=10; i++){
 console.log(`${n} x ${i}= ${n*i}`);
}


// Take an integer and print "YES" if integer is PRIME  and print "NO" if it is not.
console.log("====Question-2=====")


let count = 0;
 let m = 123;
for(let i = 1; i <= m; i++){

    if(m%i==0){
        // console.log(i);
        count++;
    }
}

if(count==2){
    console.log("YES NUMBER IS PRIME")
}
else{
    console.log("NO NUMBER IS NOT PRIME") 
}