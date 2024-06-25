"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Faturas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numero_cliente: {
        type: Sequelize.STRING,
      },
      mes_referencia: {
        type: Sequelize.DATE,
      },
      energia_eletrica: {
        type: Sequelize.ARRAY,
      },
      energia_sceee: {
        type: Sequelize.ARRAY,
      },
      energia_compensada: {
        type: Sequelize.ARRAY,
      },
      contrib_ilumn_publica_municipal: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Faturas");
  },
};
