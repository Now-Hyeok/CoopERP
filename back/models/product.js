const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    Product_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "제품이름"
    },
    Product_category: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "제품카테고리"
    },
    Product_unit: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "제품단위"
    },
    Product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "제품가격"
    },
    Product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "제품 고유키"
    }
  }, {
    sequelize,
    tableName: 'product',
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
