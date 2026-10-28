const brandMark = `
  <span class="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 3.5 19.2 12.8 28.5 16l-9.3 3.2L16 28.5l-3.2-9.3L3.5 16l9.3-3.2L16 3.5Z" fill="currentColor"/>
      <circle cx="16" cy="16" r="3" fill="#19243B"/>
    </svg>
  </span>
`;

function renderLoginPage(root) {
  root.innerHTML = `
    <main class="login-page">
      <section class="login-card" aria-label="Sign in">
        <aside class="welcome-panel">
          <a class="brand" href="./index.html" aria-label="Northstar sign in">${brandMark}<span>northstar</span></a>
          <div class="welcome-copy">
            <span class="panel-tag"><span></span> YOUR SPACE, IN FOCUS</span>
            <h1>Good to<br />see you again.</h1>
            <p>Sign in and pick up right where your best work happens.</p>
          </div>
          <div class="visual" aria-hidden="true">
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="orbit orbit-three"></div>
            <span class="visual-star star-one">✦</span>
            <span class="visual-star star-two">✧</span>
            <span class="visual-star star-three">·</span>
            <div class="planet"><div class="planet-glow"></div><div class="planet-ring"></div></div>
            <div class="mini-card"><span class="mini-card-icon">✓</span><span><strong>You're right on track</strong><small>Welcome back</small></span></div>
          </div>
          <p class="panel-footer">A little more focus. A lot more flow.</p>
        </aside>

        <section class="form-panel">
          <div class="form-content">
            <a class="mobile-brand" href="./index.html" aria-label="Northstar sign in">${brandMark}<span>northstar</span></a>
            <p class="form-kicker">WELCOME BACK</p>
            <h2>Sign in to your account</h2>
            <p class="form-intro">Enter your details below to continue.</p>

            <form id="login-form">
              <div class="field">
                <label for="email">Email address</label>
                <div class="input-wrap">
                  <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="2.5" y="4" width="15" height="12" rx="2.5" stroke="currentColor" stroke-width="1.5"/>
                    <path d="m3.5 6 6.5 5 6.5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" inputmode="email" pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}" title="Enter a valid email address, such as you@example.com." aria-describedby="email-hint" required />
                </div>
                <span class="field-hint" id="email-hint">Use the email address linked to your account.</span>
              </div>

              <div class="field">
                <div class="label-row">
                  <label for="password">Password</label>
                  <button class="text-link text-link-button" type="button" data-message="Password reset is not available in this local demo.">Forgot password?</button>
                </div>
                <div class="input-wrap">
                  <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M6.5 8.5V6a3.5 3.5 0 1 1 7 0v2.5M10 12v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <input id="password" name="password" type="password" placeholder="Enter your password" autocomplete="current-password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9\\s])\\S{8,}" title="Use at least 8 characters, including uppercase and lowercase letters, a number, and a special character. Spaces are not allowed." aria-describedby="password-hint" required />
                  <button class="password-toggle" type="button" aria-label="Show password" aria-pressed="false">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M2 10s2.9-5 8-5 8 5 8 5-2.9 5-8 5-8-5-8-5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                      <circle cx="10" cy="10" r="2.2" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </button>
                </div>
                <span class="field-hint" id="password-hint">8+ characters with uppercase, lowercase, a number &amp; a symbol.</span>
              </div>

              <label class="remember-option">
                <input type="checkbox" name="remember" />
                <span class="custom-checkbox" aria-hidden="true"></span>
                <span>Keep me signed in</span>
              </label>

              <button class="submit-button" type="submit">
                <span class="button-label">Sign in</span>
                <span class="loader" aria-hidden="true"></span>
                <svg class="button-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <p class="form-message" id="form-message" role="status" aria-live="polite"></p>
            </form>

            <p class="signup-prompt">New around here? <button class="text-link text-link-button" type="button" data-message="Account creation is not available in this local demo.">Create an account</button></p>
            <p class="security-note"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5 13 3.5v3.8c0 3.2-2.1 5.7-5 7.2-2.9-1.5-5-4-5-7.2V3.5l5-2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="m5.8 7.8 1.5 1.5 3-3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg> Local demo — do not enter a real password</p>
          </div>
        </section>
      </section>
    </main>
  `;
}

function initLoginPage(root) {
  if (getCurrentUser()) {
    window.location.replace('./home.html');
    return;
  }

  renderLoginPage(root);

  const form = root.querySelector('#login-form');
  const password = root.querySelector('#password');
  const passwordToggle = root.querySelector('.password-toggle');
  const formMessage = root.querySelector('#form-message');
  const submitButton = root.querySelector('.submit-button');

  if (!(form instanceof HTMLFormElement) ||
      !(password instanceof HTMLInputElement) ||
      !(passwordToggle instanceof HTMLButtonElement) ||
      !(formMessage instanceof HTMLElement) ||
      !(submitButton instanceof HTMLButtonElement)) {
    throw new Error('Could not initialize the login form.');
  }

  passwordToggle.addEventListener('click', () => {
    const isVisible = password.type === 'text';
    password.type = isVisible ? 'password' : 'text';
    passwordToggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
    passwordToggle.setAttribute('aria-pressed', String(!isVisible));
  });

  form.addEventListener('input', () => {
    formMessage.textContent = '';
    formMessage.classList.remove('success');
  });

  root.querySelectorAll('.text-link-button').forEach((button) => {
    button.addEventListener('click', () => {
      const message = button.dataset.message;

      if (!message) {
        throw new Error('A login action is missing its status message.');
      }

      formMessage.textContent = message;
      formMessage.classList.remove('success');
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    formMessage.textContent = '';
    formMessage.classList.remove('success');

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const email = formData.get('email');
    const submittedPassword = formData.get('password');

    if (typeof email !== 'string' || typeof submittedPassword !== 'string') {
      throw new Error('The login form is missing required values.');
    }

    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    submitButton.setAttribute('aria-busy', 'true');
    formMessage.textContent = 'Signing in to the local demo…';
    formMessage.classList.add('success');

    try {
      await signIn({
        email,
        password: submittedPassword,
        rememberMe: formData.has('remember'),
      });
      window.location.assign('./home.html');
    } catch (error) {
      console.error('Demo sign-in failed.', error);
      formMessage.textContent = 'We could not sign you in. Please try again.';
      formMessage.classList.remove('success');
      submitButton.disabled = false;
      submitButton.classList.remove('is-loading');
      submitButton.removeAttribute('aria-busy');
    }
  });
}

window.NorthstarPages = { ...window.NorthstarPages, initLoginPage };
