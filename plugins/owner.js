const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/9yeWFjV.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot name : Nandhutty*

*Nandhutty V-2 COMMING SOON*

*CREATORS : Achu&Ajmal*

*Owner number : You can message me with this bot number itself*

*Our public bot group link :*  https://chat.whatsapp.com/EPJw6NwnZtUDbePOJSTF8f

*githublink       https://github.com/Nandhuz-Achu/Nandhutty*

*audio commads    https://github.com/Nandhuz-Achu/Nandhutty/tree/master/uploads*

*sticker commads  https://github.com/Nandhuz-Achu/Nandhutty/tree/master/stickers*
`}) 

}));
