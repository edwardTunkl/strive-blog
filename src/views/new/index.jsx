import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", image: "", price:"", category: ""};
    this.handleChange = this.handleChange.bind(this);
    
  }
  apiUrl = process.env.REACT_APP_BE_URL

  handleChange(value) {
    this.setState({ text: value });
  }

  createPost = async () => {
    try {
      let response = await fetch(`http://localhost:3001/products`,{
        method: "POST",
        body: JSON.stringify({
          category: this.state.category,
          name: this.state.name,
          image: this.state.image,
          category: this.state.category,
          price: this.state.price
     
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control size="lg" placeholder="Product Name" 
            onChange={(e) => this.setState({name: e.target.value})}
             />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Image</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Add Image" 
            onChange={(e) => this.setState({image: e.target.value})}
             />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control size="lg" placeholder="Price" 
            onChange={(e) => this.setState({price: e.target.value})}
             />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select" 
              onChange={(e) => this.setState({category: e.target.value})}
            >
              <option>Phone</option>
              <option>Smartphone</option>
              <option>Tv</option>
              <option>Pc</option>
              <option>Gaming</option>
            </Form.Control>
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
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
