import React from 'react';

import request from 'lib/request';

import Field from 'components/Field';
import Form from 'components/Form';
import Layout from 'components/Layout';
import Question from 'components/Question';

class Profile extends React.Component {
  static async getInitialProps({ req }) {
    const profile = await request.get('/profile/get', undefined, req);
    return {
      user: profile.user,
      questions: profile.questions,
      answers: profile.answers,
    };
  }

  async _handleSubmit(values) {
    try {
      await request.post('/profile/update', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        answers: values.answers,
      });
    } catch (error) {}
  }

  render() {
    const { user, questions, answers } = this.props;
    const answersByQuestionId = [];
    for (const answer of answers) {
      answersByQuestionId[answer.questionId] = answer.value;
    }
    return (
      <Layout>
        <Form
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            answers: answersByQuestionId,
          }}
          onSubmit={this._handleSubmit}
        >
          <div>Personal information</div>
          <Field label="First name" name="firstName" />
          <Field label="Last name" name="lastName" />
          <Field label="Email" name="email" type="email" />
          <div>Alignments</div>
          {questions.map(question => {
            return <Question key={question.id} question={question} />;
          })}
          <button type="submit">Update</button>
        </Form>
      </Layout>
    );
  }
}

export default Profile;
