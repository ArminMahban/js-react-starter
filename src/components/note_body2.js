import React, { Component } from 'react';

class NoteBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    let msg;
    if (this.props.isEditing) {
      msg = <h1> Editing </h1>;
    } else {
      msg = <h1> Not Editing </h1>;
    }
    return (
      <div>
        {msg}
      </div>
    );
  }
}

export default NoteBody;
