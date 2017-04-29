module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define("user", {
		user_name: {
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
				user.hasMany(models.vehicle, {
					onDelete: "cascade"
				});
			}
		}
	});
	return user;
};