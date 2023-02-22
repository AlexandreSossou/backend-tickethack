// Insert your code here
for (let i =1;i<16;i++){  
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {               
            const a = `
            <div class="pokemon ${data.types[0].type.name}">
                      <div class="imgContainer">
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}" />
                      </div>
                      <div class="info">
                          <h3 class="name">${data.name}</h3>
                          <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                      </div>
                  </div>`           
              document.querySelector('#pokemonContainer').innerHTML += a; 
          }
        );
}

document.querySelector("#next").addEventListener('click',function(){

                let c = document.querySelectorAll('.imgContainer').length;
                for (let i =c;i<c+15;i++){  
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    .then(response => response.json())
                    .then(data => {               
                        const a = `
                        <div class="pokemon ${data.types[0].type.name}">
                                  <div class="imgContainer">
                                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}" />
                                  </div>
                                  <div class="info">
                                      <h3 class="name">${data.name}</h3>
                                      <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                                  </div>
                              </div>`           
                          document.querySelector('#pokemonContainer').innerHTML += a; 
                      }
                    );
            }

         
        })



