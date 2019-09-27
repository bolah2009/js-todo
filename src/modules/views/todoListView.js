import createFragment from './fragments';

const todoListFragment = () => {
  const listProps = () => {
    const classNames = 'todo-list';
    const element = 'ul';
    const html = `
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>
                <li class="todo-list-item">
                <section class="todo-card d-flex col">
                    <div class="todo-header d-flex jc-sb ai-c">
                    <h4 class="todo-title">
                        Nulla posuere sollicitudin aliquam ultrices sagittis.
                    </h4>
                    <div class="todo-priority d-flex">
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000 four"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                        <svg class="svg-rating" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <p class="todo-due-date">
                    Due: <time datetime="2019-09-25">September 25</time>
                    </p>
                    <div class="todo-control-panel d-flex jc-sb">
                    <button title="Details" class="button">Show Details</button>
                    <button title="Edit" class="button">
                        <svg class="svg-edit" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                        />
                        </svg>
                    </button>
                    <button title="Complete" class="button">
                        <svg class="svg-complete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                        </svg>
                    </button>
                    <button title="Delete" class="button">
                        <svg class="svg-delete" viewBox="0 0 24 24">
                        <path
                            fill="#000000"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                        />
                        </svg>
                    </button>
                    </div>
                    <p class="todo-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                </li>`;
    return { classNames, element, html };
  };
  return createFragment(listProps());
};

export default todoListFragment;
