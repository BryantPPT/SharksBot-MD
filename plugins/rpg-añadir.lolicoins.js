let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝐃𝐞𝐛𝐞𝐬 𝐝𝐞 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐫 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐥𝐚 𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐒𝐡𝐚𝐫𝐤𝐬𝐂𝐨𝐢𝐧𝐬`
if (isNaN(txt)) throw `${mg}𝐒𝐢𝐧 𝐬𝐢𝐦𝐛𝐨𝐥𝐨𝐬, 𝐬𝐨𝐥𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐧𝐮𝐦𝐞𝐫𝐨𝐬`
let sharkscoins = parseInt(txt)
let money = sharkscoins
let pjk = Math.ceil(sharkscoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝐄𝐥 𝐍𝐮𝐦𝐞𝐫𝐨 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 𝐒𝐡𝐚𝐫𝐤𝐬𝐂𝐨𝐢𝐧𝐬 𝐄𝐬 *1*`
let users = global.db.data.users
//let users = global.db.data.users[who]
users[who].money += sharkscoins
conn.reply(m.chat,  `╭━━━[ 𝐒𝐇𝐀𝐑𝐊𝐒𝐂𝐎𝐈𝐍𝐒 🪙 ]━━━⬣\n┃\n┃ღ *𝐏𝐀𝐑𝐀:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *𝐒𝐄 𝐋𝐄 𝐀𝐍̃𝐀𝐃𝐈𝐎*\n┃ღ *${sharkscoins} 𝐒𝐡𝐚𝐫𝐤𝐬𝐂𝐨𝐢𝐧𝐬* 🪙\n┃\n╰━━━━━━━━━━━━━━⬣\n\n${wm}`, m, {contextInfo: {mentionedJid: conn.parseMention(text), externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})} 
/*conn.sendHydrated(m.chat, `╭━━━[ 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🦈 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${sharkscoins} SharksCoin(s)* 🦈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/ 
handler.help = ['addgb <@user>']
handler.tags = ['sharkscoins']
handler.command = ['añadirsharkscoins', 'añadirsharks', 'añadircoins', 'darsharkscoins', 'darsharks', 'darcoins'] 
handler.group = true
handler.rowner = true
export default handler
