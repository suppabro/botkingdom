let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
     
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.sendB(m.chat, `
contoh:
${usedPrefix + command} OPEN
${usedPrefix + command} CLOSE
	`.trim(), wm, null, [['OPEN', '#gc 1'], ['CLOSE', '#gc 0']])
		throw false
	}
        try {
	await conn.groupSettingUpdate(m.chat, isClose)
        } catch {
         throw `ඇඩ්මින් නෙමෙ 🥱!`
   }
}
handler.help = ['grup <open/close>']
handler.tags = ['group']
handler.command = /^(gro?up|gc)$/i

//handler.botAdmin = true
handler.group = true 

module.exports = handler
