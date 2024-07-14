import logo1 from '../assets/logo-icon.png'
import logo2 from '../assets/logo-smalld-icon.png'

import  '../assets/style.css'

export default function LoginPageHeader() {
    return(
        <header>
            <nav className="logo-image">
                <img src={logo1} alt="Logo" width="3%" />
                <img src={logo2} alt="Logo" width="3%"/>
            </nav>
        </header>
    )
}