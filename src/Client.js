/* eslint-disable prefer-template */
/* eslint-disable import/prefer-default-export */

const LOCAL_STORAGE_KEY = "fsr-spotify-fake-auth";

class Client {
  isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
  }

  login() {
    localStorage.setItem("loggedIn", "true");
  }

  logout() {
    localStorage.setItem("loggedIn", "false");
  }
}

export const client = new Client();
