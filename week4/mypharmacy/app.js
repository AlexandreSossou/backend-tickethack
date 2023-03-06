// Insert your code here
var data = require('./data');



function getDrugDescriptionByName(name){

    let a = data.filter(word => word.name === name)
    console.log(a[0].description)
   console.log(a)
    return a[0].description;
    
  

}

getDrugDescriptionByName('Codeine');


function getDrugTypeByName(name){
        

    let a = data.filter(word => word.name === name)
  
    console.log(a[0].type)
    return a[0].type;



}
getDrugTypeByName('Trastuzumab')


function getDrugNamesByGroup(group){
    let a = [];
    for (let i of data){
        if (i.groups[1]=== group){
            a.push(i.name);
            a.sort();

        }
    }
    console.log(a)
    return a
}

getDrugNamesByGroup('Investigational')

module.exports =  { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };

