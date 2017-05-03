module.exports = function(sequelize, DataTypes) {
	var make = sequelize.define("make", {
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 55]
			}
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,55]
			}
		}
	},
	{
		timestamps: false,
		classMethods: {
			associate: function(models) {
				make.hasMany(models.model, {
					onDelete: "cascade"
				});
			}
		}
	});
	return make;
};