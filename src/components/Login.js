import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleUsernameChange = ({ target: { value } }) => {
    this.setState({ username: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username } = this.state;
    const { onLogin, history } = this.props;
    onLogin(username);
    history.push('/');
  };

  render() {
    const { username } = this.state;

    return (
      <div className="login-page">
        <form onSubmit={this.handleSubmit}>
          <h1>Login pokedex</h1>
          <label htmlFor="username">
            Username:{' '}
            <input
              type="text"
              placeholder="githubusername"
              value={username}
              onChange={this.handleUsernameChange}
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

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
