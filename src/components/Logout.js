import React from 'react';

import { connect } from "react-redux"

class Logout extends React.Component {

    componentDidMount(){
        window.history.pushState('correct', 'Title', '/');
        this.props.dispatch({ type: "LOGOUT" });
        window.localStorage.clear()
        //window.location.reload()
    }
    render() {
        return (
            <h1>Goodbye!</h1>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Logout);