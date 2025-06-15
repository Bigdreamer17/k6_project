import http from'k6/http';

export const options = {
  vus: 30,
  duration: '15s',
};

export default function () {
  const loginRes = http.post('http://magnum-api.com/auth/login', JSON.stringify({
    username: 'hans',
    password: 'Hans123'
  }),{
      headers: { 'Content-Type': 'application/json' },
    });
}
