# Northstar demo

## Run locally

Open `index.html` directly in a browser to sign in. The app uses regular
deferred JavaScript files and does not require Node.js, npm, or a development
server. After signing in, use the dashboard's **Sign out** button to return to
the login page.

## Demo sign-in

Enter any email that passes the email pattern and any password that passes the
password rules. The local mock API waits briefly, creates a sample user, and
redirects to `home.html`. It does not send credentials to a server or save the
password. This is a front-end demo, not production authentication.

## Project structure

```text
index.html                 Login page entry
home.html                  Dashboard entry
css/styles.css             Shared login and dashboard styles
js/app.js                  Page entry point
js/pages/login.js          Login view and form behavior
js/pages/home.js           Dashboard view and interactions
js/services/mock-auth.js   Local mock sign-in and demo session
```
