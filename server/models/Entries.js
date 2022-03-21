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
	return Entries;
};
