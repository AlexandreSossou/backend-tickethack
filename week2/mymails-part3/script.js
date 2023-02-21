
//----------------------------------variables---------------------------------------------------
let a = document.querySelectorAll(".delete")// 5
let b = document.querySelectorAll(".row")
let c = document.querySelector("#btn-add")
let d = document.querySelector('#btn-search')
let e = document.querySelector('#search-message')
let f = document.querySelectorAll('h6')
let newMsg = document.querySelector('#add-message');
const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>${newMsg.value}</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;
let messagesCount = document.querySelectorAll('p').length;
let year = new Date().getUTCFullYear();
let month;
let day;


//----------------------------------date--------------------------------------------------------------
if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}
if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}
const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

//----------------------------------suppression message---------------------------------------------------
console.log("suppression message")

for (let i=0; i<a.length;i++){ //5
  a[i].addEventListener("click", 
  function(){
    b[i].remove();
    messagesCount = document.querySelectorAll('p').length;//Compteur messages
    document.querySelector('#count').textContent = messagesCount;//compteur
  })
}

//--------------ajout message --------------------------------------------------------------------- 
console.log("add message")

c.addEventListener('click',function(){
 

  const newM = `<div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>${newMsg.value}</p>
    </div>
    <span class="delete">✖</span>
  </div>
`
  document.querySelector('#msg-container').innerHTML += newM;

  messagesCount = document.querySelectorAll('p').length;//Compteur messages
  document.querySelector('#count').textContent = messagesCount;//Compteur

  newMsg.value = "";
  

  //suppression après dans la liste des créés

  let t = document.querySelectorAll(".delete")
  let g = document.querySelectorAll(".row")
  
  for (let i=0; i<t.length;i++){
    t[i].addEventListener("click", 
    function(){
      g[i].remove();
      messagesCount = document.querySelectorAll('p').length;//Compteur messages
      document.querySelector('#count').textContent = messagesCount;//compteur
    })
  }
})


// ---------------  moteur de recherche--------------
console.log("moteur de recherche")



d.addEventListener('click',function(){
  textToCompare = e.value.toLowerCase();
  
  e.value = "";
  

  for (let i =0; i<f.length;i++){
    b[i].style.display="flex"
    let y = f[i].textContent.toLowerCase();
    console.log("on examine : "+y)
    let z = y.indexOf(textToCompare);
    console.log("présent ?  " +z)
   
    if (z!=-1){
      console.log("oui")
      let textToShow=b[i]
      textToShow.style.display = "flex";
    }
    else{
      console.log("non")
      let textToHide=b[i]
      textToHide.style.display = "none";
    }
  }  
  
})
