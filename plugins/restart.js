let handler = async (m, { conn, isROwner, text }) => {
    let { spawn } = require('child_process');
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('රීස්ටාර්ට් වෙමින් පවතී')
    process.send('reset')
  } else throw '_🫢.._'
}

handler.help = ['restart']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler
