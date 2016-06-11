import React from 'react';
import Styles from './SignIn.scss';

class SignInBox extends React.Component {

  getDefaultProps() {
    return {
      lbPassword: 'Password',
      lbUsername: 'Username',
      lbButton: 'Log in',
      handleChangesInForm: () => {},
    };
  }

  fieldsUpdated(field) {
    this.props.handleChangesInForm(field, this);
  }

  submitForm(evt) {
    evt.preventDefault();
    this.props.handleClickButtonFn(this);
  }

  render() {
    return (
      <form className={Styles.form}>
        <input
          type="text"
          placeholder={this.props.lbUsername}
          onChange={() => this.fieldsUpdated('username')}
          value={this.props.credentials.username}
        />
        <input
          type="password"
          placeholder={this.props.lbPassword}
          onChange={() => this.fieldsUpdated('password')}
          value={this.props.credentials.password}
        />
        <button onClick={(evt) => this.submitForm(evt)}>{this.props.lbButton}</button>
      </form>
    );
  }

}

SignInBox.propTypes = {
  handleClickButtonFn: React.PropTypes.func.isRequired,
  handleChangesInForm: React.PropTypes.func,
  lbUsername: React.PropTypes.string,
  lbPassword: React.PropTypes.string,
  lbButton: React.PropTypes.string,
  credentials: React.PropTypes.object.isRequired,
};

SignInBox.contextTypes = {

};

export default SignInBox;
