var pwdHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addProduct: function (rowid, username, passwords) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into userdata(rowid, username, passwords) values(?, ?, ?)",
                    [rowid, username, passwords],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add product error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}