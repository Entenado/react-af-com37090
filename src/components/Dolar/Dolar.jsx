import {useState,useEffect} from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState([]);
   
    useEffect(() => {
       setInterval(() => {
        fetch('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then(({solidario, blue, ccl, mep}) => {
           const dolarDom =
           <div>
            <h2>Cotizacion del dolar en Argentina </h2>
             <p> Dolar solidario: ${solidario} </p>
             <p> Dolar Blue: ${blue} </p>
             <p> Dolar Ccl: ${ccl} </p>
             <p> Dolar Mep: ${mep} </p>
           </div>
           setDolar(dolarDom)
           console.log(dolarDom)
           })        
        }, 60000)

        
}, []);

    return (
        <div>
           {dolar}
        </div>
    );
}

export default Dolar;

