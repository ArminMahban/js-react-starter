import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class NoteTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      isEditing: props.isEditing,
    };
    this.onTrashClicked = this.onTrashClicked.bind(this);
    this.onEditClicked = this.onEditClicked.bind(this);
  }

  onTrashClicked() {
    console.log('trash clicked');
    this.props.onDeletePressed();
  }

  onEditClicked() {
    console.log('edit clicked');
    this.props.onEditClicked();
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
    let editIcon;
    if (this.props.isEditing) {
      editIcon = <FontAwesome onClick={this.onEditClicked} style={iconStyle} name="check" />;
    } else {
      editIcon = <FontAwesome onClick={this.onEditClicked} style={iconStyle} name="pencil" />;
    }
    return (
      <div style={titleStyle}>
        <h1> {this.state.text} </h1>
        <h1>
          {editIcon}
          <FontAwesome onClick={this.onTrashClicked} style={iconStyle} name="trash" />
        </h1>
      </div>
    );
  }
}

export default NoteTitle;
