import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function(props) {
  const [albums, setAlbums] = useState([])

  function fetchImage() {
    axios.get("/albums").then(resp => setAlbums(resp.data))
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className="MyAlbums">
      <h1 className="header">My Albums</h1>
      <ul className="albumList">
        {albums.map(album => (
          <li key={"Albums-" + album.id}>
            <Link to={"/images/" + album.id}>
              <img className="image" src={album.coverphoto} alt={album.name} />
              <p className="coverNames">{album.albumName}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
