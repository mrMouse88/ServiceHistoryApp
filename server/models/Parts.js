const Entries = require("./Entries");

module.exports = (sequelize, DataTypes) => {
	const Parts = sequelize.define("Parts", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});

	return Parts;
};
