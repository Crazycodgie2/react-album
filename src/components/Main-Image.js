import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function(props) {
  const [images, setImages] = useState([])

  function fetchImages() {
    axios.get("/images").then(resp => setImages(resp.data))
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div className="MainImage">
      <h1 className="header3">{images.title}</h1>
      <ul className="imagesList">
        {images.map(image => (
          <li key={"Images" + image.albumId}>
            <Link to={"/Main-Image/" + image.albumId}>
              <img className="image" src={image.url} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
