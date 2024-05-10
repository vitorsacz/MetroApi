import React, { useEffect, useState } from 'react'


function Index() {

  const [amarela, setAmarela] = useState();
  
  

  useEffect(() => {
    // link para a api do flask
    //Passa o Json com a mensagem
    fetch("http://localhost:8080/api/home")
    .then((response) => response.json())
    .then((data) => {

      //message = 'Loading'
      //depois a mensagem é setada
      // message = data.message (Pegando o a mensagem da pi)
      setAmarela(data.amarela)

      //console.log(data.message); //apenas para ver o conteudo sendo chamado no console
      //console.log(data.people);
    })
  }, [])

  return (
    <>
    <div className='home'>
      <div>
        <h1>OPERAÇÃO DAS LINHAS DE METRO</h1>

        <div>
          <h2>Linha Amarela</h2>
          <p>{amarela}</p>
        </div>

      </div>
    </div>
      
    </>
  
  )
}

export default Index;