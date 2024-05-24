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
        <h1>Dashboard de Operação dos Trens e Metrôs -SP </h1>

        <div className='container'>
          <div>
          {/* inserir uma imagem do metro  */}
            <Image src={Metro} alt='Logo Metro SP' className='logos'/>

            

            <article>
              <div className='number azul'>
                <p>1</p>
              </div>
              <div className='lines'>
                <p>Linha Azul</p>
              </div>
              <div>
                <p>{azul}</p>
              </div>
            </article>

            <article>
              <div className='number verde'>
                <p>2</p>
              </div>
              <div className='lines'>
                <p>Linha Verde</p>
              </div>
              <div>
                <p>{verde}</p>
              </div>
            </article>

            <article>
              <div className='number vermelha'>
                <p>3</p>
              </div>
              <div className='lines'>
                <p>Linha Vermelha</p>
              </div>
              <div>
                <p>{vermelha}</p>
              </div>
            </article>

            <article>
              <div className='number prata'>
                <p>15</p>
              </div>
              <div className='lines'>
                <p>Linha Prata</p>
              </div>
              <div>
                <p>{prata}</p>
              </div>
            </article>

          </div>

          <div>
          {/* inserir uma imagem da via mobilidade  */}
           <Image src={ViaMobilidade} alt='Logo Metro SP' className='logos'/>


            <article>
              <div className='number lilas'>
                <p>5</p>
              </div>
              <div className='lines'>
                <p>Linha Lilas</p>
              </div>
              <div>
                <p>{lilas}</p>
              </div>
            </article>

            <article>
              <div className='number diamante'>
                <p>8</p>
              </div>
              <div className='lines'>
                <p>Linha Diamante</p>
              </div>
              <div>
                <p>{diamante}</p>
              </div>
            </article>

            <article>
              <div className='number esmeralda'>
                <p>9</p>
              </div>
              <div className='lines'>
                <p>Linha Esmeralda</p>
              </div>
              <div>
                <p>{esmeralda}</p>
              </div>
            </article>

          </div>

          <div>
          {/* inserir uma imagem da Cptm  */}

            <Image src={Cptm} alt='Logo Metro SP' className='logos'/>
            

            <article>
              <div className='number rubi'>
                <p>7</p>
              </div>
              <div className='lines'>
                <p>Linha Rubi</p>
              </div>
              <div>
                <p>{rubi}</p>
              </div>
            </article>

            <article>
              <div className='number turquesa'>
                <p>10</p>
              </div>
              <div className='lines'>
                <p>Linha Turquesa</p>
              </div>
              <div>
                <p>{turquesa}</p>
              </div>
            </article>

            <article>
              <div className='number coral'>
                <p>11</p>
              </div>
              <div className='lines'>
                <p>Linha Coral</p>
              </div>
              <div>
                <p>{coral}</p>
              </div>
            </article>

            <article>
              <div className='number safira'>
                <p>12</p>
              </div>
              <div className='lines'>
                <p>Linha Safira</p>
              </div>
              <div>
                <p>{safira}</p>
              </div>
            </article>

            <article>
              <div className='number jade'>
                <p>13</p>
              </div>
              <div className='lines'>
                <p>Linha Jade</p>
              </div>
              <div>
                <p>{jade}</p>
              </div>
            </article>

          </div>

          <div>
          {/* inserir uma imagem da Via4  */}
            <Image src={Via4} alt='Logo Metro SP' className='logos'/>

            <article>
              <div className='number amarela'>
                <p>1</p>
              </div>
              <div className='lines'>
                <p>Linha Amarela</p>
              </div>
              <div>
                <p>{amarela}</p>
              </div>
            </article>

          </div>
        </div>
    </div>
      <hr />
      
    </>
  
  )
}

export default Index;