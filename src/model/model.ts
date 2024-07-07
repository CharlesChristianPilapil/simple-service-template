import { DataTypes, Sequelize } from "sequelize";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

sequelize.authenticate();

export const Library = sequelize.define(
  "library",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: "n/a",
    },
    released_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "n/a",
    },
  },
  {
    tableName: "library_tb",
    timestamps: false,
  }
);

Library.sync({ alter: true })
  .then(() => console.log("Success"))
  .catch((error) => console.log(`Error: ${error}`));