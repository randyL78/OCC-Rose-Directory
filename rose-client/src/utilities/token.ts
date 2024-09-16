const COOKIE_EXPIRES_MINUTES = 60;

export function getToken() {
  const cookies = document.cookie.split('; ');

  return cookies.filter(c => {
    const cookie = c.split('=')
    if (cookie[0] === 'token') {
      return cookie[1];
    }
  }).map((c) => {
    const cookie = c.split('=')
    return cookie[1]
  })[0];
}

export function setToken(token: string) {
  const expireDate = new Date()
  expireDate.setTime(expireDate.getTime() + (COOKIE_EXPIRES_MINUTES * 1000 * 60));

  document.cookie = `token=${token}; expires=${expireDate.toUTCString()}; path=/;`;
}

export function removeToken() {
  const expireDate = new Date(0)

  document.cookie = `token=''; expires=${expireDate.toUTCString()}; path=/;`;
}
