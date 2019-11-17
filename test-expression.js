let x = 1;
if(typeof function F(){}){
    // x = x+ typeof function F(){};
    x = x + 1;
}
console.log(x);

const a = [10, 20];
const b = [30, 40];

console.log(a+b);
console.log(typeof(a+b));

const result = ((x)=>x)(0);
console.log(result);

const output = ((x)=>{delete x; return x})(0);
console.log(output);