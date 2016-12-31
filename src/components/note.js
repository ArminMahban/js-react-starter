import React, {
  Component,
} from 'react';
import Draggable from 'react-draggable';
import NoteTitle from './note_title';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      text: props.text,
      x: props.x,
      y: props.y,
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
  }

  onDeletePressed(id) {
    this.props.onDeletePressed(this.state.id);
  }

  handleDrag(event, data) {
    this.setState({
      x: data.x,
      y: data.y,
    });
  }

  render() {
    let noteStyle = {
      backgroundColor: '#ffde00',
      padding: '20px',
      width: '300px',
      boxShadow: '5px 5px 5px #888888',
    };

    return (
      <Draggable
        axis="both"
        defaultPosition={{ x: this.state.x, y: this.state.y }}
        position={null}
        onDrag={this.handleDrag}
      >
        <div id="note" style={noteStyle}>
          <NoteTitle onDeletePressed={this.onDeletePressed} text={this.state.title} />
          <h3> {this.state.text} </h3>
        </div>
      </Draggable>
    );
  }
}

export default Note;
