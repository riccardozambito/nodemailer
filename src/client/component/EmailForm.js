import React, { Component } from "react";
import "./styles/EmailForm.css";

import { sendEmail } from "../services/mailer.js";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAddress: "",
      toAddress: "",
      subject: "",
      message: "",
      attachment: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "attachment" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendEmail(this.state);
      //
      res
        ? window.alert("Email send")
        : window.alert("Error while sending email");
    } catch (ex) {
      window.alert(ex);
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label>From</label>
              <input
                value={this.state.fromAddress}
                onChange={this.handleInputChange}
                type="email"
                name="fromAddress"
                placeholder="Enter your mail address"
                required
              />
            </li>
            <li>
              <label>To</label>
              <input
                value={this.state.toAddress}
                type="email"
                onChange={this.handleInputChange}
                name="toAddress"
                placeholder="Enter recipient mail address"
                required
              />
            </li>
            <li>
              <label>Subject</label>
              <input
                value={this.state.subject}
                type="text"
                onChange={this.handleInputChange}
                name="subject"
                placeholder="Enter subject"
              />
            </li>
            <li>
              <label>Message</label>
              <textarea
                value={this.state.message}
                onChange={this.handleInputChange}
                rows="6"
                name="message"
                type="text"
                placeholder="Enter your message here"
              ></textarea>
            </li>
            <li>
              <p>Attachments</p>
              <ul className="flex-inner">
                <li>
                  <input
                    type="checkbox"
                    checked={this.state.attachment}
                    name="attachment"
                    onChange={this.handleInputChange}
                  />
                  <label>Send PDF test attachment</label>
                </li>
              </ul>
            </li>
            <li className="buttons-box">
              <div>
                <button type="submit">Send email</button>
              </div>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
