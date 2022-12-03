const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const imageUploader = async (filestr) => {
    try {
        const res = await cloudinary.uploader.upload(filestr, {
            upload_preset: 'growup'
        })
        const url = res.secure_url;
        return {
            success: true,
            url: url
        };
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

module.exports = imageUploader;