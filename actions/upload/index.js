const imgur = require('imgur')

imgur.setClientId('2c6158375023d5c')

const uploadImgur = file =>
    new Promise((resolve, reject) => {
        console.log('imgur')
        imgur
            .uploadFile(file)
            .then(json => {
                return resolve(json.link)
            })
            .catch(err => {
                return reject(err.message)
            })
    })

const uploadFile = async (req, res) => {
    const { file } = req
    const { path, mimetype } = file
    console.log(mimetype.split('/'))
    if (mimetype.split('/')[0] !== 'image' || !path)
        throw new Error('invalid image')

    const url = await uploadImgur(path)

    return { url }
}

module.exports = uploadFile
