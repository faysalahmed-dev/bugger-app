import React, { Component } from 'react';
import {withRouter,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import patten from '../regularExprission';
import FormInput from '../FormInput/FormInput';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import { authenticationSingIn, authRedirect } from '../../../Store/Action/ActionCreator/index'
import { FormToggleButton } from '../../UI/Ui_Uitility/Ui_Uitility'

import './LoginForm.scss';

class logInForm extends Component {
     state = {
          email: '',
          password: '',
          isLoading: false,
          errorLog: {
               email: { isError: false, meg: 'Enter Valid Email Address' },
               password: { isError: false, meg: 'Enter Password' },
          },
          buttonDisabled: true
     };
     handleChange = (e) => {
          const { value, name } = e.target;
          this.setState({ [name]: value }, () => {
               this.validForm(value, name);
          })
     };
     handleSubmit = (e) => {
          const {email, password, buttonDisabled } = this.state;
          e.preventDefault();
          if (!buttonDisabled) {
               this.setState({isLoading: true}, () => {
                    this.props.onSubmit(email,password)
               })
          }
     }
     buttonIsDisabled = () => {
          const {email, password} = this.state;
          const formError =
               Object.values(this.state.errorLog).every(err => err.isError === true)
          const checkError =
               formError ||
               email === '' ||
               password === ''
          this.setState({ buttonDisabled: checkError })
     }
     validForm = (value, name) => {
          const reg = patten[name].test(value);
          this.setState({
               errorLog: {
                    ...this.state.errorLog,
                    [name]: {
                         ...this.state.errorLog[name],
                         isError: !reg
                    }
               }
          }, this.buttonIsDisabled);
     };
     authRedir = () => {
          if (localStorage.getItem('burger')) {
               
          }else {

          }
     }
     render() {
          const { email, password, isLoading, buttonDisabled } = this.state;
          const {email: emailEr,password: passwordEr} = this.state.errorLog;

          let redir = <Redirect to="/" />
         
          return (
               <React.Fragment>
                    {isLoading ? (
                         <Loader />
                    ) : (
                              <form className="form-login" onSubmit={this.handleSubmit}>
                                   {this.props.auth ? redir : null}
                                   <h1>Log In</h1>
                                   <div className="form-login__container">
                                        <FormInput
                                             label="Email"
                                             handleChange={this.handleChange}
                                             name="email"
                                             value={email}
                                             type="email"
                                             error={emailEr.isError}
                                             meg={emailEr.meg}
                                        />
                                   </div>
                                   <div className="form-login__container">
                                        <FormInput
                                             label="Password"
                                             handleChange={this.handleChange}
                                             name="password"
                                             value={password}
                                             type="text"
                                             error={passwordEr.isError}
                                             meg={passwordEr.meg}
                                        />
                                   </div>
                                   <FormToggleButton handleClick={this.props.handleFormToggle}>
                                        i don't have an account
						     </FormToggleButton>
                                   <div className="form-login__button-group">
                                        <Button button="primary-outline button-sm rounded" type="submit" disabled={buttonDisabled}>
                                             Log In
                                        </Button>
                                        <Button button="primary-outline button-sm rounded" handleClick={this.props.history.goBack}  type="button">
                                             Cancle
                                        </Button>
                                   </div>
                              </form>
                         )}
               </React.Fragment>
          );
     }
}
const mapStateToProps = state => ({
   auth: state.auth.token != null
})
const mapDispatchToProps = dispatch =>({
          onSubmit(email, password) {
               dispatch(authenticationSingIn(email, password))
          },
          onAuthRedirect(to) {
               dispatch(authRedirect(to))
          }
     })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(logInForm));
