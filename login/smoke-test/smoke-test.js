import http from'k6/http';

export const options = {
  vus: 30,
  duration: '15s',
};
// Dont forget to replace website, username, password
export default function () {
  const loginRes = http.post('Website', JSON.stringify({
    username: 'username',
    password: 'password'
  }),{
      headers: { 'Content-Type': 'application/json' },
    });
}
