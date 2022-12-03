import { BsWhatsapp } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";
const Contact = () => {
    return (
        <div>
            <h1 className="contacto">Contactanos</h1>   
            <br />
            <br />    

          <h2 className="whatsapp"><BsWhatsapp/>Podes agendar nuestro whatsapp: + 261 5 895415</h2>
          <br />
          <h3 className="mail"><BsMailbox2/>Ó dejanos un mail a: 6Espigas@gmail.com</h3>
          <br />
          <h4 className="instagram"><BsInstagram/>Seguinos en nuestras redes: #6Espigas</h4>
          <br />
          <br />
          <h5 className="house"><BsHouseFill/>Te esperamos en nuestro local: San Martin 545, Lujan de Cuyo, Mendoza - Argentina</h5>
 
        </div>
    );
    
}

export default Contact;



