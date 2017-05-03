module.exports = function(sequelize, DataTypes) {
	var model = sequelize.define("model", {
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
				model.belongsTo(models.make, {
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
	return model;
};