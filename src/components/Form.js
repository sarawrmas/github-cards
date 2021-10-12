import React from 'react';

class Form extends React.Component {
  state = { username: '' };
  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${this.state.username}`);
    const data = await response.json()
    this.props.onSubmit(data);
    this.setState({ username: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add Card</button>
      </form>
    )
  }
}

export default Form;