import DataTypes from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from './index';

const User = sequelize.define('users', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  passwordHash: DataTypes.STRING,
  password: {
    type: DataTypes.VIRTUAL,
    set(val) {
      const passwordHash = bcrypt.hashSync(val, 10);
      this.setDataValue('password', val);
      this.setDataValue('passwordHash', passwordHash);
    },
    validate: {
      isLongEnough(val) {
        if (val.length < 8) {
          throw new Error('Please choose a longer password');
        }
      },
    },
  },
});

export default User;
