const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inventory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
    ]
  });
};
