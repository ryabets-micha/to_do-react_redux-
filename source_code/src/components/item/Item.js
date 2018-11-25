import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import heart0 from "./heart0.svg";
import heart1 from "./heart1.svg";
import edit from "./edit.svg";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: !this.props.card.like
    };
  }

  onLike() {
    this.setState({isLiked: !this.state.isLiked});
    const likeCard = {
      id: this.props.id,
      like: this.state.isLiked
    };
    this.props.onChangeLike(likeCard);
  }

  render() {
    return (
      <div className="item">
        <h2 className="item-title">
          {this.props.title}
        </h2>

        <p className="item-text">
          {this.props.description}
        </p>

        <div className="item-buttons">
          <span className = "item-info">
            <Link to={`/info/${this.props.id}`}>
              <img
                src={edit}
                alt=""
              />
            </Link>
          </span>

          <span className="heart" onClick={() => {this.onLike()}}>
            <img src={this.state.isLiked ? heart0 : heart1} alt=""/>
          </span>
        </div>
      </div>
    );
  }
} 

export default connect(
  (state, ownProps) => ({
      myStore: state,
      card: state.cards.find(card => card.id === ownProps.id)
    }),
    dispatch => ({
      onChangeLike: (likeCard) => {
        dispatch({
          type: 'LIKE_CARD',
          payload: likeCard
        })
      }
    })
)(Item);