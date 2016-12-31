import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class NoteTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
    this.onTrashClicked = this.onTrashClicked.bind(this);
    this.onEditClicked = this.onEditClicked.bind(this);
    this.onDragClicked = this.onDragClicked.bind(this);
  }

  onTrashClicked() {
    console.log('trash clicked');
    this.props.onDeletePressed();
  }

  onEditClicked() {
    console.log('edit clicked');
  }

  onDragClicked() {
    console.log('DragClicked');
  }

  render() {
    let titleStyle = {
      display: 'flex',
      justifyContent: 'space-between',
    };
    let iconStyle = {
      marginRight: '10px',
      cursor: 'pointer',
    };
    return (
      <div style={titleStyle}>
        <h1> {this.state.text} </h1>
        <h1>
          <FontAwesome onClick={this.onEditClicked} style={iconStyle} name="pencil" />
          <FontAwesome onClick={this.onTrashClicked} style={iconStyle} name="trash" />
        </h1>
      </div>
    );
  }
}

export default NoteTitle;
