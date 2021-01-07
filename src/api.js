const login = userData =>
  Promise.resolve({
    user: { name: 'lora-ob', email: 'larisaobikhod@gmail.com' },
    token: '19754585-5ce23e59215fa1e22c6ea29d4',
  });

export const logout = () => Promise.resolve();

export const getContacts = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Bobby',
      number: '12345',
    },
  ]);

export const addContact = payload => Promise.resolve(payload);
let token = '';
const setToken = loadedToken => {
  token = loadedToken;
};
//var API_KEY = '19754585-5ce23e59215fa1e22c6ea29d4';
//var URL =
//  'https://pixabay.com/api/?key=' +
//  API_KEY +
// '&q=' +
//  encodeURIComponent('red roses');
//$.getJSON(URL, function (data) {
//  if (parseInt(data.totalHits) > 0)
//    $.each(data.hits, function (i, hit) {
//      console.log(hit.pageURL);
//   });
//  else console.log('No hits');
//});
