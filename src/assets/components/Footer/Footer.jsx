// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="pb-12 pt-5 footer-me">
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">Celebes</h2>
            <h3 className="mb-2 text-2xl font-bold">Hubungi Kami</h3>
            <p>refaaamirul@gmail.com</p>
            <p>Jln. Haluoleo, No.1</p>
            <p>Kendari</p>
          </div>
          <div className="mb-12 w-full px-5">
            <h3 className="mb-5 judul-h3 text-xl font-semibold text-white">Berita Terbaru</h3>
            <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-base">Wisata</a>
              </li>
            </ul>
            <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-base">Gaya Hidup</a>
              </li>
            </ul>
            <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-base">Religi</a>
              </li>
            </ul>
          </div>

          <div className="mb-12 w-full px-5">
          <h3 className="mb-5 judul-h3 text-xl font-semibold text-white">Tautan</h3>
          <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-white">Beranda</a>
              </li>
            </ul>
          <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-white">Tentang Kami</a>
              </li>
            </ul>
          <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-white">Portfolio</a>
              </li>
            </ul>
          <ul className="text-slate-300 berita">
              <li>
                <a href="#" className="mb-3 inline-block text-white">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer