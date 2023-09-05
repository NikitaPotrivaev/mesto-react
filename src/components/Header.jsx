import logo from '../images/logo.svg';

export function Header() {
    return(
    <header className="header">
        <img src={logo} alt="Место" className="header__logo"/>
    </header>
    )
}