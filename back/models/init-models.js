var DataTypes = require("sequelize").DataTypes;
var _Sales = require("./Sales");
var _Shipment = require("./Shipment");
var _coop = require("./coop");
var _coopMember = require("./coopMember");
var _inventory = require("./inventory");
var _product = require("./product");
var _warehousing_schedule = require("./warehousing_schedule");

function initModels(sequelize) {
  var Sales = _Sales(sequelize, DataTypes);
  var Shipment = _Shipment(sequelize, DataTypes);
  var coop = _coop(sequelize, DataTypes);
  var coopMember = _coopMember(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var warehousing_schedule = _warehousing_schedule(sequelize, DataTypes);

  coopMember.belongsTo(coop, { as: "Coop", foreignKey: "Coop_id"});
  coop.hasMany(coopMember, { as: "coopMembers", foreignKey: "Coop_id"});
  product.belongsTo(coop, { as: "Coop", foreignKey: "Coop_id"});
  coop.hasMany(product, { as: "products", foreignKey: "Coop_id"});
  warehousing_schedule.belongsTo(coopMember, { as: "Member", foreignKey: "Member_id"});
  coopMember.hasMany(warehousing_schedule, { as: "warehousing_schedules", foreignKey: "Member_id"});
  Sales.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(Sales, { as: "Sales", foreignKey: "Product_id"});
  Shipment.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(Shipment, { as: "Shipments", foreignKey: "Product_id"});
  warehousing_schedule.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(warehousing_schedule, { as: "warehousing_schedules", foreignKey: "Product_id"});

  return {
    Sales,
    Shipment,
    coop,
    coopMember,
    inventory,
    product,
    warehousing_schedule,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
