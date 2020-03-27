import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {Switch,Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument } from './components/firebase/firebase.utils.js'
import  setCurrentUser from './redux/user/user.action'
class App extends React.Component{
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef =   await   createUserProfileDocument(userAuth);
        console.log(userRef)
        userRef.onSnapshot(
          snapShot => {
            this.props.setCurrentUser({
              
                id: snapShot.id,
                ...snapShot.data()
              
            })
          }
        )
      }
      this.props.setCurrentUser(userAuth)
    });
  

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div >
      <Header />
      <Switch>

      <Route exact path = '/' component = {HomePage} />
      <Route  path = '/shop' component = {ShopPage} />
      <Route  exact path = '/signin' 
      render = {()=>
          this.props.currentUser ? (
          <Redirect to='./'/>) : (<SignInAndSignUpPage/>)} />

      </Switch>

    </div>
  );}
}
const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user => dispatch( setCurrentUser(user))
})

const mapStatetoProps  = ({user})=>({
  currentUser: user.currentUser
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
