import React from 'react'
import imagen from '../assets/images/img-home.jpg'

const Home = () => {
  return (
    <>
      <h2 className='title-home' >Welcome to my Website</h2>
      <img src={imagen} alt='Foto de pexels' className='img-home' />
    </>

  )
}

export default Home