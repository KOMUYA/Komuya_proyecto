import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import '../container/styles.css'
import  ImagenFour from '../../../../utils/images/Retos/reto_fourth/queharias.png'
import Modal1 from '../container/modals/ModalOne'
import Modal2 from '../container/modals/ModalTwo'
import Modal3 from '../container/modals/ModalThree'
import Modal4 from '../container/modals/ModalFour'
import {Link} from "react-router-dom"

const ChallengeFour= () => {
    return (
        <div className="container">
             <Encabezado/>
        <div className="title_conocerme">
             <p>Aprendiendo a conocer mis emociones.</p>
        </div>
        <div className="text_conocerme">
            <p>El reto del día de hoy reconocer el manejo de tus emociones. ¿Qué harías en esta situación?</p>
        </div>
        <div className="imageFour">
            <img src={ImagenFour} alt="" />
        </div>
        <p className="subtitule"> Selecciona un número de acuerdo a la imagén. </p>
        <div className="options">
           <Modal1/>
           <Modal2/>
           <Modal3/>
           <Modal4/>
        </div>
        <Link to="/Feli1">
                    <div className="boton">
                     <input className= "enviar" type="submit" value="Enviar"/>
                     </div>
        </Link>
       </div>
    )
}

export default ChallengeFour