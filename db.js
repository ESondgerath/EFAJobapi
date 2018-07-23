const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DBNAME, process.env.PGUSER, process.env.PGPASS, {
    dialect: "postgres",
    port: 5432,
    host: process.env.PGHOST
});

sequelize.authenticate().then(
    function() {
        console.log("connected to the database");
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;