import React from 'react';
import { Formik, Form } from 'formik';

export default class extends React.Component {
  _renderForm(...args) {
    const { children } = this.props;
    return (
      <Form>
        {typeof children == 'function' ? children(...args) : children}
      </Form>
    );
  }

  render() {
    return <Formik {...this.props} render={this._renderForm} children={null} />;
  }
}
