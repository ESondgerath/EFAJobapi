'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('students', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'test@test.com',
        password: 'thisismypassword',
        resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Doe',
        last_name: 'John',
        email: 'test1@test.com',
        password: 'thisismypassword',
        resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Rhys',
        last_name: 'Doe',
        email: 'test2@test.com',
        password: 'thisismypassword',
        resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Ray',
        last_name: 'Doe',
        email: 'test3@test.com',
        password: 'thisismypassword',
        resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('students', null, {});
  }
};
