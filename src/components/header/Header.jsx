import React from 'react';
import './header.css';
import ImgDiogo from '../assets/Diogo.png';
const Header = () =>{
    return(
        <>
        <div className='container-header'>
        <img src={ImgDiogo} alt="Imagem de Diogo Rennam"/>
        <h3>Diogo Rennam</h3>
        </div>
       
        </>
    );
}
export default Header;