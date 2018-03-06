import DataTypes from 'sequelize';

import sequelize from './db';

import Question from './Question';
import User from './User';

const Answer = sequelize.define(
  'answers',
  {
    value: DataTypes.TINYINT,
  },
  { timestamps: false },
);
Answer.belongsTo(Question);
User.hasMany(Answer);

export default Answer;
