let handler = async (m, { conn,isOwner, isROwner, text }) => {
   conn.sendTB(m.chat, 'Premium වෙත උත්ශ්‍රේණි කිරීමට අවශ්‍යද?\කරුණාකර පහත හිමිකරු අංකය අමතන්න!', wm, 'Chat Owner', `https://wa.me/${global.owner[0]}?text=හායිම්`, null, null, null, null, null, null, null, m)
}

handler.help = ['uptoprem']
handler.tags = ['main']
handler.command = /^(up(to)?prem(ium)?)$/i

module.exports = handler
