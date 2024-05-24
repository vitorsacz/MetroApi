import Image from "next/image";
import Vitor from "./../assets/vitor4.png"
import Vini from "./../assets/vinimaia.png"
import Lucca from "./../assets/lucca2.jpg"
import Russel from "./../assets/russel.png"
import LogoFiapPreta from "./../assets/LogoFiap-Preta.png"

const Footer = () =>{
    return(

        <>
        <footer>
            <div className="container-footer">
                <h3>Integrantes: </h3>
                <div className="flex-integrantes">

                    <div className="image-integrantes integrante">
                        <Image src={Vitor} alt="Foto Vitor Santos"/>
                        <p>Vitor Santos</p>
                        <p>RM553621</p>
                    </div>

                    <div className="image-integrantes integrante">
                        <Image src={Vini} alt="Foto Vitor Santos"/>
                        <p>Lucca Matteoni</p>
                        <p>RM98146</p>
                    </div>

                    <div className="image-integrantes integrante">
                        <Image src={Lucca} alt="Foto Vitor Santos"/>
                        <p>Vinicius Maia</p>
                        <p>RM552969</p>
                    </div>

                    <div className="image-integrantes integrante">
                        <Image src={Russel} alt="Foto Vitor Santos"/>
                        <p>Gabriel Onodera</p>
                        <p>RM553779</p>
                    </div>
                    
                </div>

                <div className="fiap">
                    <Image src={LogoFiapPreta} alt="Logo FIAP Preta"/>
                </div>

                <div className="copy">
                    <p>© 2024 - All right reserved</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;