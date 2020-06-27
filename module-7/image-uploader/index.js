import fetchJson from '../utils/fetch-json.js';

const IMGUR_CLIENT_ID = "28aaa2e823b03b1";

// throws FetchError if upload failed
export default class ImageUploader {
  async upload(file) {

    const formData = new FormData();

    formData.append('image', file);

    try {
      return await fetchJson('https://api.imgur.com/3/image', {
        method: 'POST',
        headers:             {
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`
        },
        body: formData,
      });
    } catch (err) {
      throw err;
    }
  }
}
