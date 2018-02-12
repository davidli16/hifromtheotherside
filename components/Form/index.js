import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    const { children } = this.props;
    return <form onSubmit={this._handleSubmit}>{children}</form>;
  }
}

export default Form;
