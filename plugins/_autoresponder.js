import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {

let noetiqueta = 'https://qu.ax/MKCm.webp'
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') return await this.sendFile(m.chat, noetiqueta, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'Yo que?', mediaType: 2, sourceUrl: redes.getRandom(), thumbnail: img.getRandom()}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto') return await this.sendMessage(m.chat, {text: ['*QUE YO QUE?*', 'Que?', 'Hola?'].getRandom()}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
/*let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑻𝒉𝒆 𝙎𝙝𝙖𝙧𝙠𝙨𝘽𝙤𝙩-𝙈𝘿', body: '©elrebelde', sourceUrl: `https://github.com/BryantPPT/SharksBot-MD`, thumbnail: imagen2}}})}*/
    
return !0 }
export default handler
