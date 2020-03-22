import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom.button.component'
import {auth,signInWithGoogle} from '../../components/firebase/firebase.utils'

class SignIn extends React.Component{
    	constructor(props){
            super(props);
            this.state ={
                password:'',
                email:''
            }
        }

        handleSubmit = async event => {
            event.preventDefault();
            const {email,password} = this.state
            try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'', password:''});

            } catch(error){
                console.error(error);
            }

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
                        <div className = 'in-box'>
                        <CustomButton type = "submit" >Sign In</CustomButton> 
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton> 

                        </div>
                       
                    </form>

                </div>
            )
        }
}
export default SignIn