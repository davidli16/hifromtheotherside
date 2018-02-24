import React from 'react';
import Router from 'next/router';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';
import Section from 'components/Section';
import Form from 'components/Form';
import Field from 'components/Field';
import Button from 'components/Button';

export default class extends React.Component {
  static async getInitialProps() {
    const questions = await request.get('/admin/questions/getAll');
    return {
      questions,
    };
  }

  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  async _handleSubmit(values) {
    await request.post('/admin/questions/create', {
      topic: values.topic,
      text: values.text,
    });
    Router.reload();
  }

  render() {
    const { questions } = this.props;
    return (
      <AdminLayout>
        <Form
          initialValues={{ topic: '', text: '' }}
          onSubmit={this._handleSubmit}
        >
          <Field label="Topic" name="topic" />
          <Field label="Text" name="text" />
          <Button type="submit">Submit</Button>
        </Form>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(question => (
              <tr key={question.id}>
                <td>{question.topic}</td>
                <td>{question.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminLayout>
    );
  }
}
