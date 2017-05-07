module.exports = function(sequelize, DataTypes) {
	var vehicle = sequelize.define("vehicle", {
		make: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		makeId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 1850,
				max: 2019
			}
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,140]
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