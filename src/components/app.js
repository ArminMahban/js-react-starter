import React, { Component } from 'react';
import Immutable from 'immutable';

import Note from './note';
import CreateBar from './create_note_bar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    const newNote = {
      title: 'tester',
      text: '',
      x: 200,
      y: 100,
    };
    // init component state here
    this.state = {
      idNum: 1,
      notes: Immutable.Map({ 0: newNote }),
    };

    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
  }

  onSubmitPressed(value) {
    console.log(value);
    const newNote = {
      title: value,
      text: '',
      x: 400,
      y: 100,
    };
    const newId = this.state.idNum + 1;
    this.setState({
      idNum: newId,
      notes: this.state.notes.set(newId, newNote),
    });
  }

  onDeletePressed(id) {
    console.log('delete from app.js');
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  render() {
    return (
      <div>
        <CreateBar onSubmitPressed={newTitle => this.onSubmitPressed(newTitle)} />
        {this.state.notes.map((note, id) =>
          <Note onDeletePressed={idToDelete => this.onDeletePressed(idToDelete)} id={id} title={note.title} text={note.text} x={note.x} y={note.y} />
        )}
      </div>
    );
  }
}

export default App;
