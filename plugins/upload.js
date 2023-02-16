const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `ඔබට වෙනස් කිරීමට අවශ්‍ය ඡායාරූපය/වීඩියෝව *${usedPrefix}${command}* යන ශීර්ෂ පාඨය සමඟ url වෙත යවන්න හෝ මාධ්‍යයට පිළිතුරු දෙන්න`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${conn.user.name}
  
${link}

${media.length} Byte(s)
${isTele ? '(කල් ඉකුත් වීමේ දිනයක් නොමැත)' : '(නොදනී)'}`)
}
handler.help = ['tourl <media>']
handler.tags = ['tools']
handler.command = /^(upload|to(url|link))$/i

module.exports = handler
