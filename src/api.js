const login = userData =>
  Promise.resolve({
    user: { name: 'Test User', email: 'test.user@mail.com' },
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
