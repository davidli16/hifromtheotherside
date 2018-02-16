import React from 'react';

class Field extends React.Component {
  render() {
    const { htmlFor, label, children } = this.props;
    return (
      <div>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
      </div>
    );
  }
}

export default Field;
