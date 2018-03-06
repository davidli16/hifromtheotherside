import DataTypes from 'sequelize';

import User from './User';
import sequelize from './db';

import Question from './Question';
import Event from './Event';

const EventQuestion = sequelize.define(
  'eventQuestions',
  {
    order: DataTypes.SMALLINT,
  },
  {
    timestamps: false,
  },
);
Event.belongsToMany(Question, { through: EventQuestion });
Question.belongsToMany(Event, { through: EventQuestion });

export default EventQuestion;
