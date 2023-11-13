import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285655548594', 'Khalid XD', true],
  ['6285655548594'], 
  ['6285655548594'] 
]

global.mods = ['6285655548594'] 
global.prems = ['6285655548594', '6285655548594', '6285655548594']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': '?',
  'https://zenzapis.xyz': '?', 
  'https://api.fgmods.xyz': 'yHWsoQUe'
}

// Sticker WM
global.packname = 'Khalid Bot' 
global.author = 'Khalid XD' 
global.fgig = '-' 
global.dygp = '-'
global.fgsc = '-' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Memuat..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
