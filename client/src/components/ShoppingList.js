import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import propTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItems(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container className='container-list'>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name }) => {
              return (
                <CSSTransition key={_id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { getItems, deleteItems })(
  ShoppingList
);
