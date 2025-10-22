import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

(async function(){
  // Get CSRF token
  const csrfResp = await fetch('http://localhost:9002/api/auth/csrf');
  const csrfData = await csrfResp.json();
  const csrfToken = csrfData.csrfToken || '';

  const params = new URLSearchParams();
  params.set('csrfToken', csrfToken);
  params.set('callbackUrl','/');
  params.set('json','true');
  params.set('email','olivia.chen.hr@example.com');
  params.set('password','password');

  const res = await fetch('http://localhost:9002/api/auth/callback/hr-credentials', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: params });
  console.log('status', res.status);
  const body = await res.text();
  console.log(body);
})();
