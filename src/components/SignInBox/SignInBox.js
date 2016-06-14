import React from 'react';
import Style from './SignInBox';

class SignInBox extends React.Component {

  fieldsUpdated(field) {
    this.props.handleChangesInForm(field, this);
  }

  submitForm(evt) {
    evt.preventDefault();
    this.props.handleClickButtonFn(this);
  }

  render() {
    return (
      <form className={Style[this.props.formClassName]}>
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
  credentials: React.PropTypes.object.isRequired,
  handleClickButtonFn: React.PropTypes.func.isRequired,
  handleChangesInForm: React.PropTypes.func,
  lbUsername: React.PropTypes.string,
  lbPassword: React.PropTypes.string,
  lbButton: React.PropTypes.string,
  formClassName: React.PropTypes.string,
};

SignInBox.contextTypes = {

};

SignInBox.defaultProps = {
  lbPassword: 'Password',
  lbUsername: 'Username',
  lbButton: 'Log in',
  handleChangesInForm: () => {},
  formClassName: 'wsvform',
}

export default SignInBox;
