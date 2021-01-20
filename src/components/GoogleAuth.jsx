import React, { Component } from 'react';

class GoogleAuth extends Component {

        state = {isSignedIn: null}

    componentDidMount() {
        //initiallising the gapi library
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '844596455543-59n3trm0t4qlgmpp5cqhudeb275h69ut.apps.googleusercontent.com',
                scope:'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth2.isSignedIn.get()});
            }); 
        });
    }
    //helper method
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Join</div>;
        } else if (this.state.isSignedIn === true) {
            return (<div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</div>)
        }else {
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</div>
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
