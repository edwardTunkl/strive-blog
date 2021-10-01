import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  render() {
    const { name, image, category } = this.props;
    // console.log("BLOGITEMS",this.props)
    return (
      <Link to={`/blog/${this.props.id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={image} className="blog-cover cover"/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer style={{fontWeight:650}}>
            Category: {category}
          </Card.Footer>
        </Card>
      </Link>
    );
  }
}

