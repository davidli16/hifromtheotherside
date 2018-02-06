import DataTypes from 'sequelize';
import sequelize from './index';

const User = sequelize.define('users', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
});

export default User;
