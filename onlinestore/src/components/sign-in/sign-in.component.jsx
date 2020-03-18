import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom.button.component'

class SignIn extends React.Component{
    	constructor(props){
            super(props);
            this.state ={
                password:'',
                email:''
            }
        }

        handleSubmit = event => {
            event.preventDefault();
            this.setState({email:'', password:''});

        }
        handleChange = event =>{
            const {value,name} = event.target;
            this.setState({[name]:value})
        }
        render(){
            return(
                <div className = 'sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign In with Your email and password</span>
                    <form onSubmit= {this.handleSubmit}>
                        <FormInput name = "email" type = "email" 
                        value ={this.state.email} required 
                        label = 'email'
                        handleChange = {this.handleChange}/>
                        <FormInput name = "password" type = "password" 
                        value ={this.state.password} required
                        label='password'
                         handleChange  ={this.handleChange}/>
                        <CustomButton type = "submit" >Sign In</CustomButton> 
                    </form>

                </div>
            )
        }
}
export default SignIn