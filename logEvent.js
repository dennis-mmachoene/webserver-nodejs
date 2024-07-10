const fs = require('fs')
const fsPromises = require('fs').promises
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const path = require('path')

const logEvent = async (message) => {

    const dateTime = `${format(new Date(), "yyyy/MM/dd\tHH:mm:ss")}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    console.log(logItem)
    try {
        const logDir = path.join(__dirname, 'logs')
        if (!fs.existsSync(logDir)) {
            await fsPromises.mkdir(logDir)
        }
        const logFilePath = path.join(logDir, 'serverlog.txt')
        await fsPromises.appendFile(logFilePath, logItem)
    } catch (err) {
        console.log(err)
    }

    
}
module.exports = logEvent