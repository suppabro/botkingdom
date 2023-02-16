let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('වචනයක් එවම්න 😖')
  try {
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('ඒම එකක් නැ 🙂!')
  let sell = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`
  await conn.sendBI(m.chat, sell, wm, url, [[`Next`, `${usedPrefix}${command} ${text}`]], m, {jpegThumbnail: await(await fetch(url)).buffer() })
  } catch {
    throw eror 
    }
  }
handler.help = ['image <query>']
handler.tags = ['internet']
handler.command = /^((g)?img?ge?)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
