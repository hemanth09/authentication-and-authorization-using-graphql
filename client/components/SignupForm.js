import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'
import mutation from '../mutations/Signup'
import query from '../queries/CurrentUser'

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: []}
    }

    componentWillUpdate(nextProps) {
        const { history } = this.props;
        if(nextProps.data.user && !this.props.data.user) {
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
                <h3>Sign Up</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default graphql(query)(
    graphql(mutation)(SignupForm)
);
