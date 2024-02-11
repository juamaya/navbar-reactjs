import React from 'react'
import YO from '../assets/images/juan.jpg'

const About = () => {
  return (
    <>
      <div className="about-content">
        <h3>Hello, It's Me</h3>
        <h1>Juan Marin</h1>
        <div className="ho aboutme-img">
          <img src={YO} alt="Foto" />
        </div>
        <a href="curriculum.pdf" download="curriculum.pdf" className="btn">Download CV</a>
      </div>

      <section className="services" id="services">

<h2 className="heading">Our <span>Services</span></h2>
<div className="services-container">
    <div className="services-box">
        <i className='bx bx-code-alt'></i>
        <h3>Web Development</h3>
        <ul>
        <li>Desarrollo Web: Transformando Ideas en Experiencias Digitales </li>
        <li>Diseño Responsive: Adaptabilidad a diferentes dispositivos. </li>
        <li>Editores de código: VS Code, Sublime Text. </li>
        <li>Frameworks: React, Bootstrap 5. </li>
        <li>Control de Versiones: Git y GitHub. </li>
        </ul>
        <a href="#" className="btn">Read More</a>
    </div>

    <div className="services-box">
        <i className='bx bx-user-check'></i>
        <h3>Electrician</h3>
        <ul>
        <li>Desempeña un papel esencial en la instalación, mantenimiento y reparación de sistemas eléctricos. </li>
        <li>Planificación y Diseño: Evaluación de necesidades y requisitos. </li>
        <li>Cableado y Conexión: Instalación de conductores y conexiones. </li>
        <li>Pruebas y Verificación: Comprobación de continuidad, aislamiento y seguridad.</li>
        <li>Puesta en Marcha: Activación y ajustes finales. </li>
        </ul>
        <a href="#" className="btn">Read More</a>
    </div>

    <div className="services-box">
        <i className='bx bxs-plane'></i>
        <h3>Aeronautical Assembler</h3>
        <ul>
        <li>Desempeña un papel crucial en la industria aeronáutica. </li>
        <li>Responsable de ensamblar y construir componentes para aeronaves. </li>
        <li>Colaboración estrecha con ingenieros, diseñadores y otros profesionales. </li>

        </ul>
       
        <a href="#" className="btn">Read More</a>
    </div>

</div>

</section>


    </>

  )
}

export default About