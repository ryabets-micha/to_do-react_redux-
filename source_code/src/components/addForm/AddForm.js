import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddForm extends Component {

  addCard() {
    const newCard = {
      id: Date.now().toString(),
      title: this.addTitleInput.value,
      description: this.addDescription.value,
      like: false
    };

    this.addTitleInput.value = '';
    this.addDescription.value = '';
    this.props.onAddCard(newCard);
  }

  titleLimit() {
    const limit = 20;
    const length = this.addTitleInput.value.length;

    if (length >= limit) {
      this.addTitleInput.value = this.addTitleInput.value.slice(0, limit);
    }

    document.getElementById('titleLimit').innerText = limit - length > 0 ? limit - length : 0;
  }

  descriptionLimit() {
    const limit = 160;
    const length = this.addDescription.value.length;

    if (length >= limit) {
      this.addDescription.value = this.addDescription.value.slice(0, limit);
    }

    document.getElementById('descriptionLimit').innerText = limit - length > 0 ? limit - length : 0;
  }

  render() {
    return (
      <div className="addForm-box">
        <h1 className="addForm-big-title">
          New card
        </h1>
        <form className="addForm-item" >
          <input
            type="text"
            className="addForm-title"
            placeholder="Title"
            ref={(input) => { this.addTitleInput = input }}
            onChange={() => {this.titleLimit()}}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            ref={(textarea) => { this.addDescription = textarea }}
            onChange={() => { this.descriptionLimit()}}
          />
          <div className="addForm-btn">
            <Link to='/'>
              <button onClick={() => this.addCard()}>
                Save
              </button>
            </Link>
          </div>
          <span className="title-limit" id="titleLimit">
            20
          </span>
          <span className="description-limit" id="descriptionLimit">
            160
          </span>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    myStore: state
  }),
  dispatch => ({
    onAddCard: (newCard) => {
      dispatch({ type: 'ADD_CARD', payload: newCard })
    }
  })
)(AddForm);