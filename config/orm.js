var db = require("./connection.js");

var orm = {
  selectBurger: function (cb) {
    db.query("SELECT * FROM burgers", function (err, data) {
      if (err) throw err;

      cb(data);
    });
  },

  insertBurger: function (newBurger, cb) {
    var query = db.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [newBurger],
      function (err, data) {
        if (err) throw err;

        cb(data);
      }
    );

    console.log(query.sql);
  },

  updateBurger: function (burger, cb) {
    db.query(
      "UPDATE burgers SET ? WHERE ?",
      [
        {
          devoured: burger.devoured,
        },
        {
          id: burger.id,
        },
      ],
      function (err, data) {
        if (err) throw err;

        cb(data);
      }
    );
  },
};

module.exports = orm;
