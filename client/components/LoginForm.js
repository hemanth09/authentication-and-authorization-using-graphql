import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: []}
    }
    
    componentWillUpdate(nextProps) {
        const { history } = this.props
        if(!this.props.data.user && nextProps.data.user) {
            history.push('/dashboard')
        }
    }
    onSubmit = ({email, password}) => {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({ errors })
        });
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default graphql(query)(
    graphql(mutation)(LoginForm)
);
