console.log('Ok'); //se observa la conexion con el js

const url = 'https://jsonplaceholder.typicode.com/users' //url de los usuarios
fetch(url)
.then(response => response.json()) 
.then(data =>{
   
    let element = document.getElementById('n1')
    element.innerHTML +=`<h3 align="center"><p><b>Listar a los 10 usuarios</h3></p></b>`
    for(i=0;i<10; i++) {
            element.innerHTML += `

            <h3 align="center"><p><b><a href="javascript:funcion1(${data[i].id})" style="text-decoration:none"><p>${data[i].name}<p></a></b></p></h3>
            `;   
    }
    console.log(data) //se observa que los nombres con la peticion json
      })
.catch(err=>console.log(err))


//Funcion para la peticion de los datos de cada uno de los usuarios deacuerdo al id de usuario
function funcion1(id){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(response => response.json()) 
    .then(data =>{
        let element = document.getElementById('n1')
        console.log(id-1) //bandera para observar si es correcto id de la peticion
            element.innerHTML = `
            <h2 align="center"><p><b>Datos del usuario</b></p></h2>
            <h3 align="center"><p>
            <p>Name: ${data[id-1].name}<p></a></p>
            <p>Username: ${data[id-1].username}<p></a></p>            
            <p>Email: ${data[id-1].email}<p></a></p>
            <p>Phone: ${data[id-1].phone}<p></a></p>
            <p>Website: ${data[id-1].website}<p></a></p>
            <input type ='button' value = 'posts' onclick="javascript:funcion2(${data[id-1].id})";"/>
            <input type ='button' value = 'todos' onclick="javascript:funcionTodos(${data[id-1].id})";"/>
            </h3></p>
            `;   
    })
}

function funcion2(id2){
    console.log("funcionb")

    const url1 = 'https://jsonplaceholder.typicode.com/users/'+id2+'/posts'
   console.log(url1)
    fetch(url1)
    .then(response => response.json()) 
    .then(data =>{
        
        console.log(data)
        console.log((id2-1)+i)
        let element = document.getElementById('n1')
        var id1 = new Array(10)
        for(i=0;i<10; i++) {
            
            console.log(id2-1)
                element.innerHTML += `
                <p>Id de post ${data[(id2-id2)+i].id}<p></a></p>
                <p>Titulo: ${data[(id2-id2)+i].title}<p></a></p>         
                <p>Cuerpo: ${data[(id2-id2)+i].body}<p></a></p>     
                `; 
                funcion3(data[(id2-id2)+i].id)  
            
        }
    })
}


function funcionTodos(id3){ //Funcion para la peticion del boton Todos 
    console.log("funcionTodos")

    const url1 = 'https://jsonplaceholder.typicode.com/users/'+id3+'/todos'
   console.log(url1)
    fetch(url1)
    .then(response => response.json()) 
    .then(data =>{
        //parte para imprimir las tareas de mayor a menor
        console.log(data)
        console.log((id3-1)+i)
        let element = document.getElementById('n1')
        var id1 = new Array(10)
        for(i=19;i>=0; i--) {
            
            console.log(id3-1)
                element.innerHTML += `
                <h4 align="center"><p>
                <p>Id ${data[(id3-id3)+i].id}<p></a></p>
                <p>Title: ${data[(id3-id3)+i].title}<p></a></p>         
                <p>Completed: ${data[(id3-id3)+i].completed}<p></a></p>   
                </div>
                <h4></p>`; 
        } 
        //parte para la agreación de la nueva tarea del usuario
        var form = document.getElementById('form')
        
          form.addEventListener('submit', function(save){
          save.preventDefault()
          var title = document.getElementById('title').value
          var completed = document.getElementById('completed').value
          var id = id3  
          console.log(Number.isInteger(id)) //bandera para observar que el id es entero   
          fetch("https://jsonplaceholder.typicode.com/users/'+id3+'/todos",{ //Se realiza la peticion POST para guardar la actividad 
              method: 'POST',
              body:JSON.stringify({
                  title: title,
                  completed: completed,
                  userId: id

              }),
              headers:{
                  "Content-Type":"application/json; charset=UTF-8"
              }
          })
          .then(function(response){
              return response.json()
          })
          .then(function(data){
              console.log(data) //bandera para observar que efectivamente se esta mandado la peticion POST
              var result = document.getElementById('n1')
              result.innerHTML =
              `
              <div id='form'>     
              Guardado, con el id ${data.id}
              </div>
              `; 
          })
              
          })
        
    })
    //formulario de la nueva actividad 
    let element = document.getElementById('n1')
    element.innerHTML =` 
    <h3 align="center"><p>
    <div id='form'> FORMULARIO PARA NUEVA ACTIVIDAD      
            
        <form>
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title"><br>
            <label for="completed">Completed:</label><br>
            <input type="checkbox" id="completed" name="completed"><br>
            <input type="submit" value="Guardar">
           
        </form>    
        <p> </p>
        <p> </p>
        <p>TAREAS DEL USUARIO </p>
    </div>
    </h3 ></p>`;   
        
}


function funcion3(it){
    console.log("funcionb")
    const url2 = 'https://jsonplaceholder.typicode.com/users/'+(it)+'/comments'
    console.log(url2)
            fetch(url2)
            .then(response => response.json()) 
            .then(data =>{
                console.log(data)
                let element = document.getElementById('n1')
                    element.innerHTML += `
                    <p>comentario: ${data[it].body}<p></a></p> 
                  
                    `;   
                
            })
        }
