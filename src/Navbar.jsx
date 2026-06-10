import { useState } from 'react';

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

return (

<header className="header">

<a href="index.html" className="logo">Mahdi.</a>

<nav className={menuOpen ? "navbar active" : "navbar"}>

<a href="#home" onClick={() => setMenuOpen(false)} className="active">Home</a>
<a href="#about" onClick={() => setMenuOpen(false)}>About</a>
<a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
<a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
<a href="#contact" onClick={() => setMenuOpen(false)}>Contacts</a>
<a href="#todo" onClick={() => setMenuOpen(false)}>List to do</a>

</nav>

<div id="menu-icon" className="bx bx-menu" onClick={toggleMenu}></div>

</header>

  );
}

export default Navbar;