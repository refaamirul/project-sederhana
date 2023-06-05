// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import Profil from '../../../../public/refa-amirul.png'

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="d-flex flex-wrap">
        <div className="halaman px-4 w-100 align-self-center">
          <h1>Halo Semua 👋🏻, saya <span>Refa Amirul</span></h1>
          <h2 className="mb-5 position-absolute text-secondary">Programming & <span className="text-white">Frond-End Developer</span></h2>
          <p className="text-secondary py-5 position-relative">Belajar web programming itu mudah dan menyenangkan <span className="text-white">bukan!</span></p>
          <a href="#" className="bg-primary py-5 px-5 text-white rounded-4 opacity-75 kolom mt-5 d-flex justify-content-center position-relative">Hubungi Saya</a>
        </div>
        <div className="w-50 align-self-end px-4 d-flex">
          <div className="position-relative mt-5 mt-4 profil-img">
            <img src={Profil} alt="profil" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero