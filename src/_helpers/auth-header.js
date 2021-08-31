export function authHeader() {
    let kullanici = JSON.parse(localStorage.getItem('kullanici'));
    if (kullanici && kullanici.TOKEN) {
        return { 'Authorization': 'Bearer ' + kullanici.TOKEN };
    } else {
        return {};
    }
}