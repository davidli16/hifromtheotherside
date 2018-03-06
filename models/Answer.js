import DataTypes from 'sequelize';

import sequelize from './db';

import Question from './Question';
import User from './User';

const Answer = sequelize.define(
  'answer',
  {
    questionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    value: DataTypes.TINYINT,
  },
  { timestamps: false },
);
Answer.belongsTo(Question);
User.hasMany(Answer);

export default Answer;
