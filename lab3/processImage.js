const sharp = require('sharp')
const fs = require('fs/promises')

async function processImage(filename, {filter, inverse, rotate, reflect}) {
    filename = 'public/' + filename
    const imgbuf = sharp(filename)
    //применение редактирования
    if (filter)                     imgbuf.grayscale()
    if (inverse)                    imgbuf.negate()
    if (rotate === 'cloc')          imgbuf.rotate(90)
    if (rotate === 'anti-cloc')     imgbuf.rotate(-90)
    if (reflect === 'horizontal')   imgbuf.flip()
    if (reflect === 'vertical')     imgbuf.flop()
    const tmpName = filename + 'tmp'
    await imgbuf.toFile(tmpName)
    /* в библиотеке sharp по непонятным причинам отсутствует
     * возможность сохранения файла с тем же именем, так что
     * приходится самостоятельно взаимодействовать с файловой системой
     */  
    const data = await fs.readFile(tmpName)
    await fs.writeFile(filename, data)
    await fs.unlink(tmpName)
}

module.exports = processImage