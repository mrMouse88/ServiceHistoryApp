module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define("Events", {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sidenote: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Events
}