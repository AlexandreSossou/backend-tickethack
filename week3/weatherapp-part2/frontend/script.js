// Insert your code here





fetch('http://localhost:3000/weather')
 .then(response => response.json())
 .then(data => {
   console.log(data);
 });



