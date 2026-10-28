function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function initHomePage(root) {
  const user = getCurrentUser();

  if (!user) {
    window.location.replace('./index.html');
    return;
  }

  const firstName = escapeHtml(user.name.split(' ')[0] || 'there');
  const safeName = escapeHtml(user.name);
  const initials = escapeHtml(user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('') || 'N');

  root.innerHTML = `
    <div class="dashboard">
      <aside class="sidebar">
        <a class="brand sidebar-brand" href="./home.html" aria-label="Northstar home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 3.5 19.2 12.8 28.5 16l-9.3 3.2L16 28.5l-3.2-9.3L3.5 16l9.3-3.2L16 3.5Z" fill="currentColor"/>
              <circle cx="16" cy="16" r="3" fill="#19243B"/>
            </svg>
          </span>
          <span>northstar</span>
        </a>
        <p class="nav-label">WORKSPACE</p>
        <nav class="side-nav" aria-label="Main navigation">
          <a class="nav-item active" href="#overview"><span class="nav-icon">⌂</span> Overview</a>
          <a class="nav-item" href="#projects"><span class="nav-icon">▦</span> Projects <span class="nav-count">3</span></a>
          <a class="nav-item" href="#tasks"><span class="nav-icon">☷</span> My tasks</a>
          <a class="nav-item" href="#calendar"><span class="nav-icon">▣</span> Calendar</a>
        </nav>
        <div class="sidebar-bottom">
          <div class="sidebar-tip">
            <span class="tip-spark">✦</span>
            <strong>Make space for focus</strong>
            <p>Small, steady progress adds up to remarkable work.</p>
            <a href="#focus">Explore focus time <span>→</span></a>
          </div>
          <button class="nav-item signout-button" id="signout-button" type="button"><span class="nav-icon">↪</span> Sign out</button>
          <p class="sidebar-version">NORTHSTAR · DEMO WORKSPACE</p>
        </div>
      </aside>

      <main class="main-content" id="overview">
        <header class="topbar">
          <div class="breadcrumb">Workspace <span>/</span> Overview</div>
          <div class="topbar-actions">
            <button class="icon-button notification-button" type="button" aria-label="Notifications">♧<span></span></button>
            <div class="user-menu"><span class="avatar">${initials}</span><span class="user-menu-name">${safeName}</span><span class="chevron">⌄</span></div>
          </div>
        </header>

        <section class="dashboard-content">
          <div class="greeting-row">
            <div>
              <p class="date-label" id="today-label"></p>
              <h1>Good morning, ${firstName} <span class="wave">✦</span></h1>
              <p class="greeting-subtitle">A fresh day to make meaningful progress. Here's your overview.</p>
            </div>
            <button class="primary-button" type="button" id="new-task-button"><span>＋</span> New task</button>
          </div>

          <section class="stats-grid" aria-label="Workspace summary">
            <article class="stat-card">
              <div class="stat-top"><span class="stat-icon purple">◷</span><span class="stat-trend">↗ 12%</span></div>
              <p class="stat-label">Focus time</p><p class="stat-value">4.5 <span>hrs</span></p><p class="stat-foot">vs. 4 hrs last week</p>
              <div class="sparkline purple-line"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </article>
            <article class="stat-card">
              <div class="stat-top"><span class="stat-icon green">✓</span><span class="stat-trend">↗ 8%</span></div>
              <p class="stat-label">Tasks completed</p><p class="stat-value">18 <span>tasks</span></p><p class="stat-foot">You're building momentum</p>
              <div class="sparkline green-line"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </article>
            <article class="stat-card">
              <div class="stat-top"><span class="stat-icon orange">◇</span><span class="stat-neutral">This week</span></div>
              <p class="stat-label">Active projects</p><p class="stat-value">3 <span>projects</span></p><p class="stat-foot">All moving along nicely</p>
              <div class="project-dots"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            </article>
          </section>

          <section class="content-grid">
            <article class="content-card tasks-card" id="tasks">
              <div class="section-heading"><div><h2>Today's focus</h2><p>A few things to move forward</p></div><button class="quiet-button" type="button">View all <span>→</span></button></div>
              <div class="task-list" id="task-list">
                <label class="task-row"><input type="checkbox" /><span class="task-check"></span><span class="task-copy"><strong>Review the Q3 product roadmap</strong><small><span class="task-project purple-dot"></span> Product strategy <span class="task-separator">·</span> <span class="priority high">High priority</span></small></span><span class="task-time">10:30 AM</span></label>
                <label class="task-row"><input type="checkbox" /><span class="task-check"></span><span class="task-copy"><strong>Share feedback on homepage concepts</strong><small><span class="task-project blue-dot"></span> Website refresh <span class="task-separator">·</span> <span class="priority normal">Design</span></small></span><span class="task-time">1:00 PM</span></label>
                <label class="task-row"><input type="checkbox" /><span class="task-check"></span><span class="task-copy"><strong>Prepare notes for team sync</strong><small><span class="task-project green-dot"></span> Team rituals <span class="task-separator">·</span> <span class="priority normal">Planning</span></small></span><span class="task-time">3:30 PM</span></label>
              </div>
              <form class="task-entry" id="task-entry" hidden>
                <label class="visually-hidden" for="new-task-title">New task name</label>
                <input id="new-task-title" name="title" type="text" maxlength="120" placeholder="What needs to get done?" required />
                <button class="task-entry-submit" type="submit">Add</button>
                <button class="task-entry-cancel" type="button" id="cancel-task-button">Cancel</button>
              </form>
              <button class="add-task-button" type="button" id="add-task-button"><span>＋</span> Add a task</button>
            </article>

            <article class="content-card week-card" id="projects">
              <div class="section-heading"><div><h2>Your week</h2><p>A little progress every day</p></div><button class="more-button" type="button" aria-label="More week options">···</button></div>
              <div class="week-chart" aria-label="Focus hours per weekday">
                <div class="chart-y-labels"><span>6h</span><span>4h</span><span>2h</span><span>0h</span></div>
                <div class="chart-area">
                  <div class="chart-gridline line-one"></div><div class="chart-gridline line-two"></div><div class="chart-gridline line-three"></div>
                  <div class="chart-bars"><div class="chart-column"><i style="--height:48%"></i><span>M</span></div><div class="chart-column"><i style="--height:71%"></i><span>T</span></div><div class="chart-column"><i style="--height:57%"></i><span>W</span></div><div class="chart-column today-column"><i style="--height:82%"></i><span>T</span></div><div class="chart-column"><i style="--height:35%"></i><span>F</span></div><div class="chart-column future-column"><i style="--height:15%"></i><span>S</span></div><div class="chart-column future-column"><i style="--height:8%"></i><span>S</span></div></div>
                </div>
              </div>
              <div class="chart-legend"><span></span> Focus time <strong>18.5 hrs</strong></div>
            </article>
          </section>

          <section class="bottom-banner" id="focus">
            <div class="banner-icon">✦</div>
            <div><strong>You're doing great, ${firstName}.</strong><p>You've completed 18 tasks this week. Keep that thoughtful momentum going.</p></div>
            <div class="banner-progress" aria-label="Weekly goal 72 percent complete"><div><span></span></div><strong>72%</strong><small>weekly goal</small></div>
            <span class="banner-decoration">✧</span>
          </section>
          <p class="dashboard-footnote">Northstar demo workspace · Your dashboard data is sample content.</p>
        </section>
      </main>
    </div>
  `;

  const dateLabel = root.querySelector('#today-label');

  if (!(dateLabel instanceof HTMLElement)) {
    throw new Error('Could not initialize the dashboard date.');
  }

  dateLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date()).toUpperCase();

  const signOutButton = root.querySelector('#signout-button');
  const addTaskButton = root.querySelector('#add-task-button');
  const newTaskButton = root.querySelector('#new-task-button');
  const taskEntry = root.querySelector('#task-entry');
  const taskTitleInput = root.querySelector('#new-task-title');
  const cancelTaskButton = root.querySelector('#cancel-task-button');
  const taskList = root.querySelector('#task-list');

  if (!(signOutButton instanceof HTMLButtonElement) ||
      !(addTaskButton instanceof HTMLButtonElement) ||
      !(newTaskButton instanceof HTMLButtonElement) ||
      !(taskEntry instanceof HTMLFormElement) ||
      !(taskTitleInput instanceof HTMLInputElement) ||
      !(cancelTaskButton instanceof HTMLButtonElement) ||
      !(taskList instanceof HTMLElement)) {
    throw new Error('Could not initialize dashboard controls.');
  }

  signOutButton.addEventListener('click', () => {
    signOut();
    window.location.assign('./index.html');
  });

  const openTaskEditor = () => {
    taskEntry.hidden = false;
    taskTitleInput.focus();
  };

  taskTitleInput.addEventListener('input', () => {
    taskTitleInput.setCustomValidity('');
  });

  taskEntry.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = taskTitleInput.value.trim();

    if (!title) {
      taskTitleInput.setCustomValidity('Enter a task name.');
      taskTitleInput.reportValidity();
      return;
    }

    const row = document.createElement('label');
    row.className = 'task-row';
    row.innerHTML = `
      <input type="checkbox" />
      <span class="task-check"></span>
      <span class="task-copy"><strong></strong><small><span class="task-project purple-dot"></span> Personal <span class="task-separator">·</span> <span class="priority normal">Just added</span></small></span>
      <span class="task-time">Anytime</span>
    `;

    const taskTitle = row.querySelector('strong');

    if (!(taskTitle instanceof HTMLElement)) {
      throw new Error('Could not add the new task.');
    }

    taskTitle.textContent = title;
    taskList.append(row);
    taskEntry.reset();
    taskEntry.hidden = true;
    addTaskButton.focus();
  });

  cancelTaskButton.addEventListener('click', () => {
    taskEntry.reset();
    taskEntry.hidden = true;
    addTaskButton.focus();
  });

  addTaskButton.addEventListener('click', openTaskEditor);
  newTaskButton.addEventListener('click', openTaskEditor);
}

window.NorthstarPages = { ...window.NorthstarPages, initHomePage };
