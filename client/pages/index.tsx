import React, { useEffect, useState } from 'react'


function Index() {

  const [amarela, setAmarela] = useState();
  const [azul, setAzul] = useState();
  const [coral, setCoral] = useState();
  const [diamante, setDiamante] = useState();
  const [esmeralda, setEsmeralda] = useState();
  const [jade, setJade] = useState();
  const [lilas, setLilas] = useState();
  const [prata, setPrata] = useState();
  const [rubi, setRubi] = useState();
  const [safira, setSafira] = useState();
  const [turquesa, setTurquesa] = useState();
  const [verde, setVerde] = useState();
  const [vermelha, setVermelha] = useState();
  
  

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
      setAzul(data.azul)
      setCoral(data.coral)
      setDiamante(data.diamante)
      setEsmeralda(data.esmeralda)
      setJade(data.jade)
      setLilas(data.lilás)
      setPrata(data.prata)
      setRubi(data.rubi)
      setSafira(data.safira)
      setTurquesa(data.turquesa)
      setVerde(data.verde)
      setVermelha(data.vermelha)


      console.log(data); //apenas para ver o conteudo sendo chamado no console
      //console.log(data.people);
    })
  }, [])

  return (
    <>
    <div>
        <h1>OPERAÇÃO DAS LINHAS DE METRO</h1>

        <div>
          <div>
          {/* inserir uma imagem do metro  */}
            <h2>Metro sp</h2>

            <p>Linhas azul</p>
            <p>{azul}</p>

            <p>Linhas verde</p>
            <p>{verde}</p>

            <p>Linhas vermelha</p>
            <p>{vermelha}</p>

            <p>Linhas prata</p>
            <p>{prata}</p>

          </div>

          <div>
          {/* inserir uma imagem da via mobilidade  */}
            <h2>Via Mobilidade</h2> 

            <p>Linhas lilas</p>
            <p>{lilas}</p>
            
            <p>Linhas diamante</p>
            <p>{diamante}</p>
            
            <p>Linhas esmeralda</p>
            <p>{esmeralda}</p>


          </div>

          <div>
          {/* inserir uma imagem da Cptm  */}
            <h2>CPTM</h2> 

            <p>Linhas rubi</p>
            <p>{rubi}</p>

            <p>Linhas turquesa</p>
            <p>{turquesa}</p>
            
            <p>Linhas coral</p>
            <p>{coral}</p>
            
            <p>Linhas safira</p>
            <p>{safira}</p>
            
            <p>Linhas jade</p>
            <p>{jade}</p>


          </div>

          <div>
          {/* inserir uma imagem da Via4  */}
            <h2>Via 4</h2> 
            <p>Linhas amarela</p>
            <p>{amarela}</p>


          </div>
        </div>
    </div>
      
    </>
  
  )
}

export default Index;