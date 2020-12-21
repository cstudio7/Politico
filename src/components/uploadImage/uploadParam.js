/** Cloudinary upload parameters */
const uploadParam = {
  cloudName: process.env.UPLOADCLOUDNAME,
  uploadPreset: process.env.UPLOADPRESET,
  folder: process.env.UPLOADFOLDER
};
export default uploadParam;
