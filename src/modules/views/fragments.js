const createFragment = (props = {}) => {
  const { classNames = '', element = 'div', html = '' } = props;
  const documentFragment = document.createDocumentFragment();
  const newElement = document.createElement(element);
  if (classNames.length > 0) {
    newElement.classList.add(...classNames.split(' '));
  }
  newElement.innerHTML = html;
  documentFragment.appendChild(newElement);
  return documentFragment;
};

export default createFragment;
