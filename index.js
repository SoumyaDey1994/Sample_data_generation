const fs = require('fs');
const sample = 	{
    "name": "John Snow",
    "age": 28,
    "email": "john@gmail.com",
    "aadharNo": 100000000000
}

const length = process.argv[2];
console.log(`Length: ${length}`);
const result = [];
for(let index=0; index<length; index++){
   sample.aadharNo = sample.aadharNo + index;
   co
   result.push(sample);
}

fs.writeFile(__dirname+'/sampleData.json', JSON.stringify(result), (err, result)=>{
    if(err)
        console.log(err);
    console.log(`Successfully generated sample data`);
})