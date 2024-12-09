//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "9165045932";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZmbkE4YU1GTVpXUjlrVUZIMk80V2VmQXBVbWNRbE1veC9sVDRjcVltbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBTN1grVnZPbDhUWG5ic0s4Q21ya1VmQlk1V2RZZ3pNeGlXWDNPbUZRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR0dCYTZWNytjYUlWLzhnOHNBMDBkN285QXd5WFdQNFZjSytESExQL0ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR3ZlZ0JFcWhxSEtwZENHZGZiYkFieEoycm40bGw1WXBpK1ZNUEYzS1dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BQkZYWVBoR1M2UmZkQjNZSndKU1pjeFNBK2NkbHRTWVJHUDNCOFFJMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY3c2ZSNU12eWppUHp0RkFJU2hCYXc3TG45U0c3aXkvdDdFNGtOQ2F5Q1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFVUmxXSG51MGNDV3pQNDZZSmNOazIxOSsrVE05cFNydHhvVzIvczVuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWYyODhVMkxrVlJrNi8wTVVHcXFva3FZS3NxdThvUnNZZDFBTUcxNzdBYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBzNGw2cnA1RVFzSThZa3hHdnJMY09FWHJoc3JLVWVBbmJndmhXSkJBV3ZwRzVlb1lsblJzTHkwSlVweFBoRlZwMHFMTkJkNlVvL3BNY1lyUWg3OGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJCcGU4Rm56Vk42eThpQ2hkVTJ4eDBYRUlDU1BOTzlHMFR3Q2R3VnRVc0ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjUwNDU5MzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDQyNEQ3MzA3MzhDRjFENkFGQkUyMDlFODk3QjNCMEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzc3NzI1Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2NTA0NTkzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NzE0RjBFOEIxMTdCNzg2OTkzQTFGMzE0MjNGNDU4MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNzc3MjUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTY1MDQ1OTMyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI2MEM1MDk3NjAwRDk4NEJCRUI0MENFMjVGMUNERUNEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM3NzcyNTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjUwNDU5MzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTJDRUIyQTU0OTg4MUEzQTcyQjBCN0M4MjFCMTdENDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzc3NzI1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiblVGUlpUakpRX2FWX0hneE1aM1c0ZyIsInBob25lSWQiOiI3ODY5MzFhYi0wMzAyLTRjM2ItYjI5ZC05MTFmMWQxMWNhNzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmo4clpFLzQ1cStIeVkwWFY3TVNTSlRtYThVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4dFRXbllFSmdkbVc5aTNoYmxDU05sZndKaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3NzZNRUVTRyIsIm1lIjp7ImlkIjoiMjM0OTE2NTA0NTkzMjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhbmNyeXB0b3R2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQM1FtdlVDRU5TdTNib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4dkNuYTJjVWNINHRPWFovWllIbDd2TlVBbGZ2K1B0cksrRkdTejJtbWo0PSIsImFjY291bnRTaWduYXR1cmUiOiI3RjBEc1IxTmV5d2FqUE1xU2JIdkY2Ukl2KzltSC9CcWxBUVlBWFpxWVNMSWFkVEpQbnBLSU0rUWN5T1RHdVlLMmpWdW1RWGwyVkc1eVg1SE1ucVpDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM3ljaEFETU8vSUZQeS9WNVVTeHVLbFVnNjB6OTBEbisxQ3NIVEpxOTJGYU9oV1oybWNNODdRQ29RSjB6Rkg5UzRpRGlOcTJXL2V3NWJMYUFZVWtZZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY1MDQ1OTMyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2J3cDJ0bkZIQitMVGwyZjJXQjVlN3pWQUpYNy9qN2F5dmhSa3M5cHBvKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzc3NzI1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRC8ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
