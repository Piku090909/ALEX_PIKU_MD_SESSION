const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Venocyber_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function VENOCYBER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Venocyber_Tech = Venocyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Venocyber_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Venocyber_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Venocyber_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Venocyber_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });

               let VENOCYBER_MD_TEXT = `
*_𝛲𝛥𝛪𝑅 𝐶𝛩𝐷𝛯 𝐶𝛩𝛮𝛮𝛯𝐶𝑇𝛯𝐷 𝐵𝑌 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 𝛭𝐷_*
*_𝛭𝛥𝐷𝛯 𝑊𝛪𝑇𝛨 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 𝛭𝐷_*
______________________________________
╔════◇𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 𝛭𝐷
║ *『  𝑊𝛩𝑊 𝑌𝛩𝑈 𝐶𝛨𝛩𝛩𝑆𝛯𝛮 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 𝛭𝐷 』*
║ _𝑌𝛩𝑈 𝛨𝛥𝛻𝛯 𝐶𝛩𝛭𝛲𝐿𝛯𝑇𝛯𝐷 𝑇𝛨𝛯 𝐹𝛪𝑅𝑆𝑇 𝑆𝑇𝛯𝛲 𝑇𝛩 𝐷𝛯𝛲𝐿𝛩𝑌 𝛥 𝑊𝛨𝛥𝑇𝑆𝛥𝛲𝛲 𝐵𝛩𝑇_
╚══════════════════════╝
╔═════◇
║  『•••  𝛻𝛪𝑆𝛪𝑇 𝐹𝛩𝑅 𝛨𝛯𝐿𝛲 •••』
║❒ *𝑌𝑇𝑈𝐵𝛯:* _https://youtube.com/@sir-alex-piku-tech?si=WLrn-nEVhj20-5HI_
║❒ *𝛩𝑊𝛮𝛯𝑅:* _https://wa.me/qr/6GWQJ4TCBLHYI1_
║❒ *𝑅𝛯𝛲𝛩:* _https://github.com/Piku090909/ALEX_PIKU_MD.git_
║❒ *𝑊𝛥𝐺𝑅𝛩𝑈𝛲:* _https://chat.whatsapp.com/CKdmkNNkE8TATtarGnvOJY_
║❒ *𝑊𝛥𝐶𝛨𝛥𝛮𝛮𝛯𝐿:* _https://whatsapp.com/channel/0029VaYESUGJkK7F76XsDj3L_
║❒ *𝛲𝐿𝑈𝐺𝛪𝛮𝑆:* _https://github.com/Piku090909/ALEX-PIKU_MD_PLUGINS.git_
╚══════════════════════╝ 
_____________________________________

	
_𝐷𝛩𝛮'𝑇 𝐹𝛩𝑅𝐺𝛯𝑇 𝑇𝛩 𝐺𝛪𝛻𝛯 𝑆𝑇𝛥𝑅 𝑇𝛩 𝛭𝑌 𝑅𝛯𝛲𝛩_`
 await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id,{text:VENOCYBER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Venocyber_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    VENOCYBER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await VENOCYBER_MD_PAIR_CODE()
});
module.exports = router
