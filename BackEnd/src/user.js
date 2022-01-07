const mysql = require("mysql");
const Promise = require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
  };

  const selectAllUser = async () => {
    const connection = mysql.createConnection(dbinfo);
  
    await connection.connectAsync();
  
    let sql = `SELECT * FROM user`;
    // let sql = `SELECT * FROM user ORDER BY ID DESC`;
    // let sql = `SELECT * FROM user WHERE ID=?`;
    const list = await connection.queryAsync(sql, []);
  
    await connection.endAsync();
    return list; 
  };
  
async function adduser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user (sender,reciver) values(?,?)`;
    await connection.queryAsync(sql, [user.sender, user.reciver]);
    await connection.endAsync();
};

async function connectionCheck(){
   const connection=mysql.createConnection(dbinfo)
   await connection.connectAsync();
 
   console.log("Connection Succes!!");

   await connection.endAsync();
}
connectionCheck();
const user = { sender: "hi", reciver: "hello" };
adduser(user);
module.exports={
    adduser,
    selectAllUser
};


