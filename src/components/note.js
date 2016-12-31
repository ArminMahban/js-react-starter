import React, {
  Component,
} from 'react';
import Draggable from 'react-draggable';
import NoteTitle from './note_title';
import NoteBody from './note_body2';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      note: props.note,
      isEditing: false,
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
    this.onEditClicked = this.onEditClicked.bind(this);
    console.log(props.note.text);
  }

  onDeletePressed(id) {
    this.props.onDeletePressed(this.state.id);
  }

  onEditClicked() {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
      console.log(this.state.isEditing);
    }
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
        defaultPosition={{ x: this.state.note.x, y: this.state.note.y }}
        position={null}
        onDrag={this.handleDrag}
      >
        <div id="note" style={noteStyle}>
          <NoteTitle isEditing={this.state.isEditing} onEditClicked={this.onEditClicked} onDeletePressed={this.onDeletePressed} text={this.state.note.title} />
          <NoteBody isEditing={this.state.isEditing} text={this.state.note.text} />
        </div>
      </Draggable>
    );
  }
}

export default Note;
