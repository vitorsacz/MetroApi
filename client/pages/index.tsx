import React, { useEffect, useState } from 'react'

function Index() {

  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // link para a api do flask
    //Passa o Json com a mensagem
    fetch("http://localhost:8080/api/home")
    .then((response) => response.json())
    .then((data) => {

      //message = 'Loading'
      //depois a mensagem é setada
      // message = data.message (Pegando o a mensagem da pi)
      setMessage(data.message);
      setPeople(data.people);

      //console.log(data.message); //apenas para ver o conteudo sendo chamado no console
      //console.log(data.people);
    })
  }, [])

  return (
    <>
      <div> <p>aqui eu estou passando a mensagem </p>{ message }</div>

      {/* o map funciona como um for, para iterar dentro do array qe contem os */}
      
      {people.map((person, index) => (

        <div key={index}>{person}</div>

      ))}
    
    </>
  
  )
}

export default Index;