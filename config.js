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
global.owner = process.env.OWNER_NUMBER || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJhMzcrY1FvN3ZpcDVCTDZBN0xwZGNqaysvdjdLN1prc1RHaFpRdDlHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmdSUnpLU2JkTWZ3ZnBESG9lbGdreVBtZUZLWnM1SWlaQXh1a0dsWUJHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRHQ2Wlo1RzlwckRaLzdnNUxETDFsNGh2ZmJ2S2pVaEc0d1FEMHlYNzFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFOG1idE5ZNlZRSTlnbm1DUWxRUFRVRENaeW9idWtmKzNDTkJ3WVNPcWp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLdld4enVMU3pBS0x6bjU4eEQ5bzg5TUl5OElWblBLdG1hTnErSWFCVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzVlI3RENvb3hNQU93ekRhVDl6L0JpTmdnZElnUHM1b0FtbmJ4ZHhzVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09KdmpvL2srRis2SXdiWWFjNWl3TkNaa2dYVUQyekdjdVhtT1Z5QjRHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXdDb3B4Y1d6NGJTR0dpRWFOOG1TQVNHOXpZemFlV2ppT0JoUzNXb0FGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZiV1ZzR1cxb2tzb3BDYzMyRjZCUFNqQzZmNktQN0lJamYvVHVTdVZQaWdTbTlHN0R3bFM4K3dnRFB1SUhzc3NLVGlrRmU3OW1PeldnMXNUZVNjWmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJDcERuTmdtb0tZbkkzZXRYNGl5aFFXQTVQYVc0eVlLT1RaMlVzSVlSNTFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjUwNDU5MzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREZDMkQ5OTEzRDJGODY2ODI3MUQ5RTAyQUZCNTBFQ0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzgyMjU0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2NTA0NTkzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDQxQjk2QTFCNEM3MTlBRTBEQTIzOTk4REM0NTY5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzODIyNTQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTY1MDQ1OTMyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM2QUQyNEMzRkU5MUM3RTJFNTc1NkUzNkQ1Rjg2QTg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM4MjI1NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjUwNDU5MzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTQ5MTQyNjBCNDc4QkM2NTk2QzRGNUY2NjhCRTg0NjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzgyMjU0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibUk3MXVHTFFTQnVieVdLQmdFUVVKZyIsInBob25lSWQiOiI2N2ZlNGY2Ni02MWY4LTQ2YjgtOTEzYi1iZDA0YzZjYTg1NjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3lqS2RWaVRmL3dVYnFVaHVKaDFYVUxUd2wwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNSSkFTWFF0QXhRVTdxNFZsT1M2SFF5RHpwdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1WTJIUFk1QyIsIm1lIjp7ImlkIjoiMjM0OTE2NTA0NTkzMjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRhbmNyeXB0b3R2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK2s4TllCRUw2UTRMb0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHRGl3Mk05RmZUYjhuc1g1dHI4cVdNNzNCNFVBTnhESUFuSXNpN0dJWmxvPSIsImFjY291bnRTaWduYXR1cmUiOiJKWm04djdXZkxVa0d3cmsrVFlCZ2IwK2lsRXc1eXBNNE45OUYxU0N0YzZHSGRRYWhiRTF4bnM4bXQ1M2xDYnN3OFpRYWtYQ29LQVBicEZIcDJuZ2FCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEZrZDd3bFN2NEdXcDFjTngrMUdwTjEyLzlRNjI3NFEwRTJGUnlqd2wxTm04R2g5UGFlOU5GbktSYVRadG80MDhEeFBscktsMVJqRzRJeWtLRUhoaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY1MDQ1OTMyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmc0c05qUFJYMDIvSjdGK2JhL0tsak85d2VGQURjUXlBSnlMSXV4aUdaYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzgyMjU0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHUGcifQ=="
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
