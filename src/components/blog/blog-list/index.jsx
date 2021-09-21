import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
//import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = { posts: [] };
  
  componentDidMount(){
    // const apiURL = process.env.REACT_APP_BE_URL
    this.fetchPosts()
  }
  
  fetchPosts = async () => {
    try {
      let response = await fetch(`https://blogpost-express-app.herokuapp.com/blogPosts`);
      let recievedPosts = await response.json();
      this.setState({ posts: recievedPosts });
      // console.log("THIS IS RECIEVEDPOST: ",recievedPosts)
      
    } catch (error) {
      console.log(error);
    }
  };
  
  
  render() {
    console.log("STATE",this.state.posts)
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
