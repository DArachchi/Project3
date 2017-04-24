module.exports = function(sequelize, DataTypes) {
	var vehicle = sequelize.define("vehicle", {
		vehicle_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		}
	},
	{
		timestamps: false,
		classMethods: {
			associate: function(models) {
				vehicle.belongsTo(models.user, {
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
	return vehicle;
};