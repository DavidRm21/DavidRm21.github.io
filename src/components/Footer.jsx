import '../styles/Footer.sass'

export const Footer = () => {


    return(
        <div className="footer">
            <div className="footer-info">
                <p>Bogotá, Colombia</p>
                <p>cdavidromero214@gmail.com</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/DavidRm21" target='_blank'>
                    <p className='icon icon-github'></p>
                </a>
            </div>
        </div>
    )
}