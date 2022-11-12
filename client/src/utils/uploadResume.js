const { Upload } = require("upload-js");
const upload = Upload({ apiKey: "free" });

const MyUploadButton = () => {
  const onFileSelected = async (event) => {
    try {
      const { fileUrl } = await upload.uploadFile(
        event.target.files[0],
        { onProgress: ({ progress }) => console.log(`${progress}% complete`) }
      );
      alert(`File uploaded!\n${fileUrl}`);
    } catch (e) {
      alert(`Error!\n${e.message}`);
    }
  }

  return <input type="file" onChange={onFileSelected} />;
};