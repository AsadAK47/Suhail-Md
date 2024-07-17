const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Created by AK" 


global.devs = "923097982747" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923097982747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_19_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUmliY24zOWdjZ1lOTWVLSjBYUW9sbWRVbmMwRGtXWUxocnNON01vQ2ZGMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWExNZ0tZS2VSYktyWXREaXdxWU1RUVwiLFxuICBcInBob25lSWRcIjogXCI3MWMyYWU5Yi04NDljLTQ4YjUtYmI1NC0wNDAwNTEzZGQwNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA1MixcbiAgICAgIDIyMyxcbiAgICAgIDE1NCxcbiAgICAgIDQ5LFxuICAgICAgMTg1LFxuICAgICAgMTYyLFxuICAgICAgMjIyLFxuICAgICAgNjYsXG4gICAgICAyMDcsXG4gICAgICAxMzQsXG4gICAgICAyMzcsXG4gICAgICAxMjEsXG4gICAgICAxNTksXG4gICAgICAxMjIsXG4gICAgICA1MCxcbiAgICAgIDE2OCxcbiAgICAgIDUwLFxuICAgICAgNTksXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDU1LFxuICAgICAgMjQ5LFxuICAgICAgMTYwLFxuICAgICAgMTE5LFxuICAgICAgNixcbiAgICAgIDIyOCxcbiAgICAgIDE0NyxcbiAgICAgIDExMyxcbiAgICAgIDQsXG4gICAgICAxOSxcbiAgICAgIDEwMCxcbiAgICAgIDI0OCxcbiAgICAgIDEyMyxcbiAgICAgIDQsXG4gICAgICA0NSxcbiAgICAgIDEsXG4gICAgICAyMzUsXG4gICAgICAxNzIsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjdaMlBZRUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3NjA0MjcxNTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU0MDYxNzM5MjUzNzk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbm9yUWdRemZXN3RBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJ4R2c1MFVVUUJxN09lS25YRFZnaHFXSXBNNTR3OEc4RkZYZ0x6RHV2V0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMFUwSEFlUENhSkh6MEFwM0hmM3diWkxBNXQyZllzK1QvaDM3VkhtNlJPV3BZTFovQkRaaFM2TVVheC9ieDRlUytNUVlscUdDTGFyeUhiQllUNzlWQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmRwMmpBdGhINzhXc2lFcGltakF0a0ZQYTd3L3RRWSsvNlU4NFozVVdBQXY2eitjY0FLSDI2QzU4MmJSNVBlS09kMng3eFpmUVV4eHcvSGh0S1c5REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTc2MDQyNzE1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjQ2MzUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0RxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxY1dNYWM2M2VxRzFlKzdjdDRGN0hWYk9KYmZXZHc4cHRNcXNqMWpkeGtnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTI3ODI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyOTI3NzQxNjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "BY AK " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ak",
  ownername:process.env.OWNER_NAME|| "AK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AK"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
