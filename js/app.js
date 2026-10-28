const root = document.getElementById('root');

if (!(root instanceof HTMLElement)) {
  throw new Error('Could not find the #root element in the page.');
}

switch (document.body.dataset.page) {
  case 'login':
    window.NorthstarPages.initLoginPage(root);
    break;
  case 'home':
    window.NorthstarPages.initHomePage(root);
    break;
  default:
    throw new Error('This page is missing a valid data-page value.');
}
