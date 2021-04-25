import { Link } from 'react-router-dom'
import './AppHeader.scss'

export const AppHeader = (props) => {

    return (
        <header className='container flex align-center justify-between app-header'>
            <Link to="/">
                <div className="logo">
                    <h1>Wixin</h1>
                </div>
            </Link>
            <div className="flex align-center justify-between nav-items">
                <Link to="/templates">
                    <div className="templates">
                        <h4>templates</h4>
                    </div>
                </Link>
                <Link to="/editor">
                    <div className="editor">
                        <h4>editor</h4>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="login-signup">
                        <h4>login</h4>
                    </div>
                </Link>
            </div>
        </header>
    )
}

