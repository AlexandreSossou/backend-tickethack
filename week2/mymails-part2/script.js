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




let date = new Date();

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let heure = date.getHours();
let minutes = date.getMinutes();


console.log(year)
// Expected output: 1969



document.querySelector('#footer > span').textContent += " "+ year + "-" + month + "-" + day + " " + heure + ":" + minutes

console.log(document.querySelector('#footer > span').textContent)


