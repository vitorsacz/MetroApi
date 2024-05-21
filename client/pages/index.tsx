import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Metro from './assets/metro-logo.png'
import Cptm from './assets/cptm-logo.png'
import Via4 from './assets/via4-logo.png'
import ViaMobilidade from './assets/viamobilidade-logo.png'


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
        <h1>OPERAÇÃO DAS LINHAS DE TRENS E METROS - SP</h1>

        <div className='container'>
          <div>
          {/* inserir uma imagem do metro  */}
            <Image src={Metro} alt='Logo Metro SP'/>

            <h2>Metro sp</h2>

            <div className='line-format azul'>
              <div className='line-number'>1</div>
              <div>
                <p>Linha azul</p>
                <p>{azul}</p>
              </div>
              
            </div>

            <div className='line-format verde'>
              <div className='line-number'>2</div>
              <div>
                <p>Linha verde</p>
                <p>{verde}</p>
              </div>
              
            </div>


            <div className='line-format vermelha'>
              <div className='line-number'>3</div>
              <div>
                <p>Linha vermelha</p>
                <p>{vermelha}</p>
              </div>
              
            </div>


            <div className='line-format prata'>
              <div className='line-number'>15</div>
              <div>
                <p>Linha prata</p>
                <p>{prata}</p>
              </div>
              
            </div>
            

            

            

            

          </div>

          <div>
          {/* inserir uma imagem da via mobilidade  */}
           <Image src={ViaMobilidade} alt='Logo Metro SP'/>

            <h2>Via Mobilidade</h2> 
            

            <div className='line-format lilas'>
              <div className='line-number'>5</div>
              <div>
                <p>Linha lilas</p>
                <p>{lilas}</p>
              </div>
              
            </div>

            <div className='line-format diamante'>
              <div className='line-number'>8</div>
              <div>
                <p>Linha diamante</p>
                <p>{diamante}</p>
              </div>
              
            </div>

            <div className='line-format esmeralda'>
              <div className='line-number'>9</div>
              <div>
                <p>Linha esmeralda</p>
                <p>{esmeralda}</p>
              </div>
              
            </div>

          </div>

          <div>
          {/* inserir uma imagem da Cptm  */}

            <Image src={Cptm} alt='Logo Metro SP'/>
            <h2>CPTM</h2> 

            <div className='line-format rubi'>
              <div className='line-number'>7</div>
              <div>
                <p>Linha rubi</p>
                <p>{rubi}</p>
              </div>
              
            </div>

            <div className='line-format turquesa'>
              <div className='line-number'>10</div>
              <div>
                <p>Linha turquesa</p>
                <p>{turquesa}</p>
              </div>
              
            </div>

            <div className='line-format coral'>
              <div className='line-number'>11</div>
              <div>
                <p>Linha coral</p>
              <p>{coral}</p>
              </div>
              
            </div>

            <div className='line-format safira'>
              <div className='line-number'>12</div>
              <div>
                <p>Linha safira</p>
                <p>{safira}</p>
              </div>
              
            </div>

            <div className='line-format jade'>
              <div className='line-number'>13</div>
              <div>
                <p>Linha jade</p>
                <p>{jade}</p>
              </div>
              
            </div>

          </div>

          <div>
          {/* inserir uma imagem da Via4  */}
            <Image src={Via4} alt='Logo Metro SP'/>

            <h2>Via 4</h2> 

            <div className='line-format amarela'>
              <div className='line-number'>4</div>
              <div>
                <p>Linha amarela</p>
                <p>{amarela}</p>
              </div>   
            </div>
            
            


          </div>
        </div>
    </div>
      
    </>
  
  )
}

export default Index;