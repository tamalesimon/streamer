import React, { Component } from 'react';

class GoogleAuth extends Component {

    /* constructor(props) {
        super(props);        
        this.state = {isSignedIn: null};
    }  */   
    
    state = {isSignedIn: null};

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
                this.onAuthChanged();
                this.auth.isSignedIn.listen(this.onAuthChanged);
            }); 
        });

    }

    handleSignOut = () => {
        this.auth.signOut();    }

    handleSignIn = () => {
        this.auth.signIn();
     }

    onAuthChanged = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    //helper functions
    renderAuthButton() {
        /* if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn === true) {
            return (<div onClick={this.onSignOut} className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</div>)
        }else {
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</div>
        } */
        switch (this.state.isSignedIn) {
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

export default GoogleAuth;
