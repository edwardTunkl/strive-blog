import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import User from "./components/User";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  state = { 
    Id: ""
  };

  onChange = (Id) => {
    this.setState({ Id });
  };
  render(){

    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" exact component={Blog} />
        <Route path="/new" exact component={NewBlogPost} />
        <Route path="/shoppingCart" exact component={NewBlogPost} />
        <Route path="/user" exact component={User} onChange={this.onChange}/>
        
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
