/* Esse arquivo sera rodado antes do projeto, para assim o projeto 
possa colocar dados e tirar dados*/
// importa o db
const Database = require("./config");

// inicia o db
const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close();
    },
};

initDb.init();
