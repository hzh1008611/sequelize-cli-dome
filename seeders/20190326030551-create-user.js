'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: '童佳颖',
      sex: '女',
      email: '1576704502@qq.com',
      age: 18,
      createdAt: '2019-04-01',
      updatedAt: '2019-04-01'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
