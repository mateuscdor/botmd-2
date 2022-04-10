/*
   * Create By CarlosOp
   * Contact Me on wa.me/593991398786
   * Follow https://github.com/carlospopon
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Menunya
const  { ind } = require(`./language`)
lang = ind // Menunya

module.exports = yol = async (yol, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await yol.decodeJid(yol.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await yol.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!yol.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            yol.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await yol.setStatus(`${yol.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nSe te ha detectado enviando un enlace de grupo, lo sentimos, serás expulsado !`)
        if (!isBotAdmins) return m.reply(`Eh bot no administrador T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await yol.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Uh, lo siento, no sucedió, porque enviaste el enlace a este grupo.`)
        if (isAdmins) return m.reply(`Ehh lo siento administrador`)
        if (isCreator) return m.reply(`Ehh lo siento eres el dueño de mi bot`)
        yol.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: yol.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, yol.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        yol.ev.emit('messages.upsert', msg)
        }
	    
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cuestionario de Matemáticas  🎮\n\nRespuesta correcta 🎉\n\nQuiero jugar de nuevo? Enviar ${prefix}math modo`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Respuesta incorrecta!*')
        }

//TicTacToe

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|aceptar|si|bueno?|rechazar|No|luego|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rechazar|No|luego|no|ga(k.)?bisa)/i.test(m.text)) {
	    yol.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechaza el pvp, el pvp se cancela`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    yol.sendText(m.chat, `El pvp ha sido enviado al chat.

@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}

Por favor elige en el chat respectivo"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) yol.sendText(roof.p, `Por favor seleccione \n\npiedra🗿\npapel📄\ntijera✂️`, m)
	    if (!roof.pilih2) yol.sendText(roof.p2, `Por favor seleccione \n\npiedra🗿\npapel📄\ntijera✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) yol.sendText(m.chat, `Ambos jugadores no quieren jugar.,\npvp cancelado`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    yol.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} no elijio en el pvp, fin del juego`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tijera/i
	    let b = /piedra/i
	    let k = /papel/i
	    let reg = /^(tijera|piedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih2) yol.sendText(roof.p2, '_El oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih) yol.sendText(roof.p, '_El oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    yol.sendText(roof.asal, `_*Resultados del pvp*_${tie ? '\nEMPATE' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganó \n` : ` Perdió \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganó \n` : ` Perdió \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
no lo etiquetes!
Él está AFK ${reason ? 'con razón ' + reason : 'Sin razón'}
Durante ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
para AFK${user.afkReason ? ' después ' + user.afkReason : ''}
Durante ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Posee Afk${text ? ': ' + text : ''}`)
            }
            break	
            case 'suitpvp': case 'suit': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Completa tu traje anterior`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`no puedo jugar conmigo mismo !`)
            if (!m.mentionedJid[0]) return m.reply(`_a quien quieres desafiar?_\nEtiqueta a la persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `La persona a la que estás desafiando está jugando con alguien más. :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} desafiante @${m.mentionedJid[0].split`@`[0]} jugar pvp

Por favor @${m.mentionedJid[0].split`@`[0]} escribir aceptar/no`
            this.suit[id] = {
            chat: await yol.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) yol.sendText(m.chat, `_Tiempo de espera del pvp_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    yol.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    yol.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    yol.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    yol.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    yol.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    yol.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    yol.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'kuismath': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Todavía hay sesiones sin terminar!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Modo: ${Object.keys(modes).join(' | ')}\nEjemplos de uso: ${prefix}math medio`
                let result = await genMath(text.toLowerCase())
                yol.sendText(m.chat, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\n\nHora: ${(result.waktu / 1000).toFixed(2)} segundo`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responder: " + result.jawaban)
                    m.reply("Tiempo de espera acabado\nRespuesta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'pareja': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫tu pareja es

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'pareja', buttonText: { displayText: 'mi alma gemela' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, yol.user.name, m, {mentions: ments})
            }
            break
            case 'amigos': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `creo que pueden ser muy buenos amigos ekisde🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'amigos', buttonText: { displayText: 'crear amigos' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, yol.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Introduce el enlace del grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await yol.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await yol.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Ejemplo : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif se ha cambiado con éxito a\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break
	case 'kick': {
        if (!text) throw 'menciona a quien deseas eliminar'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
        if (!text) throw 'menciona u/o coloca el numero de quien deseas agregar'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
        if (!text) throw 'a quien deseas promover'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
        if (!text) throw 'a quien rebajamos :3'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'el texto ?'
                await yol.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'y el texto ?'
                await yol.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                await yol.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                await yol.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
let teks = ` *👥 Tag All*\n\n`
                for (let mem of participants) {
                teks += `➲ ${q ? q : ''} @${mem.id.split('@')[0]}\n`
                }
                yol.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            yol.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Ingrese el texto de la consulta!'
                let anu = await styletext(text)
                let teks = `Estilo de texto de ${text}\n\n`
                for (let i of anu) {
                    teks += ` *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'encuesta': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Todavía hay votos en este chat.!_\n\n*${prefix}hapusvote* - para borrar votos`
            if (!text) throw `Ingrese el motivo del voto, ejemplo: *${prefix + command} @Carlos debería ser admin?*`
            m.reply(`Comienza la votación!\n\n*${prefix}votopositivo* - por Si\n*${prefix}votonegativo* - por no\n*${prefix}checkvoto* - para comprobar el voto\n*${prefix}deletevoto* - para borrar votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 ENCUESTA 」*

*RAZÓN:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevoto* - para borrar votos`
let buttonsVote = [
  {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'VOTAR SI'}, type: 1},
  {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'VOTAR NO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            yol.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'votopositivo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsUpvote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            yol.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'votonegativo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsDevote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            yol.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvoto':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
teks_vote = `*「 ENCUESTA 」*

*Razón:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos


©${yol.user.id}
`
yol.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevoto': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            delete vote[m.chat]
            m.reply('Eliminar con éxito la sesión de votación en este grupo')
	    }
            break
               case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await yol.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo cerrado exitoso`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await yol.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`grupo abierto exitoso`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'grupo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Modo del grupo?`, yol.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await yol.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Información del grupo abierta con éxito para todos`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await yol.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Cerrado con éxito el Editar información del grupo`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Escoge lo que deseas`, yol.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Anteriormente activo`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antienlace activo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Anteriormente inactivo`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antienlace inactivo !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Modo de Antilink`, yol.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Anteriormente activo`)
                db.data.chats[m.chat].mute = true
                m.reply(`${yol.user.name} ha sido silenciado en este grupo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Anteriormente inactivo`)
                db.data.chats[m.chat].mute = false
                m.reply(`${yol.user.name} ha sido desactivado en este grupo !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Mute Bot`, yol.user.name, m)
                }
             }
             break
            case 'linkgrupo': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await yol.groupInviteCode(m.chat)
                yol.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Ingrese los parametros de habilitar/deshabilitar'
                if (args[0] === 'habilitar') {
                    await yol.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'deshabilitar') {
                    await yol.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'solo a mensajes enviados por mi!'
                yol.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `y el texto?\n\nEjemplo : ${prefix + command} habra cambios`
                let getGroups = await yol.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`emicion enviada a ${anu.length} Chat en grupo, enviado en ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script bot',
                                    url: 'https://telegra.ph/file/137cc09589a28a90a7ed8.jpg'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Numero del Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Estado del Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Vcard del Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Ping and Runtine',
                                    id: 'ping'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      yol.send5ButImg(i, txt, yol.user.name, global.thumb, btn)
                    }
                m.reply(`Envío exitoso de transmisión a ${anu.length} Grupos`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `y el texto?\n\nEjemplo : ${prefix + command} Prueba`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`transmicion enviada a ${anu.length} Chat\nenviado en ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script bot',
                                    url: 'https://telegra.ph/file/137cc09589a28a90a7ed8.jpg'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Numero del Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Estado del Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Vcard del Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Ping and Runtime',
                                    id: 'ping'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      yol.send5ButImg(yoi, txt, yol.user.name, global.thumb, btn)
		}
		m.reply(' Broadcast Enviada')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Hora :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Estado :* ${read ? 'lo leyó' : 'Enviado'}\n\n`
                }
                yol.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'quoted': {
		if (!m.quoted) return m.reply('responde a un mensaje!!')
		let wokwol = await yol.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('El mensaje al que respondió no contiene una respuesta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LISTA DE CHAT PERSONAL*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nombre :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 yol.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *CHAT DE GRUPOS**\n\nTotal grupos : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await yol.groupMetadata(i)
                     teks += `⬡ *Nombre :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Hecho :* ${moment(metadata.creation * 1000).tz('America/Guayaquil').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Miembros :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 yol.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    yol.sendText(m.chat, 'Lista Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Responder video/imagen con cmd ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await yol.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo 10 segundos!')
                let media = await quoted.download()
                let encmedia = await yol.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Enviar imagen/video con cmd ${prefix + command}\nDuracion Video 1-9 segundos`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder texto con título ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder texto con título ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
case 'simi':
let teks = args.join(' ');
let anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/simi?text=${teks}&apikey=ConfuMods`)
let res = anu.result;
m.reply(res)
break
            case 'emojimix': {
	        if (!text) throw `Ejemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await yol.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Imagen'
                if (!/webp/.test(mime)) throw `responde a img con cmd *${prefix + command}*`
                m.reply(mess.wait)
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    yol.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply sticker en movimiento'
                if (!/webp/.test(mime)) throw `sticker en movimiento con el cmd *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yol.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envíe/responda el video/audio que desea usar como audio con el cmd ${prefix + command}`
            if (!quoted) throw `Envíe/responda el video/audio que desea usar como audio con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yol.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            if (!quoted) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yol.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${yol.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responder video/audio que desea ser VN con el comando ${prefix + command}`
            if (!quoted) throw `Responder video/audio que desea ser VN con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            yol.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `responde sticker con el comando *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yol.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
	    if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
	    if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await yol.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    yol.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case 'google': {
                if (!text) throw `Ejemplo : ${prefix + command} f`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Titulo* : ${g.title}\n`
                teks += ` *Descripcion* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Ejemplo : ${prefix + command} cocacola`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *consulra* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} odiame`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
 Titulo : ${anu.title}
 Ext : Search
 ID : ${anu.videoId}
 Duracion : ${anu.timestamp}
 Viewers : ${anu.views}
 Subido hace : ${anu.ago}
 Autor : ${anu.author.name}
 Canal : ${anu.author.url}
 Descripcion : ${anu.description}
 Url : ${anu.url}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                yol.sendImage(m.chat, media.thumb, ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolucion : ${args[1] || '128kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolucion : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'play2': case 'ytplay2': {
                if (!text) throw `Ejemplo : ${prefix + command} rebeldía`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
🔮 TITULO : ${anu.title}
🔮 EXT : Search
🔮 ID : ${anu.videoId}
🔮 DURACION : ${anu.timestamp}
🔮 VIEWS : ${anu.views}
🔮 FECHA DE SUBIDA : ${anu.ago}
🔮 AUTOR : ${anu.author.name}
🔮 CANAL : ${anu.author.url}
🔮 DESCRIPCIÓN : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   yol.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Reproduciendo: ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YOUTUBE',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MUSICA',
                                    id: `mp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIDEO',
                                    id: `mp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'mp3': case 'ytaudio2': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `ejemplo : ${prefix + command} https://youtu.be/9lfFspVTRtA 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('El tamaño del audio es demasiado grande '+util.format(media))
                yol.sendImage(m.chat, media.thumb, `🟡 Titulo : ${media.title}\n🎀 Tamaño : ${media.filesizeF}\n📡 Url : ${isUrl(text)}\n📜 Ext : MP3\n📑 Resolución : ${args[1] || '320kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'mp4': case 'ytvideo2': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtu.be/9lfFspVTRtA 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('El tamaño del video es demasiado grande '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 Titulo : ${media.title}\n👜 Tamaño : ${media.filesizeF}\n🌼 Url : ${isUrl(text)}\n🌍 Ext : MP3\n🔮 Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply mensaje')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de los bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Archivo por encima del límite '+util.format(media))
                yol.sendImage(m.chat, media.thumb, ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolucion : ${args[1] || '128kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply mensaje')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de los bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Archivo por encima del límite '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolucion: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                yol.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('riykey', '/api/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break
            case 'avatar': {
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('bri', '/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break
            case 'smug': {
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: 'https://hardianto.xyz/api/anime/random?sfw=smug&apikey=hardianto' }, caption: 'para que esta imagen se torne en movimiento conviertela a sticker😼\nRandom ' + command }, { quoted: m })
            }
            break
            case 'imggif': {
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: 'https://hardianto.xyz/api/anime/random?sfw=nekoGif&apikey=hardianto' }, caption: 'para que esta imagen se torne en movimiento conviertela a sticker😼\nRandom ' + command }, { quoted: m })
            }
            break
	    case 'imgpareja': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                yol.sendMessage(m.chat, { image: { url: random.male }, caption: `pareja hombre` }, { quoted: m })
                yol.sendMessage(m.chat, { image: { url: random.female }, caption: `pareja mujer` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'nekooo': case 'nekoo': {
                m.reply(mess.wait)
            let buttons = [
                    {buttonId: `nekoo`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=neko&apikey=hardianto' },
                    caption: ` Random neko`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'foxgirl': {
                m.reply(mess.wait)
            let buttons = [
                    {buttonId: `foxgirl`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=foxGirl&apikey=hardianto' },
                    caption: ` Random foxgirl`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gato': case 'cat': {
                m.reply(mess.wait)
            let buttons = [
                    {buttonId: `gato`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=meow&apikey=hardianto' },
                    caption: ` Random gato`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper2': case 'wallpaper-anime': {
                m.reply(mess.wait)
            let buttons = [
                    {buttonId: `wallpaper2`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=wallpaper&apikey=hardianto' },
                    caption: ` Random wpp`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
if (text.includes('|')) return m.reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
if (!/image/.test(mime)) return m.reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
m.reply(mess.wait)
mee = await yol.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await yol.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'baka': case 'bakaa': {
                m.reply(mess.wait)
            let buttons = [
                    {buttonId: `baka`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=baka&apikey=hardianto' },
                    caption: ` Random baka`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` Titulo : ${result.title}\n Categoria : ${result.type}\n Detalles : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Titulo : ${result.title}\n Fuente : ${result.source}\n Media Url : ${result.image}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Ejemplo : ${prefix + command} texto`
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('riykey', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Sin texto de consulta'
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('riykey', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Sin texto de consulta'
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('riykey', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case '3d-effect': case '1917-style': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dluxury': case '3dlove': case '3dgolden': case '3dgradient': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3dscifi': case '3dtext-effect': case '3dunderwater': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'azzenka-league-of-kings':  case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effect':  case 'circuit': case 'dark-gold-metal': case 'color-fireworks': case 'cool-metal': case 'decorated-cookie': case 'deluxe-gold': case 'dinamo': case 'deluxe-silver': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'firework':  case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-effect2': case 'galaxy-effect': case 'galaxy-angel': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-fox': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'graffiti-color': case 'graffiti-text3': case 'graffiti-text5': case 'graffiti-text8': case 'graffiti-text4': case 'heart-birthday': case 'hanzo-overwatch': case 'greenhorror': case 'halloween-fire': case 'green-brush': case 'hero3-crossfire': case 'heart-cups': case 'holographic': case 'light-text':  case 'lend-text': case 'ledtext': case 'layeredtext': case 'lol-caitlyn': case 'lol-ahri': case 'logo-galaxy': case 'lol-fizz': case 'lol-ezreal-and-shen': case 'lol-fiora': case 'lol-draven': case 'lol-jinx': case 'lol-kalista': case 'lol-khazix': case 'lol-kogmaw': case 'lol-leesin': case 'lol-lux': case 'lol-master-yi': case 'lol-miss-fortune': case 'lol-nidalee': case 'lol-quinn': case 'lol-sona': case 'lol-riven': case 'lol-talon': case 'lol-thresh': case 'lol-vayne': case 'machines-effect': case 'lol-yasuo': case 'lol-zed': case 'lol-wukong': case 'magic-text': case 'mei-overwatch': case 'matrix-text': case 'magmatext': case 'metal-lion-2': case 'metal-headshot': case 'metal-avenger': case 'metal-real-madrid': case 'metal-star': case 'metal-superman': case 'metal-text-effect': case 'metallic-letter': case 'metalic': case 'metal-wolf-2': case 'mganga-league-of-kings': case 'miniontext': case 'modern-gold-3': case 'modern-gold-4': case 'modern-gold-5-pro': case 'modern-gold-green': case 'modern-gold-purple': case 'modern-gold-red': case 'modern-gold-sliver': case 'modern-goldred': case 'neon': case 'neon-2': case 'neon-brightblue': case 'neon-effects': case 'neon-light-galaxy': case 'neon-satin': case 'neondevil': case 'neonlight': case 'neontext-light': case 'paper-cut': case 'paperart': case 'rainbow-effect': case 'reaper-overwatch': case 'red-birthdaycake': case 'redhot-metal': case 'resht-league-of-kings': case 'science': case 'sfg-crossfire': case 'sketch': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                m.reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('vio', '/api/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'y el link?!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► con marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Descargando desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 5
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Ingrese el enlace de la consulta!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Descargado desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 5
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Ingrese el enlace de la consulta!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► con marca de agua'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Descargar desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await yol.sendMessage(m.chat, buttonMessage, { quoted: m })
                yol.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
        case 'ringtone': {
		if (!text) throw `Ejemplo : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		yol.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
                    case 'bug': case 'report': {
                    	if(!text) throw `Introduzca el ejemplo de error\n\n${command} : Menu Erroneo `
                    	yol.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
m.reply(`Reportado con éxito al propietario\n\nAsegúrese de que el error sea válido, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break 
case 'teste': case 'test': case 'robot': case 'kitziabot': case 'kitzia':{
                respon = `Hola ${pushname}
Estoy activo🙈 no creo que me encuentres inactivo bro\nme active hace ${runtime(process.uptime())}💘`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `KITZIA BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '❤=AND FOLLOW ME',
                                    url: 'https://vm.tiktok.com/ZMLCwfham/'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'CANAL YOUTUBE',
                                    url: 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MI MENU',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'SOBRE MI',
                                    id: `${prefix}infobot`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'menu': case 'lismenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hola ${pushname}`,
                    description: `Soy una bot de WhatsApp con funciones geniales que te ayudaran!\n• Fecha del servidor : ${moment.tz('America/Guayaquil').format('DD/MM/YY')}\nsi encuentras errores y bugs no dudes en reportarlos usando ${prefix}bug *texto*`,
                    buttonText: "KITZIA BOT MENU",
                    footerText: "Kitzia BOT INC 2022",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "COMANDOS DE GRUPO",
								"rows": [
									{
										"title": "MENU GRUPO",
										"description": "mostrar funciones de grupos",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "KITZIA INC 2022 ",
								"rows": [
									{
										"title": "ALLMENU CMD",
										"description": "mostrar el menú del bot completo!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "MENU DESCARGAD",
										"description": "mostrar funciones de descarga",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "SEARCH MENU",
										"description": "menu de funciones para buscar en la web!",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "ANIME MENU",
										"description": "menu de anime random",
										"rowId": `${prefix}menuanime`
										},
										{
											"title": "MENU VARIADO",
										"description": "menu de funcionds variadas",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "MENU DE CONVERSIÓN",
										"description": "mostrar menu para convertir stickers",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "MENU LOGOS",
										"description": "menu de logos Textpro",
										"rowId": `${prefix}logomenu`
										},
										{
											"title": "DATABASE MENU",
										"description": "comandos de la database",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "MODIFICADORES DE AUDIO",
										"description": "mostrar funciones para modificar audios",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "MENU UTIL PARA EL BOT",
								"rows": [
									{
										"title": "MAIN MENU!",
										"description": "menú principal para uso del owner",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "QUE FUNCION CUMPLO SIENDO BOT?",
								"rows": [
									{
										"title": "TU INFORMACIÓN",
										"description": "Aqui te muestro mi info, que soy y que funciones cumplo",
										"rowId": `${prefix}infobot`
									}
								]
							},
							{
								"title": "MENU PARA EL CREADOR",
								"rows": [
									{
										"title": "MENU OWNER",
										"description": "menú del creador",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "CREDITOS ESPECIALES",
								"rows": [
									{
										"title": "CreditosBots",
										"description": "Agradecimiento general a creadores !!",
										"rowId": `${prefix}creditos`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
		   case 'bass': case 'blown': case 'deep': case 'saturado': case 'fast': case 'fat': case 'nightcore': case 'reversa': case 'robot': case 'lento': case 'suave': case 'ardilla':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/saturado/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reversa/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                yol.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda al audio que desea cambiar con el título *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'responde al mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `para que comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para cambiar este comando de etiqueta'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`listo!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `sin cmds`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para borrar este comando de pegatina'              
                delete global.db.data.sticker[hash]
                m.reply(`listo!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista cmd*
Info: *bold* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                yol.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash no encontrado en la base de datos'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('listo!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Mensaje de respuesta que desea guardar en la base de datos'
                if (!text) throw `Ejemplo : ${prefix + command} nombre del archivo`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' ha sido registrado en la lista de mensajes`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}

Ver lista de mensajes con ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre del archivo\n\nVer lista de mensajes con ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no registrado en la lista de mensajes`
                yol.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LISTA DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' no aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' de la lista de mensajes`)
            }
	    break
            case 'public': {
                if (!isCreator) throw mess.owner
                yol.public = true
                m.reply('Cambio exitoso al uso público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                yol.public = false
                m.reply('Cambio exitoso al autouso')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\ntiempo activo : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria usada_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usado_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                yol.sendContact(m.chat, global.owner, m)
            }
            break
case 'infobot':
await yol.send5ButImg(from, `Hola ${pushname} 🐦\n\nSoy ${botname}, soy un bot de WhatsApp Multi-Device Beta, estoy inspirada en una inteligencia artificial para ayuda\nSi encuentra algún tipo de error o bug, comprenda primero que estoy en version beta, tendre muchísimos errores :(, informe a mi propietario para que se solucione de inmediato\nmis funciones principales son\n\n descargar musica usando el comando\n${prefix}play nombre musica\n${prefix}play2 nombre de la musica\n\npuedo crear stickers y hacer meme stickers con\n${prefix}sticker (mencionando imagen}\n${prefix}smeme (texto) mencionando imagen\n\ny mucho mas que puedes descubrir asistiendo en el menu!!\n\n• Version Qr : *Baileys-MD*.\n• Prefix : ( ${prefix} )\n• Tiempo de Servidor : ${runtime(process.uptime())} \n• Fecha del servidor : ${moment.tz('America/Guayaquil').format('DD/MM/YY')}\n•Gracias por preferirme como su bot de confianza, trataré de ayudar en muchas cosas` + '' + lang.infobot(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Api WhatsApp","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "allmenu","id": 'menu'}},{"quickReplyButton": {"displayText": "Ping and Runtime","id": 'ping'}}] )
break
case 'allmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.menu(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo Fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "ser premium","id": 'donar'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'groupmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.group(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Código fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping and Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'downloadmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.downloads(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping and Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'searchmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.search(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'menuanime':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.random(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'logomenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.logomaker(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'funmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.funny(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'convertmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.convert(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping and Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'mainmenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.main(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'databasemenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.database(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'ownermenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.ownermenu(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'voicemenu':
	await yol.send5ButGif(from, `┌── *Info user*\n│» Nombre : ${pushname}\n│» Biografia : No detectada\n│» Numero : ${sender.split("@")[0]}\n│» Wa Api : http://wa.me/${sender.split("@")[0]}\n│» Usuario : ${isCreator ? `Owner ${ownername}` : isPremium ? `Usuario especial ${botname}` : `${botname}`}\n│» Estado : ${isCreator ? 'Owner ( ilimitado)' : isPremium ? 'Premium' : 'free'}\n│» Límite diario : ${isCreator ? 'Owner (ilimitado)' : isPremium ? 'Ilimitado' : (sender, limitharian)}\n│» Límite diario del juego : ${isCreator ? 'Owner (Ilimitado)' : (sender, limitgame)}\n└───────\n\n┌── *Info Bot*\n│» Biblioteca : Baileys Multi Device\n│» Nombre Bot : ${botname}\n│» Creador : ${ownername}\n│» Autor : DikaArdnt.\n│» Usuarios : ${Object.keys(global.db.data.users).length}\n└───────` + '\n' + lang.voice(prefix) , `${footer}`, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping And Status","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Sobre mí","id": 'infobot'}}] )
	break
case 'creditos':
await yol.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Menu lista","id": 'menu'}},{"quickReplyButton": {"displayText": "Ping y actividad ","id": 'ping'}},{"quickReplyButton": {"displayText": "Info sobre mi (Bot)","id": 'infobot'}}] )
break
case 'donar':
	await yol.send5ButImg(from, `` + '' + lang.donasi(), `${footer}`,thumb, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Codigo fuente","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Menu lista","id": 'menu'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
	break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    yol.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
