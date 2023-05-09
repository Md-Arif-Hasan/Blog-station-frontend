// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

// function isLoggedIn() {
//   let jwtcookie = Cookies.get("jwt");
//   if (jwtcookie) return true;
//   return false;
// }

// function getCookieUsername() {
//   let cookie = Cookies.get("jwt");
//   let { username } = jwt_decode(cookie);
//   if (username) return username;
//   return null;
// }

// export { isLoggedIn, getCookieUsername };


import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function parseCookie() {
  let jwtcookie = Cookies.get("jwt");
  try {
    let token = jwt_decode(jwtcookie);
    return token.username;
  } catch {
    Cookies.remove("jwt");
    return false;
  }
}

function tokenExpired() {
  let jwtcookie = Cookies.get("jwt");
  try {
      let token = jwt_decode(jwtcookie);
      let expirationTime = token.exp;
      let current_time = Date.now() / 1000;
      if (expirationTime < current_time) {
        return true;
      }
    return false;
  } catch {
    return false;
  }
}

export { parseCookie, tokenExpired };