module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      name: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      description: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      address: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      postalCode: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      url: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      shippingCosts: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.DOUBLE
      },

      email: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      logo: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      phone: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      heroImage: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.STRING
      },

      status: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataTypes.ENUM('online', 'offline', 'closed', 'temporaly closed')
      }

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
