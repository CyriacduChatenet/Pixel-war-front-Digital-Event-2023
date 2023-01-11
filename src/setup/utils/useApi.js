import axios from "axios";
import { getTokenFromLocalstorage } from "./authorization";
import { firestoreDb } from "./firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

/** headers REQUEST **/

const token = getTokenFromLocalstorage();

const apiurl = process.env.REACT_APP_API;

export const createUser = async (data) => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: data.username
    })
    .then(() => {
      localStorage.setItem("token", user.accessToken);
    })
    .catch((error) => {
      console.log(error.message)
    })
  })
  .catch((error) => {
    console.log(error.message)
  });
}

export const connectUser = async (data) => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem("token", user.accessToken);
  })
}

// export const getRequest = (url) => {
//   const headers = {
//     Authorization: "Bearer " + token,
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   };

//   const finalUrl = apiurl + url;

//   return axios.get(finalUrl, { headers: headers });
// };

// export const postRequestWithoutToken = (url, formData) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   const finalUrl = apiurl + url;
//   return axios.post(finalUrl, formData, { headers: headers });
// };

// /** REQUETE POST avec header  **/

// export const postRequest = (url, formData) => {
//   const headers = {
//     Authorization: "Bearer " + token,
//     "Content-Type": "application/json",
//   };
//   const config = {
//     headers: headers,
//   };
//   const finalUrl = apiurl + url;
//   return axios.post(finalUrl, formData, config);
// };

// /** REQUETE PUT avec header  **/

// export const putRequest = (url, formData) => {
//   const headers = {
//     Authorization: "Bearer " + token,
//     "Content-Type": "application/json",
//   };
//   const config = {
//     headers: headers,
//   };

//   const finalUrl = apiurl + url;

//   return axios.put(finalUrl, formData, config);
// };

// /** REQUETE DELETE avec header  **/

// export const deleteRequest = (url, formData) => {
//   const headers = {
//     Authorization: "Bearer " + token,
//     "Content-Type": "application/json",
//   };
//   const finalUrl = apiurl + url;
//   return axios.delete(finalUrl, { headers: headers, data: formData });
// };
