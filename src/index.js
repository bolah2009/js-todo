const toggleNavMenu = (targetClass, toggleClass) => {
  const targetElement = document.querySelector(targetClass);
  const toggleElement = document.querySelector(toggleClass);
  const toggleHideClass = () => toggleElement.classList.toggle('d-none');
  targetElement.addEventListener('click', toggleHideClass);
  toggleElement.addEventListener('click', toggleHideClass);
};

const toggleProjectMenu = (targetClass, toggleClass) => {
  const targetElement = document.querySelector(targetClass);
  const toggleElement = document.querySelector(toggleClass);
  const toggleHideClass = ({ target, currentTarget }) => {
    if (target !== currentTarget) { return; }
    toggleElement.classList.toggle('d-none');
  };
  targetElement.addEventListener('click', toggleHideClass);
  toggleElement.addEventListener('click', toggleHideClass);
};

toggleNavMenu('.nav-menu', '.nav-list');
toggleProjectMenu('.show-project-nav', '.projects-modal');
