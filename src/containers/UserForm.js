import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "../components/Form/Form.js";
import { submitUserForm } from "../actions/index.js";

const mapDispatchToProps = dispatch => ({
    submitUserForm: user => dispatch(submitUserForm(user))
})

const mapStateToProps = state => {
    const { status } = state;
    return { status };
}

class UserForm extends Component {
    render() {
        const { submitUserForm, status } = this.props;
        return (
            <Form
                title="Add user"
                fields={["name", "email"]}
                onSubmit={submitUserForm}
                status={status}
            />
       );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);