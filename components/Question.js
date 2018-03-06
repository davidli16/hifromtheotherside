import React from 'react';

import { Field } from 'formik';

const OPTIONS = [
  'Strong agree',
  'Agree',
  'Neutral',
  'Disagree',
  'Strongly disagree',
];

export default class extends React.Component {
  _renderField({ field }) {
    const { question } = this.props;
    return (
      <div>
        <div>
          <strong>{question.topic}</strong> {question.text}
        </div>
        {OPTIONS.map((text, i) => (
          <label key={i}>
            <input
              {...field}
              type="radio"
              value={i + 1}
              checked={i + 1 == field.value}
            />{' '}
            {text}
          </label>
        ))}
      </div>
    );
  }

  render() {
    const { question } = this.props;
    return (
      <Field name={`answers[${question.id}]`} render={this._renderField} />
    );
  }
}
