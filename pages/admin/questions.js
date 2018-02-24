import React from 'react';
import Router from 'next/router';
import { Formik, Form, Field } from 'formik';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';

export default class extends React.Component {
  static async getInitialProps() {
    const questions = await request.get('/admin/questions/getAll');
    return {
      questions,
    };
  }

  constructor() {
    super();

    this._renderForm = this._renderForm.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderForm() {
    return (
      <Form>
        <Field name="topic" />
        <Field name="text" />
        <button type="submit">Submit</button>
      </Form>
    );
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
        <Formik
          initialValues={{ topic: '', text: '' }}
          render={this._renderForm}
          onSubmit={this._handleSubmit}
        />
        {questions.map(question => (
          <div key={question.id}>
            {question.topic}: {question.text}
          </div>
        ))}
      </AdminLayout>
    );
  }
}
