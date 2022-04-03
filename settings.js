/*
   * Create By CarlosOp
   * Contact Me on wa.me/593991398786
   * Follow https://github.com/carlospopon
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapi.xyz',
	harn: 'https://hardianto.xyz',
	xteam: 'https://api.xteam.xyz',
	ryu: 'https://api-ryubotz.herokuapp.com',	
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'c81fd00f95', // masukin apikey disini
    'https://hardianto.xyz': 'hardianto',
    'https://api.xteam.xyz': '5bd33b276d41d6b4',
    'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

// Owner
global.owner = ['593991398786']
global.ownernomer = '593991398786'
global.premium = ['593991398786','584121993515']
global.ownername = 'Carlos Op'
global.botname = 'Kitzia-Md'
global.footer = 'Kitzia-Md'
global.email = 'carlos.e.escobarmc@gmail.com'
global.ig = 'https://instagram.com/c4rlos_9e'
global.region = 'Planet Equador'

// Keperluan buttons
global.myweb = 'https://wa.me/593991398786'
global.sc = 'https://telegra.ph/file/137cc09589a28a90a7ed8.jpg'

// Wm
global.packname = '🥀KitziaBot-Md🥀'
global.author = 'WhatsApp Bot Multi-Device\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnd Premium María'

// Thumb & Image random
global.thumb = fs.readFileSync('./image/keyol.jpg')
global.pp_video = fs.readFileSync('./image/keyol.mp4')

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Listo',
    admin: 'Funciones especiales de administrador de grupo!',
    botAdmin: 'El bot debe ser administrador primero!',
    owner: 'Funciones especiales del propietario del bot',
    group: 'Funciones utilizadas solo para grupos!',
    private: 'Funciones utilizadas solo para chat privado!',
    bot: 'Funciones especiales del usuario del número de bot',
    wait: 'Cargando...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
    endGLimit: 'Su límite diario de juego ha expirado, el límite se restablecerá cada 12 horas',
}
global.limitharian = "10"
global.limitgame = "5"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
