// Code goes here...
console.log("hello")

const randomJoke = fetch('curl -X "GET" "https://api.spotify.com/v1/artists/" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDlA4EyFyfe6PBIGk4EmZmrIAJgMSfbTIAATUsQYqZA0CGZCyEC3M8jfw0xREbi2-Sx0IKImYS7tD7mqsfFAFZJqNfdkvYIuB6pp36ldhheCkAnw5XlZO3Kx0UV1AU8wBzEigtU1pGMU1bkzObpZU9Mh5rxfNvJzedR54mpEjiTNKE5mYjAEkqIIKIaLz8ruGbq')
 .then(response => response.json())
 .then(data => {
  
   //document.querySelector('#searchBar').value = 
   return data;
 });

 