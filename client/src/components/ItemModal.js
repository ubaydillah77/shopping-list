import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
    };

    //add item from action addItems
    this.props.addItems(newItem);

    //close with toggle
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping ist</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>item</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='add shopping item'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
  };
}

export default connect(mapStateToProps, { addItems })(ItemModal);
