import '../styles/Portfolio.sass'

export const Portfolio = () => {

    return (
        <div className='home-content'>
            <div className='content-title'>
                <h1 className='title'>¡Bienvenido</h1>
                <p className='title'>a mi portafolio!</p>
            </div>

            <figure className='content-figure'>
                <img src="/src/assets/ram.svg" alt="rama" className='content-figure-img'/>
            </figure>

            <p className='content-description'>Soy <b>Cristian</b>, un ingeniero de sistemas en formación</p>
            <div className='link-mycv'>Descargar CV</div>

        </div>
    )
}