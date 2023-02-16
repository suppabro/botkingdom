let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  var time = db.data.users[m.sender].lastjoin + 86400000
  if (new Date - db.data.users[m.sender].lastjoin < 86400000) throw `Kamu sudah menggunakan limit invite bot harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '94753943957@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Link` 
  if (!code) throw `Link valid!`
  var anubot = owner[0]
  m.reply(`රැදී සිටින්න 3 තත්පර ගතවේ `)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * 0.1
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`සාර්තක විය\n\n${await conn.getName(res)}\n\nbot ස්වයංක්‍රීයව ඉන් පසු පිටවෙයි *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await conn.reply(res, `@${anubot} බායි🙂.

@${conn.user.jid.split(`@`)[0]} තත්පර 5 කින් එළියට එයි
 බායි😑
ස්තූතියි *${m.name}*`, 🙂, {
    mentions: d
     }).then(async () => {
     await delay(5000)
     }).then( async () => {
     await conn.reply(res, `🤭`, 0)
     await conn.reply(owner[0]+'@s.whatsapp.net', `*ආරාධනා!*\n\n@${m.sender.split('@')[0]} කණ්ඩායමට ${conn.user.name} වෙත ආරාධනා කර ඇත\n\n${await conn.getName(res) } \n\n${res}\n\nපණිවිඩය : ${args[0]}\n\nBot ස්වයංක්‍රීයව *${msToDate(global.db.data.chats[res].කල් ඉකුත්වී ඇත - දැන්)} * `, null, {sentions: [m.sender]})
     })
     if (!e.length) await conn.reply(owner[0]+'@s.whatsapp.net', `*ආරාධනා!*\n\n@${m.sender.split('@')[0]} කණ්ඩායමට ${conn.user.name} වෙත ආරාධනා කර ඇත\n\n${await conn.getName(res) } \n\n${res}\n\nපණිවිඩය : ${args[0]}\n\nBot ස්වයංක්‍රීයව *${msToDate(global.db.data.chats[res].කල් ඉකුත්වී ඇත - දැන්)} * `, null, {sentions: [m.sender]})
     if (!e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nbot ස්වයංක්‍රීයව ඉන් පසු පිටවෙයි *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hello Everyone👋🏻

*${conn.user.name}* යනු Node.js සමඟ ගොඩනගා ඇති WhatsApp බහු උපාංග බොට් වලින් එකකි, *${conn.user.name}* මේ දැන් ආරාධනා කළේ *${m.name}* විසිනි
 *${conn.user.name}* භාවිතා කිරීමට කරුණාකර ටයිප් කරන්න
 #මෙනු

@${conn.user.jid.split('@')[0]} *${msToDate(global.db.data.chats[res].කල් ඉකුත් වී ඇත - දැන්)}*` පසු ස්වයංක්‍රීයව පිටවෙයි
   conn.sendB(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, { බලාපොරොත්තු වන්න
         සඳහන් කරයි: 
         })
     })
  db.data.users[m.sender].lastjoin = new Date * 1
    } catch(e) {
      console.log(e)
        throw `😝`
        if (devmode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, { text:'Speed.js error\nNo: *' + m.sender.split `@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*' })
            }
        }
    }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['main']
handler.command = /^join$/i

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " දින " + hours + " පැය" + minutes + " තත්පර";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
  seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " පැය " + minutes + " තත්පර"
}

