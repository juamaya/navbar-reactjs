import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                

                <div className="social-media">
                    <a href="#"><i className='bx bxl-facebook'> </i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/juamaya" target='_blank'><i className='bx bxl-github'></i></a>
                </div>

                <div>
                    <h3>Copyright &copy; 2024 by Juamaya | All Rights Reserved.</h3>
                </div>

                <div className="footer-iconTop">
                <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
            </div>
        </>


    )
}

export default Footer