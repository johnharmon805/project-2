module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define("products_tb", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    product_name: DataTypes.STRING,
    product_description: DataTypes.TEXT,
    product_category: DataTypes.STRING,
    essential: DataTypes.BOOLEAN,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER
  });
  return products;
};