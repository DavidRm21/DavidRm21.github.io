import {useForm} from "react-hook-form"
import '../styles/Contact.sass'

export const Contact = () => {

    return (
        <div id='page-contact'>
            <div className="content">
                <h2>Contacto</h2>
                <form className='projects-container'>
                        
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Nombre Completo"/>

                        <label htmlFor="">Correo</label>
                        <input type="email" placeholder="Correo electrónico"/>

                        <label htmlFor="">Escribe un mensaje</label>
                        <input type="text" placeholder="Escribe tu mensaje aquí"/>

                        <button>Enviar</button>

                </form>
            </div>
        </div>

    )
}