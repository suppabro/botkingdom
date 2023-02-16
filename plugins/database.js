let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*බොට් භාවිතා කරන ගනන ${totalreg}*`
    await conn.sendBL(m.chat, kon, wm, fla + `${command}`, [['Menu', `${usedPrefix}menu`]], m)
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

module.exports = handler
