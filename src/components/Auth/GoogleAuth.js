import React, { Component } from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../../actions'

class GoogleAuth extends Component{

    componentDidMount = () =>{
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '828711932745-4rv2rp47qncrok9mji2js2a2uorprb54.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn({
                userID: this.auth.currentUser.get().getId(),
                firstName: this.auth.currentUser.get().getBasicProfile().getGivenName(),
                lastName: this.auth.currentUser.get().getBasicProfile().getFamilyName(),
            });
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () =>{        
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <button className='button' onClick={this.onSignOutClick}>
                    {this.props.user.firstName +' '+ this.props.user.lastName } | Sign Out
                </button>
            )
        }else{
            return (
            <button className='button' onClick={this.onSignInClick}> 
                Sign in with Google
            </button>
        )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        user: state.auth.user
    }
}


export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth)