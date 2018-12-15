import fs from 'fs'
import readline from 'readline'
import path from 'path'

export default class App {
  async run () {
    const file = await this.readFile()
    console.log('damn')
  }

  readFile () {
    return new Promise((resolve, reject) => {
      let file = ''
      const rl = readline.createInterface({
        input: fs.createReadStream(path.join('resources/simple.txt'))
      })

      rl.on('line', (line) => {
        file += line
      })

      rl.on('close', () => resolve(file))
    })
  }
}
