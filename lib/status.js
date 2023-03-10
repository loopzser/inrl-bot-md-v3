const inrlFunc = require('./perfix')
const config = require("./Data");
const {getVar}=require('./database/variable');

module.exports = async (conn, m, iSecond = false ) => {
    let data = await getVar();
    let {READ_CHAT}=data.data[0];
  try {
    if(READ_CHAT == "true"){ conn.readMessages([m.key]) }
    if (m.message && !iSecond) {
      console.log("[ MESSAGE ]"),
        console.log(new Date()),
        console.log(m.client.displayText || m.type) +
          "\n" +
          console.log("=> From"),
        console.log(m.client.pushName),
        console.log(m.sender) + "\n" + console.log("=> In"),
        console.log(m.isGroup ? m.client.pushName : "Private Chat", m.from)
    }
  } catch (err) {
    console.log(err);
  }
};