// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="pt-36 pb-32" id="contact">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 font-semibold">Contact</h4>
            <h2 className="mb-4 text-3xl font-bold">Hubungi Saya</h2>
            <p className="text-md-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo dolorem quia asperiores soluta quis reiciendis saepe dolorum sed in. Fuga excepturi qui, asperiores reiciendis harum tenetur magni incidunt repudiandae.</p>
          </div>
        </div>
        <form action="">
          <div className="w-full">
            <div className="mb-8 w-full px-4 tabel-kolom">
              <label htmlFor="name" className="text-base font-bold p-3">Nama</label>
              <input type="text" id="name" className="w-full rounded-3 p-3" name="nama" required />
            </div>
            <div className="mb-8 w-full px-4 pt-3 tabel-kolom">
              <label htmlFor="email" className="text-base font-bold p-3">Email</label>
              <input type="email" id="email" className="w-full rounded-3 p-3" name="email" required />
            </div>
            <div className="mb-8 w-full px-4 pt-3 tabel-kolom">
              <label htmlFor="message" className="text-base font-bold p-3">Pesan</label>
              <textarea type="email" className="h-32 w-full rounded-3 p-3" name="pesan" id="email" required></textarea>
            </div>
            <div className="w-full px-4 tabel-kolom">
              <button type="submit" className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact