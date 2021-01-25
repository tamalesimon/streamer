import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    constructor() {
        super();
    
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.onAuthChanged = this.onAuthChanged.bind(this);
    }
    
        componentDidMount() {
        //initiallising the gapi library
        window.gapi.load('client:auth2', () => {
            window.gapi.auth2
            .init({
                clientId: '844596455543-59n3trm0t4qlgmpp5cqhudeb275h69ut.apps.googleusercontent.com',
                scope:'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            }); 
        });

    }
    

    

    handleSignOut(){
        this.auth.signOut();    
     }

    handleSignIn(){
        this.auth.signIn();
     };

     onAuthChanged (isSignedIn){
        //getting userId and userName from Gapi
        let userId = this.auth.currentUser.get().getId();
        let userName = this.auth.currentUser.get().getBasicProfile().getName(); 

        if(isSignedIn){
            this.props.signIn(userId, userName);
        }else {
            this.props.signOut();
        }

        //removing component state
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        
    }

    //helper functions
    renderAuthButton() {
        switch (this.props.isSignedIn) {
            case true:
                  return (<div onClick={this.handleSignOut} className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</div>);
            case false:
                    return (<div onClick={this.handleSignIn} className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</div>);
            default:
                return null;
        }
    }

    render() {
        return (
            <>
                {this.renderAuthButton()}
            </>
        )
    };
};

 const mapStateToProps = (state) => {
    return {
        isSignedIn: state.authReducer.isSignedIn,
        userId: state.authReducer.userId,
        userName: state.authReducer.userName        
    }

} 

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut: signOut
}) (GoogleAuth);
