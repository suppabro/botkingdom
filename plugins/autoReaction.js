let handler = async (m, { conn, text }) => {
  
  conn.sendMessage(m.chat, {
        react: {
          text: `${pickRandom(['😈', '🥵', '😱', '🐦', '🫥', '🐤','🗿','🤨','🥴','👍','😔', '🚶‍♂','👎'])}`,
          key: m.key,
        }})
  
}

handler.customPrefix = /^(hi|alive|.aliv|cum|crot|y|f|g|adick|banh|dek|turu||yntkts|ajg|kontol|ngocok|p)$/i
handler.command = new RegExp

handler.exp = 3

module.exports = handler

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}
