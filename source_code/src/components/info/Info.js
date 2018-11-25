import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import arrow from './arrow.svg';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoTitle: this.props.card.title || '',
      infoDescription: this.props.card.description || ''
    };
  }

  handleInfoTitleChange(e) {
    const limit = 20;
    const length = document.getElementById('infoTitle').value.length;

    this.setState({
      infoTitle: e.target.value.slice(0, limit)
    });

    document.getElementById('titleLimit').innerText = limit - length > 0 ? limit - length : 0;
  }

  handleInfoDescriptionChange(e) {
    const limit = 160;
    const length = document.getElementById('infoDescriptionField').value.length;

    this.setState({
      infoDescription: e.target.value.slice(0, limit)
    });

    document.getElementById('descriptionLimit').innerText = limit - length > 0 ? limit - length : 0;
  }

  render() {
    return (
      <div className="info-box">
        <span className="info-back">
          <Link to='/'>
            <img src={arrow} alt=""/>
          </Link>
        </span>
        <h1 className="big-info-title">
          Card info
        </h1>
        <form className="info-item">
          <input
            type="text"
            className="info-title"
            id="infoTitle"
            value={this.state.infoTitle}
            onChange={(e) => { this.handleInfoTitleChange(e); }}
            />
          <textarea
            id="infoDescriptionField"
            cols="30"
            rows="10"
            value={this.state.infoDescription}
            onChange={(e) => {this.handleInfoDescriptionChange(e)}}
            />
          <div className="info-btn">
            <Link to='/'>
              <button onClick={() => {
                let infoChangeData = {
                  id: this.props.card.id,
                  title: this.state.infoTitle,
                  description: this.state.infoDescription
                };
                this.props.onInfoSave(infoChangeData);
              }}>
                Save
              </button>
            </Link>
            <Link to='/'>
              <span onClick={() => {
                let id = this.props.card.id;
                this.props.onInfoDelete(id);
              }}>
                Delete
              </span>
            </Link>
          </div>
          <span className="title-limit" id="titleLimit">
            {
              20 - this.props.card.title.length
            }
          </span>
          <span className="description-limit" id="descriptionLimit">
            {
              160 - this.props.card.description.length
            }
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.find(card => card.id === ownProps.match.params.id)
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    onInfoSave: (infoChangeData) => {
      dispatch({
        type: 'INFO_CHANGE_CARD',
        payload: infoChangeData
      })
    },
    onInfoDelete: (id) => {
      dispatch({
        type: 'DELETE_CARD',
        payload: id
      })
    }
  })
  )(Info);