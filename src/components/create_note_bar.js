import React, {
  Component,
} from 'react';

class CreateBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title_text: '',
    };
    this.onInputChanged = this.onInputChanged.bind(this);
    this.submitPressed = this.submitPressed.bind(this);
  }

  onInputChanged(event) {
    this.setState({ title_text: event.target.value });
  }

  submitPressed() {
    if (this.state.title_text !== '') {
      this.props.onSubmitPressed(this.state.title_text);
    }
  }

  render() {
    let formStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    };
    let inputStyle = {
      width: '80%',
      padding: '12px 20px',
      marginRight: '10px',
      boxSizing: 'border-box',
      border: '2px solid #ffde00',
      borderRadius: '4px',
      fontSize: '20px',
    };
    let buttonStyle = {
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #ffde00',
      backgroundColor: '#ffde00',
      fontSize: '20px',
    };
    return (
      <div id="createbar" style={formStyle}>
        <input style={inputStyle} onChange={this.onInputChanged} value={this.state.searchterm} placeholder="New note title" />
        <input style={buttonStyle} onClick={this.submitPressed} type="submit" value="Create" />
      </div>
    );
  }
}

export default CreateBar;
