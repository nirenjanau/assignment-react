import { Link } from 'react-router-dom'

import  '../assets/style.css'

export default function SingUpContent() {
    return(
        <div className="signup">
            <p>Hit the SignUp to create new account</p>
            <button>
                <Link to="/product">SignUp</Link>
            </button>
        </div>
    )
}
 