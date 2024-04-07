import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = 'https://qu.ax/xbeU.mp5..'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `『 ${wm} 』

*Hola ${taguser}*

*> 🦈 Creador:*  BryantGvng
*> 🦈 Numero del creador:* ${asistencia}
*> 🦈 Numero del bot ofc:* ${bot}
*> 🦈 Tiempos activos:* ${uptime}
*> 🦈 Usuarios:* ${Object.keys(global.db.data.users).length}
*> 🦈 Registrado:* ${rtotalreg} de ${totalreg} ${(conn.user.jid == global.conn.user.jid ? '' : `\n🦈 *Soy un sub bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}

◉ INFO DEL USUARIO
> 🦈 *🙌 Registrados:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
> 🦈 *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}
> 🦈 *🔰 Mi estado:* ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
> 🦈 *🎖️ Nivel:* ${level}
> 🦈 *💎 Diamantes:* ${limit}
> 🦈 *👾 SharksCoins:* ${money}
> 🦈 *🪙 Tokens:* ${joincount}
> 🦈 *🧰 Experiencia:* ${exp}
> 🦈 *⚓ Rango:* ${role}
${readMore}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

 『 INFO DEL BOT 』
 
> 💫 _${usedPrefix}infobot_
> 💫 _${usedPrefix}menu2_
> 💫 _${usedPrefix}estado_
> 💫 _${usedPrefix}donar_
> 💫 _${usedPrefix}reglas_
> 💫 _${usedPrefix}ping_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`JUEGOS\` 』
  
> 🕹 _${usedPrefix}mates_
> 🕹️ _${usedPrefix}ppt_
> 🕹 _${usedPrefix}prostituto *@tag*_
> 🕹️ _${usedPrefix}prostituta *@tag*_
> 🕹️ _${usedPrefix}gay2 *@tag*_
> 🕹️ _${usedPrefix}lesbiana *@tag*_
> 🕹 _${usedPrefix}pajero *@tag*_
> 🕹 _${usedPrefix}pajera *@tag*_
> 🕹️ _${usedPrefix}puto *@tag*_
> 🕹️ _${usedPrefix}puta *@tag*_
> 🕹️ _${usedPrefix}manco *@tag*_
> 🕹️ _${usedPrefix}manca *@tag*_
> 🕹️ _${usedPrefix}rata *@tag*_
> 🕹️ _${usedPrefix}love *@tag*_
> 🕹️ _${usedPrefix}doxear *@tag*_
> 🕹 _${usedPrefix}pregunta_
> 🕹️ _${usedPrefix}suitpvp *<@tag>*_
> 🕹️ _${usedPrefix}slot_
> 🕹️ _${usedPrefix}ttt_
> 🕹️ _${usedPrefix}delttt_
> 🕹️ _${usedPrefix}simi_
> 🕹️ _${usedPrefix}top_
> 🕹️ _${usedPrefix}topotakus_
> 🕹️️ _${usedPrefix}top10gays_
> 🕹️️ _${usedPrefix}toplind@s_
> 🕹️️ _${usedPrefix}topput@s_
> 🕹️️ _${usedPrefix}toppajer@s_
> 🕹️️ _${usedPrefix}topotakus_
> 🕹️️ _${usedPrefix}topintegrantes_
> 🕹️️ _${usedPrefix}toplagrasa_
> 🕹️️ _${usedPrefix}toppanafrescos_
> 🕹️ _${usedPrefix}topshiposters_
> 🕹️️ _${usedPrefix}toppajeros_
> 🕹️️ _${usedPrefix}toplind@s_
> 🕹️️ _${usedPrefix}topfamosos_
> 🕹️️ _${usedPrefix}topsoltero
> 🕹️️ _${usedPrefix}topparejas_
> 🕹️ _${usedPrefix}formarpareja_
> 🕹️ _${usedPrefix}verdad_
> 🕹️ _${usedPrefix}reto_
> 🕹️ _${usedPrefix}cancion_
> 🕹️ _${usedPrefix}pista_

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
  『 \`💞 𝙋𝙖𝙧𝙚𝙟𝙖𝙨\` 』
  
> ❤️➺ _${usedPrefix}listaparejas_
> ❤️➺ _${usedPrefix}mipareja_
> ❤️➺ _${usedPrefix}pareja *@tag*_
> ❤️➺ _${usedPrefix}aceptar *@tag*_
> ❤️➺ _${usedPrefix}rechazar *@tag*_
> ❤️➺ _${usedPrefix}terminar *@tag*_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`ACTIVA O DESACTIVAR\` 』
  
> ☑️ _${usedPrefix}enable_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`SER PREMIUM\` 』
  
> 🎟️ _${usedPrefix}listapremium_
> 🎟️ _${usedPrefix}pase premium_
> 🎟️ _${usedPrefix}pass premium_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`DESCARGAS\` 』
  
> 📥 _${usedPrefix}play_
> 📥 _${usedPrefix}play.1_
> 📥 _${usedPrefix}play.2_
> 📥 _${usedPrefix}playdoc_
> 📥 _${usedPrefix}playlist_
> 📥 _${usedPrefix}spotify_
> 📥 _${usedPrefix}tiktok_
> 📥 _${usedPrefix}instagram_
> 📥 _${usedPrefix}mediafire_
> 📥 _${usedPrefix}instagram_
> 📥 _${usedPrefix}gitclone_
> 📥 _${usedPrefix}gdrive_
> 📥 _${usedPrefix}xnxxdl_
> 📥 _${usedPrefix}xvideosdl_
> 📥 _${usedPrefix}twitter_
> 📥 _${usedPrefix}fb_
> 📥 _${usedPrefix}ytmp3_
> 📥 _${usedPrefix}ytmp4_
> 📥 _${usedPrefix}ytmp3doc_
> 📥 _${usedPrefix}ytmp4doc_
> 📥 _${usedPrefix}stickerpack_
> 📥 _${usedPrefix}stickerly_
> 📥 _${usedPrefix}imagen_
> 📥 _${usedPrefix}pinterest_
> 📥 _${usedPrefix}wallpaper_
> 📥 _${usedPrefix}pptiktok_
> 📥 _${usedPrefix}igstalk_
> 📥 _${usedPrefix}igstory_
> 📥 _${usedPrefix}tiktokstalk_
> 📥 _${usedPrefix}apk_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`GRUPOS\` 』
  
> 💎 _${usedPrefix}add_
> 💎 _${usedPrefix}kick *@tag*_
> 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
> 💎 _${usedPrefix}promote *<@tag>*_
> 💎 _${usedPrefix}demote *<@tag>*_
> 💎 _${usedPrefix}admins_
> 💎 _${usedPrefix}infogroup_
> 💎 _${usedPrefix}resetlink_
> 💎 _${usedPrefix}link_
> 💎 _${usedPrefix}setname_
> 💎 _${usedPrefix}tagall_
> 💎 _${usedPrefix}setdesc_
> 💎 _${usedPrefix}invocar_
> 💎 _${usedPrefix}setwelcome_
> 💎 _${usedPrefix}setbye_
> 💎 _${usedPrefix}hidetag_
> 💎 _${usedPrefix}warn *<@tag>*_
> 💎 _${usedPrefix}unwarn *<@tag>*_
> 💎 _${usedPrefix}listwarn_
> 💎 _${usedPrefix}fantasmas_
> 💎 _${usedPrefix}setpp_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  『 \`CONVERTIDORES\` 』
  
> 🧧 _${usedPrefix}togifaud_
> 🧧 _${usedPrefix}robar_
> 🧧 _${usedPrefix}wm_
> 🧧 _${usedPrefix}toimg_
> 🧧 _${usedPrefix}tomp3_
> 🧧 _${usedPrefix}tomp3_
> 🧧 _${usedPrefix}toptt_
> 🧧 _${usedPrefix}tovideo_
> 🧧 _${usedPrefix}tourl_
> 🧧 _${usedPrefix}tts_

─────────────

  『 \`EFECTOS Y LOGOS\` 』
  
> 🖍️ _${usedPrefix}phmaker_
> 🖍️ _${usedPrefix}logos_
> 🖍️ _${usedPrefix}logochristmas_
> 🖍️ _${usedPrefix}logocorazon_
> 🖍️ _${usedPrefix}ytcomment_
> 🖍️ _${usedPrefix}hornycard_
> 🖍️ _${usedPrefix}simpcard_
> 🖍️ _${usedPrefix}lolice_
> 🖍️ _${usedPrefix}itssostupid_
> 🖍️ _${usedPrefix}pixelar_
> 🖍️ _${usedPrefix}blur_

─────────────

  『 \`FRASES Y TEXTOS\` 』
  
> 🥀 _${usedPrefix}piropo_
> 🥀 _${usedPrefix}consejo_
> 🥀 _${usedPrefix}fraseromantica_

─────────────

  『 \`COMANDO +18\` 』
  
> 🔞 _${usedPrefix}hornymenu_
> *Usar bajo sus responsabilidad Nota : no sea pajero*

─────────────

  『 \`EFECTOS PARA NOTAS DE VOZ/AUDIOS\` 』 
  
> 🎤 _${usedPrefix}audioefectomenu_

─────────────

  『 \`AUDIOS\` 』
  
> 🔊 _${usedPrefix}menu2_
> 🔊 _${usedPrefix}audios_

─────────────

  『 \`CHATS ANONIMO\` 』
  
> 📳 _${usedPrefix}start_
> 📳 _${usedPrefix}next_
> 📳 _${usedPrefix}leave_

─────────────

  『 \`BUSCADORES\` 』
  
> 🔍 _${usedPrefix}stickersearch_
> 🔍 _${usedPrefix}spotifysearch_
> 🔍 _${usedPrefix}xnxxsearch_
> 🔍 _${usedPrefix}animeinfo_
> 🔍 _${usedPrefix}google_
> 🔍 _${usedPrefix}ia_
> 🔍 _${usedPrefix}chatgpt_
> 🔍 _${usedPrefix}dalle_
> 🔍 _${usedPrefix}letra_
> 🔍 _${usedPrefix}wikipedia_
> 🔍 _${usedPrefix}ytsearch_

─────────────

  『 \`RPG - LIMITES - ECONÓMIAS\` 』
  
> *ᶜᵒᵐᵖʳᵃ, ᴬᵈᵠᵘᶦᵉʳᵉ ᴿᵉᶜᵘᵉʳˢᵒˢ ᴹᵉʲᵒʳᵃ ᵀᵘ́ ᴺᶦᵛᵉˡ ʸ ᴿᵃⁿᵍᵒ!!*
> 💵 _${usedPrefix}verificar_
> 💵 _${usedPrefix}unreg *<numero de serie>*_
> 💵 _${usedPrefix}claim_
> 💵 _${usedPrefix}rob
> 💵 _${usedPrefix}crime
> 💵 _${usedPrefix}lb_
> 💵 _${usedPrefix}levelup_
> 💵 _${usedPrefix}perfil_
> 💵 _${usedPrefix}minar_
> 💵 _${usedPrefix}buy_
> 💵 _${usedPrefix}balance_
> 💵 _${usedPrefix}myns_
> 💵 _${usedPrefix}work_
> 💵 _${usedPrefix}buyall_
> 💵 _${usedPrefix}top | lb | leaderboard_
> 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_

─────────────

  『 \`STICKERS\` 』
  
> 👽 _${usedPrefix}sticker_
> 👽 _${usedPrefix}s_
> 👽 _${usedPrefix}sfull_
> 👽 _${usedPrefix}emojimix_
> 👽 _${usedPrefix}semoji_
> 👽 _${usedPrefix}attp_
> 👽 _${usedPrefix}pat_
> 👽 _${usedPrefix}slap_
> 👽 _${usedPrefix}kiss_
> 👽 _${usedPrefix}dado_
> 👽 _${usedPrefix}wm_
> 👽 _${usedPrefix}stickermarker_
> 👽 _${usedPrefix}stickerfilter_

─────────────

  『 \`PROPIETARIO DEL BOT\` 』
  
> 👑 _${usedPrefix}setprefix *<prefijo>*_
> 👑 _${usedPrefix}autoadmin_
> 👑 _${usedPrefix}leavegc_
> 👑 _${usedPrefix}blocklist_
> 👑 _${usedPrefix}block *<@tag>*_
> 👑 _${usedPrefix}unblock *<@tag>_
> 👑 _${usedPrefix}enable *restrict*_
> 👑 _${usedPrefix}disable *restrict*_
> 👑 _${usedPrefix}banchat_
> 👑 _${usedPrefix}unbanchat_
> 👑 _${usedPrefix}banuser *<@tag>*_
> 👑 _${usedPrefix}unbanuser *<@tag>*_
> 👑 _${usedPrefix}dardiamantes *<@tag>*_
> 👑 _${usedPrefix}añadirxp *<@tag>*_
> 👑 _${usedPrefix}banuser *<@tag>*_
> 👑 _${usedPrefix}bc_
> 👑 _${usedPrefix}bcchats_
> 👑 _${usedPrefix}bcgc_
> 👑 _${usedPrefix}bcbot_
> 👑 _${usedPrefix}cleartpm_
> 👑 _${usedPrefix}restart_
> 👑 _${usedPrefix}update_
> 👑 _${usedPrefix}banlist_
> 👑 _${usedPrefix}addprem *<@tag>*_
> 👑 _${usedPrefix}delprem *<@tag>*_
> 👑 _${usedPrefix}listprem_
> 👑 _${usedPrefix}listcmd_
> 👑 _${usedPrefix}setppbot_
> 👑 _${usedPrefix}addcmd_
> 👑 _${usedPrefix}delcmd_`.trim()
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp5..', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
await conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'By: BryantGvng', previewType: 0, thumbnail: imagen3, sourceUrl: [md, yt, tiktok].getRandom()}}})
	  
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
