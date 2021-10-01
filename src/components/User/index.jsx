import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: ""};
    this.handleChange = this.handleChange.bind(this);
    
  }
  apiUrl = process.env.REACT_APP_BE_URL

  handleChange(value) {
    this.setState({ text: value });
  }

  createPost = async () => {
    try {
      let response = await fetch(`http://localhost:3001/users`,{
        method: "POST",
        body: JSON.stringify({
          userName: this.state.userName
     
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {    
        const json = await response.json()
        console.log("New User DATA",json)
         }
    } catch(error){
      console.log(error)
    }
  }
  sendPost = (e) => {
    e.preventDefault()
    this.createPost()
    console.log("STATE: ",this.state)
  }

  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={this.sendPost}>
          <Form.Group controlId="blog-form" className="mt-5">
            <Form.Label>User Name</Form.Label>
            <Form.Control size="lg" placeholder="Please tell me your name" 
            onChange={(e) => this.setState({userName: e.target.value})}
             />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Create
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
