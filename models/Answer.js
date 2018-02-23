import DataTypes from 'sequelize';

import User from './User';
import sequelize from './index';

import Question from './Question';

const Answer = sequelize.define('answers', {
  value: DataTypes.TINYINT,
});
Answer.belongsTo(Question);

export default Answer;
