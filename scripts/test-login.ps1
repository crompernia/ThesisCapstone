$csrfResp = Invoke-RestMethod -Uri 'http://localhost:9002/api/auth/csrf' -Method Get
$csrf = $csrfResp.csrfToken
Write-Host "csrf=$csrf"
$body = @{ csrfToken = $csrf; callbackUrl = '/'; json = 'true'; email = 'olivia.chen.hr@example.com'; password = 'password' }
try {
  $resp = Invoke-RestMethod -Uri 'http://localhost:9002/api/auth/callback/hr-credentials' -Method Post -Body $body -ContentType 'application/x-www-form-urlencoded'
  Write-Host "Response:\n" ($resp | ConvertTo-Json -Depth 5)
} catch {
  Write-Host "Request failed: $_"
}
