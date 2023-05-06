import axios from 'axios';

export function loginApiCall(formData: any) {
  return new Promise((resolve) => {
    axios.post('http://localhost:3003/api/login', formData).then((data: any) => {
      resolve(data.data);
    });
  });
}