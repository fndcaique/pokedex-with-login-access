import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const { username } = this.state;
    login(username);
    history.push('/');
  };

  render() {
    const { username } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login Pokedex</h1>
          <label htmlFor="login">
            <input
              type="text"
              placeholder="githubusername"
              value={username}
              onChange={({ target: { value } }) =>
                this.setState({ username: value })
              }
            />
          </label>
          <button
            type="submit"
            disabled={username.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
