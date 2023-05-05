import axios from 'axios';

export function loginApiCall(formData: any) {
  return new Promise((resolve) => {
    axios.post('http://localhost:8000/api/login', formData).then((data) => {
      resolve(data.data);
    });
  });
}