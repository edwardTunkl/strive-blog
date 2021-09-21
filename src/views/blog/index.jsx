import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
// import posts from "../../data/posts.json";
import "./styles.css";
class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  };
  
  componentDidMount() {
  // const apiUrl= process.env.REACT_APP_BE_URL     
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      let response = await fetch(`https://blogpost-express-app.herokuapp.com/blogPosts/`+ this.props.match.params.id);
      let data = await response.json();
      console.log("DATA: ",data)
      this.setState({ blog: data, 
                      loading: false });
      // return data;
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    // console.log("PROPS", this.props)
    const { loading, blog } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
