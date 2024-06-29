# Run your first TypeScript Program   

### Generate TS Config  
First generate the TS config file which is json file and which include bunch of configurations stuff related to how to manage typescript code.   
```bash
tsc --init  
```  

## Write first hello world program  
helloworld.ts  
```ts
let msg: string = "Hello TypeScript World!!"
console.log(msg);
```

## Run the above helloworld.ts  
Now let's run the above helloworld.ts program using the below command:  
```bash
node helloworld.ts
```  

But it will give the below error:  
```bash
node helloworld.ts
/home/ec2-user/ts/first-program/helloworld.ts:1
let msg: string = "Hello TypeScript World!!"
       ^

SyntaxError: Unexpected token ':'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1178:20)
    at Module._compile (node:internal/modules/cjs/loader:1220:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.18.2
```

## Why we are getting above error?  
Nodejs isn't gonna compile or isn't gonna read and run the typescript code itself, it actually runs java script code.  

## How to run then?  
So we need to first compile the .ts code into javascript file to be able to run with typescript notations.  
In order to compile helloworld.ts to helloworld.js, run the below command:  
```bash
tsc
```  

Then it will automatically generate the helloworld.js file, now you can run this js file using the nodejs which is below command.
```bash
$ node helloworld.js  
Hello TypeScript World!!
```  

That's it!!!!
