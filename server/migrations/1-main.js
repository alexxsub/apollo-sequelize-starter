'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Books", deps: []
 * addIndex "books_title" to table "Books"
 *
 **/

var info = {
    "revision": 1,
    "name": "main",
    "created": "2020-12-04T02:26:37.086Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Books",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "allowNull": false,
                        "primaryKey": true
                    },
                    "title": {
                        "type": Sequelize.STRING,
                        "field": "title",
                        "allowNull": false
                    },
                    "author": {
                        "type": Sequelize.STRING,
                        "field": "author"
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "addIndex",
            params: [
                "Books",
                ["title"],
                {
                    "indexName": "books_title",
                    "name": "books_title",
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
        fn: "dropTable",
        params: ["Books", {
            transaction: transaction
        }]
    }];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
