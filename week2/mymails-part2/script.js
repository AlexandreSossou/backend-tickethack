// Insert your code here
console.log("hello")



document.querySelector('#msg-container').innerHTML += `

<div class="row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
  <h6>Benoît de Buyer</h6>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
    unde vel magni possimus libero, alias suscipit nobis officia
    accusantium. Laborum ipsam accusamus iusto deserunt mollitia.
    Repudiandae alias sequi nobis ipsum.
  </p>
</div>
<span class="delete">✖</span>
</div>
`

console.log(document.querySelectorAll('.avatar').length)

console.log(document.querySelector('#count').textContent)
document.querySelector('#count').textContent = document.querySelectorAll('.avatar').length;




let mydate = new Date();


let year = mydate.getFullYear()
let month = mydate.getMonth() +1
let day = mydate.getDate()

let heure = mydate.getHours();
let minutes = mydate.getMinutes();

//Ajoutez une nouvelle balise span à la div “footer” portant l’id “date” et donnez lui pour valeur celle de la variable “date” nouvellement créée.
document.querySelector('#footer').innerHTML += `<span id ="date"/>`

// Expected output: 1969

const date = year + '-'+ month +'-'+ day + " " + heure + ':' + minutes

document.querySelector('#date').textContent += date

console.log(document.querySelector('#date').textContent)





