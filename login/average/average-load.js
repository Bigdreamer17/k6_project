import { check } from 'k6';
import http from 'k6/http';

export const options = {
  // Configs for toDateString();
  stages: [
    { duration: '20s', target: 20 }, // ramp-up to 1 to 20 users over 30 seconds
    { duration: '30s', target: 15 }, // stay at 20 users for 40 seconds
    { duration: '20s', target: 0 }, // ramp-down to 0 users
  ],
};

export default function () {
  const loginRes = http.post('http://magnum-api.com/auth/login', JSON.stringify({
    username: 'hans',
    password: 'Hans123'
  }),{
      headers: { 'Content-Type': 'application/json' } 
    });

  check(loginRes, {
    'status is 200': (res) => res.status === 200,
  });
}
