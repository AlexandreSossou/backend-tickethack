const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// // Insert your code here
// const test = new db({
//     "name":"Test",
//     "family":"test"
// });
// test.save();

fetch(`https://fruityvice.com/api/fruit/all`)
        .then(response => response.json())
        .then(data => {   
            
           
            

            for (let i of data){
               console.log
                const newUser = new db({
                "name":i.name,
                "family": i.family,
                "carbohydrates" : i.nutritions.carbohydrates,
                "protein": i.nutritions.protein,
                "fat": i.nutritions.fat,
                "calories": i.nutritions.calories,
                "sugar": i.nutritions.sugar,
                });
                
                newUser.save().then(() => {
 
                    db.find().then(test => {
                      console.log(test);
                    });
            })}

         
        });