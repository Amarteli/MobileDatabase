var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "UserManager.db",
            "1.0",
            "user manager database",
            1000000);
        this.db.transaction(
            function (tx) {
                //Run SQL Here
                tx.executeSql(
                    "create table if not exists userdata(_id int primary key, rowid integer, username text, passwords text)",
                [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " + error.message);
                    })
            },
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create DB transaction completed successfully:");
            },
        );
    }
}