module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    }
  });
  return Burger;
};
