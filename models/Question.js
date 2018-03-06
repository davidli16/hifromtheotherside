import DataTypes from 'sequelize';

import sequelize from './db';

const Question = sequelize.define(
  'questions',
  {
    topic: DataTypes.STRING,
    text: DataTypes.STRING,
    isDefault: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  },
);

export default Question;
