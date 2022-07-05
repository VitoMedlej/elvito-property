
const getCookie =(cookieName : string) => {
    const cookies = Object.fromEntries(document.cookie.split(/; /).map(c => {
        const [key,
            v] = c.split('=', 2);
        return [key, decodeURIComponent(v)];
    }),);
    const cookie = cookies[cookieName]
    if (cookie && cookie?.length > 0) {
        return JSON.parse(cookies[cookieName])
    }
    return '';
}
export default getCookie