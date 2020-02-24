import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Albums from "./Albums"
import Images from "./Images"
import MainImage from "./Main-Image"
import "../styles/frame.css"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Albums} />
        <Route path="/images" component={Images} />
        <Route path="/main-image" component={MainImage} />
      </div>
    </Router>
  )
}
