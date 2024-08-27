import React from 'react'

const Project = () => {
  return (
    <>
      <header className="project__page">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5993.0804287855135!2d69.155176!3d41.318865!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzA3LjkiTiA2OcKwMDknMTguNiJF!5e0!3m2!1sru!2s!4v1724668757538!5m2!1sru!2s" width="600" height="450" style={{ 
            border: 0 
            }}
             allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="map__info">
          <h1 className="map__h1">Our address</h1>
          <p className="map__p">
            Our address is located in the most convenient location in Uzbekistan
          </p>
        </div>
      </header>
    </>
  )
}

export default Project