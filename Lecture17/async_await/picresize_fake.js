
function downloadFile(url, downloaded) {

    if (!url.startsWith('http')) {
        return downloaded(new Error('URL does not start with http(s)'))
    }
    console.log(`Downloading ${url}`)
    setTimeout(() => {
        let fileName = url.split('/').pop()
        console.log(`Downloaded, now saving as ${fileName}`)
        downloaded(null, fileName)
    }, 2000)
}

function resizeImage(fileName, resized) {

    if (!(fileName.endsWith('.png') || fileName.endsWith('.jpg'))) {
        return resized(new Error('We can only resize images'))
    }

    console.log(`Resizing ${fileName}`)
    setTimeout(() => {
        let resizedName = fileName.split('.').join('_small.')
        console.log(`Resized and saved to ${resizedName}`)
        resized(null, resizedName)
    }, 2000)
}

function uploadFile(fileName, uploaded) {

    if (!(/[A-Z,a-z]/.test(fileName[0]))) {
        return uploaded(new Error('Cannot upload filenames not starting with alphabet'))
    }

    console.log(`Uploading ${fileName}`)
    setTimeout(() => {
        let uploadedUrl = `http://backups.com/${fileName}`
        console.log(`Uploaded to ${uploadedUrl}`)
        uploaded(null, uploadedUrl)
    }, 2000)
}

downloadFile('http://codingblocks.com/2logo.png', (err, fileName) => {
    if (err) {
        return console.error(err.message)
    }
    
    resizeImage(fileName, (err2, resizedName) => {
        if (err2) {
            return console.error(err2.message)
        }

        uploadFile(resizedName, (err3, uploadedUrl) => {

            if (err3) {
                return console.error(err3.message)
            }
            console.log('All Done!!!')
        })
    })
})