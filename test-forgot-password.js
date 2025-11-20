// Test script for forgot password functionality
const fetch = require('node-fetch');

async function testForgotPassword() {
  try {
    console.log('Testing forgot password with employee number: 001-00037');

    const response = await fetch('http://localhost:9002/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: '001-00037'
      })
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', result);

    if (response.ok) {
      console.log('✅ API call successful!');
      console.log('Check your email for the reset link.');
    } else {
      console.log('❌ API call failed');
    }
  } catch (error) {
    console.error('❌ Error testing forgot password:', error.message);
  }
}

testForgotPassword();