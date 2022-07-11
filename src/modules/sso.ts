export default function singleSignOn() {
  localStorage.removeItem('token')
  localStorage.removeItem('redirectUrl')
  const authServer = import.meta.env.VITE_APP_AUTHSERVER
  const redirectUrl = location.href
  localStorage.setItem('redirectUrl', redirectUrl)
  
  location.href = `${authServer}/oauth/authorize?client_id=SampleClientId&client_secret=secret&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`
}
