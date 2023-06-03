import React from 'react';
import axios from 'axios';

export async function getDetails() {
  let options = {
    url: `http://localhost:8000/getDetails`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let resp = await axios(options);
    return resp;
    // return { msg: 'success', resp };
  } catch (error) {
    console.log(error);
    return { msg: 'error', error };
  }
}
