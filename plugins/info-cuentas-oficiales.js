let media = 'https://telegra.ph/file/d8123357169afc1811d8e.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』

𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (SharksBot-MD)
> *${bot}*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
『 𝗚𝗶𝘁𝗵𝘂𝗯 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 』   
> *${md}* 

『  𝗧𝗶𝗸𝗧𝗼𝗸 』   
> *${tiktok}* 

『  𝗬𝗼𝘂𝘁𝘂𝗯𝗲 』  
> *${yt}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

${wm}`
await conn.sendFile(m.chat, media, 'Sharks.mp4', str, fkontak)}
handler.command = /^cuentasoficiales|cuentas|cuentaofc$/i
handler.register = true
export default handler
