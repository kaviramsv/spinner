process.stdout.write('hello from spinner2.js... \rheyyy what\n');
//use the special character \r to return our cursor back to the beginning of the line
let val=["|","/","-","\\","|","/","-","\\","|"];
let timer=100;
for(const item of val ){
setTimeout(() => {
  process.stdout.write(`\r${item}  `);
}, timer+=200);
}
setTimeout(() => {
    console.log();
 }, timer+=200);

