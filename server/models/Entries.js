const Parts = require("./Parts");

module.exports = (sequelize, DataTypes) => {
	const Entries = sequelize.define("Entries", {
		date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		mileage: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sidenote: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});

	Entries.associate = (models) => {
		Entries.hasMany(models.Parts, {
			onDelete: "cascade",
		});
	};

	return Entries;
};
