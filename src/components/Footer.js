import Image from "next/image"

export const Footer = () => {
  return (
   <footer>
      <div className="footer_logo">
        <Image
          id="logo"
          src="/assets/logo_backup.png"
          width={125}
          height={125}
          alt="Logo"
        />
      </div>

      <div className="footer-container">
        <ul className="footer-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
         <div className="footer-social">
            <a href="#"><Image className="social_img" id="social_instagram" src="/assets/logo_instagram.png"
                      width={200}
                      height={125}
                      alt="Logo"/></a>
            <a href="#"><Image className="social_img" id="social_facebook" src="/assets/logo_facebook.png"
                      width={200}
                      height={125}
                      alt="Logo"/></a>
            <a href="#"><Image className="social_img" id="social_twitter" src="/assets/logo_twitter.png"
                      width={200}
                      height={125}
                      alt="Logo"/></a>
          </div>

        <div className="footer-bottom">
          &copy; 2025 Cinema Kyoto | Todos los derechos y copyright reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
