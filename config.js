const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2349027313112" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349027313112";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_28_04_12_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0lqbCtRK3pPWkliRjg1SC96ZDJreWJ4THRkcGYvUE83WldMTjgxMnlscz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlE0Y3pEdHo1NFdEeFpvamFTWGd1Vk1uNGpINXhJaEtJSEc2K1pKNCt2REk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEgrK045aE5WbXo5MDR3bUZ4SDlQNlVmUVIzRkJyK3VtNnZmMGsxWThVQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5kR2VVSk1ydndFZzllbWtUM1VnN1FQUXoxVmc5VmFQVzgyM2dtbHpsVm89XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEQzaWNiRDRDbjRYbXM1b09lcGZ3UG1RK0hCWlFLMHJoQUlBd280OHdrVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImxvdGZ2TEhwVHkyMC9lcHY4bVNTL2JLTE1zRjhXU3hkeXlDOE9ibC9Idzg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlTHpCWHRyQkNrMllYNW9YNWVtOC9XV1M1L1pnTy9EeXl6a2tISE1yUlZNPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL2pVNWtTemVQUUhPWC9jMGROVzNPWW9tNzJlSjU2VXg4cTZKNVVEMVRtTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmNWdSbnNkeC9YUFFURlJiQlIwTW50dFRrcy9UNTgwRWtnZTRhWTJRRGo1YlY3UDRaQXVZKzNTV3hhMlJzdW1oS3pDUXUyTktMc2NlTnI0SnZhWXppQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTIsXCJhZHZTZWNyZXRLZXlcIjpcIm9iQTdoNEpDVGhWMlpjNXd4ckVpaWxMYVpWWkxsWnlZRzc5NGoyUTZRdzg9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ5MDI3MzEzMTEyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBQURGNThCNTM1QjVBNDUxMzM4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MTA0OTZ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0OTAyNzMxMzExMkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIzQTY3QzIzMkQ3MTBBODlFRUM2QVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyOTEwNTAxfV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiYzhyZERHSVdUWmljZHZvaUxYME56d1wiLFwicGhvbmVJZFwiOlwiZTRiZjVhZjAtNDFmOS00ZGZjLThmOGQtOTQ5Mzg2NGFiZjNlXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLS2g5YXc2RVZUL2NwamVtZ0N3RGRxWWNLUFk9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlkyaUhBeE91OFgrM29BVjVKRE5ib1NnSkJGUT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTUxYdWJrSEVKdmg0N0FHR0FNZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIi9NWllUUFZadCtMM25mN0FoN29qcnFkZnVVd004Z2pOcEh3M252Sm5yVzQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJNVTZhM3Q2cmtKci9zdTFyQVg2YXNwbVUycmlmT0FYZkxXWDRQdExBc21Fc0sxSUN0YjJzU29PNWsvaHI3RWNTQ29DUzdSSEVUOE4wUmpRRklNUzZoQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInRBdnRUQTNUMWdyQ1RncXEySTFrc3d5dys3clUzK2x3YWtNNjJJSG5iM2N5TnQ4OUVYWlBKSnZ3WjN1VWJqVVFWOEpCK1RtOWtEbktwb0tIRlh3UGdnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ5MDI3MzEzMTEyOjdAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTMxMTgxNjIyMzQ1OTI2OjdAbGlkXCIsXCJuYW1lXCI6XCJUb3BzaG90dGHwn6qQXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0OTAyNzMxMzExMjo3QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmZ6R1dFejFXYmZpOTUzK3dJZTZJNjZuWDdsTURQSUl6YVI4TjU3eVo2MXVcIn19XSxcInBsYXRmb3JtXCI6XCJpcGhvbmVcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI5MTA0OTQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRXVOXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXVOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkxpRnhqU3BSRmtuZVRpTTFUQmE5UUpSYW4rcmRNRUtpZ3hQay9naGtjMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk5NTMwOTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI2NDUzODMyODdcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TOPSHOTTTTAA",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Satoru-MD",
  ownername:process.env.OWNER_NAME|| "Topshotta🎭,


  errorChat : process.env.ERROR_CHAT || "",  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-107532c1-fa23-44a3-8201-79f975f910b3",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
