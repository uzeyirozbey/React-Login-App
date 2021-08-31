import config from 'config';
import axios from "axios";
export const userService = {
    login,
    logout,
    getAll,
    userDelete,
    userDetail
};
const deleteUserId = [];
function login(username, password) {
    const params = {
        KULLANICI_AD: username,
        SIFRE: password
    }
    return axios.post(`${config.apiUrl}/Kullanici/Login`, params)
        .then(response => response.data)
        .then(response => {
            const kullaniciBilgi = response.NESNE;
            localStorage.setItem('kullanici', JSON.stringify(kullaniciBilgi));
            return kullaniciBilgi;
        });
}

function logout() {
    localStorage.removeItem('kullanici');
}

function getAll() {
    return axios.post(`${config.apiUrl}/Kullanici/Listele`)
        .then(response => response.data)
        .then(response => {
            const kullanicilar = response.NESNE;
            return kullanicilar;
        });
}

function userDelete(id) {
    deleteUserId.push(id);
    //database olmadığı için listeden silip sanki silinmiş gibi yapılacak
    return axios.post(`${config.apiUrl}/Kullanici/Listele`)
        .then(response => response.data)
        .then(response => {
            const data          = response.NESNE;
            const kullanicilar  = data.filter(function(obj) 
                           {
                                 return deleteUserId.indexOf(obj.ID_KULLANICI) == -1; 
                           });
            return kullanicilar;
        });
 }
 function userDetail(id) {
    //database olmadığı için listeden silip sanki silinmiş gibi yapılacak
    return axios.post(`${config.apiUrl}/Kullanici/Listele`)
        .then(response => response.data)
        .then(response => {
            const data          = response.NESNE;
            const kullaniciDetay = data.filter(kullanici => kullanici.ID_KULLANICI == id); 
            return kullaniciDetay;
        });
 }
