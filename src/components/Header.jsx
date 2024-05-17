import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img className='logo' src="../assets/logo.png" alt="Logo" />            
      </NavLink> 
        <nav>
            <NavLink to="/home">Home</NavLink>            
            <NavLink to="/about">About</NavLink>            
            <NavLink to="/product">Product</NavLink>            
            <NavLink to="/contact">contact</NavLink>            
        </nav>
    </header>
  )
}

export default Header