import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Add from './addItem/Add';
import Item from './item/Item';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="todo-header">
          <h1 className="todo-title">
            To do list
          </h1>
        </header>

        <main className="todo-body">
        <Add />
        {
          this.props.myStore.cards.map((card) =>
            <Item
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              like={card.like}
            />
          )
        }
        </main>
      </Fragment>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    myStore: state,
    ownProps
  })
)(App);