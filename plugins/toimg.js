let { webp2png } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `උදාහරණය *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `විධානය සමඟ පිළිතුරු ස්ටිකරය *${usedPrefix + command}*`
  try {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  conn.sendMedia(m.chat, out, m, {jpegThumbnail: await(await fetch(out)).buffer(), caption: `• Sticker ${command} by ` + wm})
  } catch {
    throw `විධාන සහිත සජීවිකරණ ස්ටිකරවලට පිළිතුරු දෙන්න *${usedPrefix + command}*`
 }
}
handler.help = ['toimage']
handler.tags = ['tools']
handler.command = /^toima?ge?$/i

module.exports = handler
