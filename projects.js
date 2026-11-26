'use strict';

// Native buttons support Tab, Enter, and Space without custom key handlers.
const projectFilters = document.querySelector('#project-filters');
if (projectFilters) {
  const projectList = document.querySelector('#project-list');
  const projectCount = document.querySelector('#project-count');
  const buttons = projectFilters.querySelectorAll('button[data-filter]');
  const projects = projectList.querySelectorAll('[data-category]');

  // Show the controls only when the interaction is ready; all cards work without JS.
  projectFilters.hidden = false;
  projectCount.hidden = false;

  projectFilters.addEventListener('click', (event) => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected || !projectFilters.contains(selected)) return;

    const filter = selected.dataset.filter;
    let visible = 0;
    projects.forEach((project) => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
      if (!project.hidden) visible += 1;
    });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button === selected));
    });
    projectCount.textContent = filter === 'all'
      ? `Showing all ${visible} projects.`
      : `Showing ${visible} ${visible === 1 ? 'project' : 'projects'} in ${selected.textContent}.`;
  });
}
