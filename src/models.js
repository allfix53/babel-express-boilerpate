export default (Sequelize, sequelize, callback) => {
  const models = {
    Purchase: Sequelize.define('Purchase', {
      note: sequelize.STRING,
      description: sequelize.TEXT,
      code: sequelize.STRING,
      date: sequelize.DATE,
      dueDate: sequelize.DATE,
      total: sequelize.INTEGER,
      remains: sequelize.INTEGER,
      tax: sequelize.INTEGER,
      suplierId: sequelize.STRING,
      status: {
        type: sequelize.INTEGER,
        defaultValue: 0,
      },
      accountId: sequelize.STRING,
    },
      {
        updatedAt: 'last_update',
        createdAt: 'date_of_creation',
      }),
  };

  callback(models);
};

