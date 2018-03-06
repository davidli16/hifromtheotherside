import DataTypes from 'sequelize';

import sequelize from './db';

const Event = sequelize.define('event', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  code: DataTypes.STRING,
});

export default Event;
