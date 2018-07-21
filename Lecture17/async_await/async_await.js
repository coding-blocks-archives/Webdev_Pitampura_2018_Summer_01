

function downloadFile(url) {
    return new Promise((resolve, reject) => {

        if (!url.startsWith('http')) {
            return reject(new Error('URL does not start with http(s)'))
        }
        console.log(`Downloading ${url}`)
        setTimeout(() => {
            let fileName = url.split('/').pop()
            console.log(`Downloaded, now saving as ${fileName}`)
            resolve(fileName)
        }, 2000)

    })
}

function resizeImage(fileName) {
    return new Promise((resolve, reject) => {
        if (!(fileName.endsWith('.png') || fileName.endsWith('.jpg'))) {
            return reject(new Error('We can only resize images'))
        }
    
        console.log(`Resizing ${fileName}`)
        setTimeout(() => {
            let resizedName = fileName.split('.').join('_small.')
            console.log(`Resized and saved to ${resizedName}`)
            resolve(resizedName)
        }, 2000)

    })    
} 

function uploadFile(fileName) {
    return new Promise((resolve, reject) => {
        if (!(/[A-Z,a-z]/.test(fileName[0]))) {
            return reject(new Error('Cannot upload filenames not starting with alphabet'))
        }
    
        console.log(`Uploading ${fileName}`)
        setTimeout(() => {
            let uploadedUrl = `http://backups.com/${fileName}`
            console.log(`Uploaded to ${uploadedUrl}`)
            resolve(uploadedUrl)
        }, 2000)
    })
}

(async () => {
    try {
        const filePath = await downloadFile('http://codingblocks.com/logo.mp3')
        const resizedPath = await resizeImage(filePath)
        const uploadUrl = await uploadFile(resizedPath)
        console.log("ALl Done!!!")
    } catch (e) {
        console.error(e.message)
    } finally {
        
    }
})()
