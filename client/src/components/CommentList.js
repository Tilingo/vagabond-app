import React, { Component } from "react";
import CommentCard from "./CommentCard";
import axios from "axios";

class CommentList extends Component {
  state = {
    comments: []
  };

  componentDidMount = async () => {
      
    try {
        let comments = await axios.get(`/api/cities/1/posts`);
      console.log(comments.data)

      this.setState({
        comments: comments.data
      });

    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const comments = this.state.comments.map((comment, i) => {
      return (
        <CommentCard
          key={i}
          // image={comment.}
          content={comment.content}
          title={comment.title}
        />
      );
    });

    return <div>{comments}</div>;
  }
}

export default CommentList;