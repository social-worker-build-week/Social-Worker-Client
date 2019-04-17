import React from 'react';
import Login from './Login/Login';

const Authentication = App =>
    class extends Component {
        constructor(props) {
            super(props);
                this.state = {
                    loggedIn: false,
                }
        }

        componentDidMount() {
            if (!localStorage.getItem('token')) {
                this.setState({loggedIn: false});
            } else {
                this.setState({ loggedIn: true});
            }
        }

        render() {
            if (this.state.loggedIn) {
                return <App />
            } else {
                return <Login />
            }
        }
    }

    export default Authentication;