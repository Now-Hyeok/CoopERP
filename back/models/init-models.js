var DataTypes = require("sequelize").DataTypes;
var _Member_req = require("./Member_req");
var _coop = require("./coop");
var _coopMember = require("./coopMember");
var _inventory = require("./inventory");
var _product = require("./product");

function initModels(sequelize) {
  var Member_req = _Member_req(sequelize, DataTypes);
  var coop = _coop(sequelize, DataTypes);
  var coopMember = _coopMember(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);

  coopMember.belongsTo(coop, { as: "Coop", foreignKey: "Coop_id"});
  coop.hasMany(coopMember, { as: "coopMembers", foreignKey: "Coop_id"});
  Member_req.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(Member_req, { as: "Member_reqs", foreignKey: "Product_id"});
  inventory.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasOne(inventory, { as: "inventory", foreignKey: "Product_id"});

  return {
    Member_req,
    coop,
    coopMember,
    inventory,
    product,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
