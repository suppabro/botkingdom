const translate = require('translate-google-api')
const defaultLang = 'si'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
උදාහරන:
${usedPrefix + command} <lang> [text]
${usedPrefix + command} si your messages

සහාය දක්වන භාෂා ලැයිස්තුව: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'ඔබගෙ වාක්‍යය'

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        conn.reply(m.chat, result[0], m)
    }

}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(trss(ssanslate)?)$/i

module.exports = handler
