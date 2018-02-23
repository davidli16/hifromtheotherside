import DataTypes from 'sequelize';

import sequelize from './index';

const Question = sequelize.define('questions', {
  topic: DataTypes.STRING,
  text: DataTypes.STRING,
});

export default Question;
