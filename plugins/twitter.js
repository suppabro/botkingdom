const { twitter } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `මෙම විධානය වන්නේ සබැඳිය සමඟ twitter මාධ්‍ය බාගත කිරීමයි*\n\nඋදාහරණ*:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*වැරදි සබැඳියක්!  සබැඳිය සමඟ ට්විටර් මාධ්‍ය බාගත කිරීමට මෙම විධානය*\n\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    m.reply(pesan)
    for (let { url } of json.data)
    conn.sendMedia(m.chat, url, m, {jpegThumbnail: await(await fetch(thumbx)).buffer(), fileLength: fsx, caption: wm})
 })
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twit(ter)?(dl)?(downloa?d(er)?)?)$/i

handler.limit = true

module.exports = handler
