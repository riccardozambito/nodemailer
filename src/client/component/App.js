import React, { Component } from "react"
import "./styles/app.css"
import EmailForm from "./EmailForm"

export default class App extends Component {
  render() {
    return (
      <div className="component-app">
        <EmailForm />
      </div>
    )
  }
}
