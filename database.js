import { Sequelize } from "sequelize";
// const sequelize = new Sequelize("postgres", "ahmad", "12345", {
const sequelize = new Sequelize("demodb", "test", "testdb", {
  dialect: "postgres", //which db we using
  host: "localhost",
  define: {
    timestamps: true, // it auto create created_at, updated_at in every table
  },
});
// this is conntection string we made and exporting so that when our app starts
// this file should run and we will connect to db
export default sequelize;
