import createFragment from './fragments';

const projectNavBarFragment = () => {
  const navBarProps = () => {
    const classNames = 'projects-modal d-none d-flex-md col';
    const element = 'nav';
    const html = `
                <div class="projects">
                <h4 class="project-title">projects</h4>
                <ul class="project-list">
                <li class="project-list-item">
                    <button type="button" class="button">
                    Personal
                    </button>
                </li>
                <li class="project-list-item">
                    <button type="button" class="button">
                    Work
                    </button>
                </li>
                </ul>
                <button class="add-project button">
                <svg class="svg-add" viewBox="0 0 24 24">
                    <path
                    fill="#000000"
                    d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    />
                </svg>
                </button>
                </div>`;
    return { classNames, element, html };
  };
  return createFragment(navBarProps());
};


export default projectNavBarFragment;
