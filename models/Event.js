import DataTypes from 'sequelize';

import sequelize from './index';

const Event = sequelize.define('events', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  code: DataTypes.STRING,
});

export default Event;
