import axios from "axios";
import env from "../../../env.json";

const uploadImage = async (file) => {
  const promise = new Promise(async (resolve, reject) => {
    let formData = new FormData();

    formData.append("file", file);
    const token = localStorage.getItem("notesToken");

    try {
      const { data } = await axios.post(`${env.BASE_URL}/image/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) resolve(data);
      else reject("Invalid file type.");
    } catch (error) {
      reject(error);
    }
  });

  return promise;
};

export default uploadImage;
