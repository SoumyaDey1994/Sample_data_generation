const fs = require('fs');

const sample = 	{
    "name": "John Snow",
    "age": 28,
    "email": "john@gmail.com",
    "aadharNo": 100000000000
}

const length = process.argv[2];
const result = [];
let newSample = null;
for(let index=0; index<length; index++){
    newSample = {...sample};
    newSample.aadharNo = sample.aadharNo + index;
   result.push(newSample);
   newSample=null;
}

fs.writeFile(__dirname+'/sampleData.json', JSON.stringify(result), (err, result)=>{
    if(err)
        console.log(err);
    console.log(`Successfully generated sample data`);
})