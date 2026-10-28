const SESSION_USER_KEY = 'northstar.demo-user';
const REMEMBERED_USER_KEY = 'northstar.demo-remembered-user';
const API_DELAY_MS = 700;

function waitForMockApi() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, API_DELAY_MS);
  });
}

function createDemoUser(email) {
  const normalizedEmail = email.trim().toLowerCase();
  const name = normalizedEmail.split('@')[0].replace(/[._-]+/g, ' ');

  return {
    email: normalizedEmail,
    name: name.replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Northstar user',
  };
}

async function signIn({ email, password, rememberMe }) {
  if (!email || !password) {
    throw new Error('Enter your email and password to continue.');
  }

  await waitForMockApi();

  const user = createDemoUser(email);
  const storage = rememberMe ? window.localStorage : window.sessionStorage;
  const otherStorage = rememberMe ? window.sessionStorage : window.localStorage;

  otherStorage.removeItem(rememberMe ? SESSION_USER_KEY : REMEMBERED_USER_KEY);
  storage.setItem(rememberMe ? REMEMBERED_USER_KEY : SESSION_USER_KEY, JSON.stringify(user));

  return user;
}

function getCurrentUser() {
  for (const [storage, key] of [
    [window.localStorage, REMEMBERED_USER_KEY],
    [window.sessionStorage, SESSION_USER_KEY],
  ]) {
    const savedUser = storage.getItem(key);

    if (!savedUser) {
      continue;
    }

    try {
      const user = JSON.parse(savedUser);

      if (typeof user.email === 'string' && typeof user.name === 'string') {
        return user;
      }

      storage.removeItem(key);
    } catch (error) {
      storage.removeItem(key);
      console.error('Could not read the saved demo user.', error);
    }
  }

  return null;
}

function signOut() {
  window.localStorage.removeItem(REMEMBERED_USER_KEY);
  window.sessionStorage.removeItem(SESSION_USER_KEY);
}

window.NorthstarAuth = Object.freeze({ signIn, getCurrentUser, signOut });
