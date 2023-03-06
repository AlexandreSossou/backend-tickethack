// Insert your code here
var data = require('./data');



function getDrugDescriptionByName(name){

    let a = data.filter(word => word.name === name)
    console.log(a[0].name)
   
    return a[0].name;
    
  

}

getDrugDescriptionByName('Morphin');


function getDrugTypeByName(name){
        

    let a = data.filter(word => word.name === name)
  
    console.log(a[0].type)
    return a[0].type;



}
getDrugTypeByName('Morphin')


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