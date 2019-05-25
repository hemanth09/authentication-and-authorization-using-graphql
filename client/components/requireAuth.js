import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import currentUserQuery from '../queries/CurrentUser'

export default (WrappedComponent) => {

    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
              this.props.history.push('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    
    return graphql(currentUserQuery)(RequireAuth);
}

