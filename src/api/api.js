import axios from 'axios';

export async function getDetails() {
  let options = {
    url: `https://orca-backend.vercel.app/getDetails`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let resp = await axios(options);
    return resp;
  } catch (error) {
    console.log(error);
    return { msg: 'error', error };
  }
}
