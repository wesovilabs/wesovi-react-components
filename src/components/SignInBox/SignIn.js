import React from 'react';
import Styles from 'SignIn.scss';

class SignInBox extends React.Component {

  submitForm(evt) {
    evt.preventDefault();
    this.props.handleClickButtonFn(this);
  }

  fieldsUpdated(field){
    this.props.handleChangesInForm(field)
  }


  getDefaultProps(){
    return {
      lbPassword:'Password',
      lbUsername: 'Username',
      lbButton: 'Log in',
      handleChangesInForm:(field,value)=>{}
    };
  }

  render() {
    return (
      <form className={Styles.form}>
        <input
          type="text"
          placeholder={this.props.lbUsername}
          onChange={() => this.props.handleChangesInForm('username', this)}
          value={this.props.credentials.username}
          />
        <input
          type="password"
          placeholder={this.props.lbPassword}
          onChange={() => this.props.handleChangesInForm('password', this)}
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
