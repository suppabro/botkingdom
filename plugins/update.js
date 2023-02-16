let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git pull https://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@https://github.com/supuna32/BOTKINGDOMV1.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    conn.sendB(m.chat, stdout.toString(), wm, 0, [[`Node Test`, `$ node test`]], m)
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^(update|uo?p?|uodate)$/i //sedia payung sebelum hujan meteor 

handler.rowner = true

module.exports = handler
