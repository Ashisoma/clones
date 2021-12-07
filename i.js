// question two

let availableLibraries = [
    { id: 1, name: 'express' },
    { id: 2, name: 'async' },
    { id: 3, name: 'request' },
    { id: 4, name: 'browserify' },
    { id: 5, name: 'grunt' },
  ];
  
  let librariesForInstallation = [
    { id: 6, name: 'socket.io' },
    { id: 7, name: 'mocha' },
  ];
  
  let selectedLibrary = null;
  
  const selectLibrary = (library) => {
    // TODO: implement
  };
  
  const onMoveRightClick = () => {
    // TODO: implement
  };
  
  const onMoveLeftClick = () => {
    // TODO: implement
  };
  
  const installLibraries = () => {
    // TODO: implement
  };
  
  const fillContainer = (libraries, containerClassName) => {
    libraries.sort((e1, e2) => e1.id - e2.id);
  
    const container = document.querySelector(`.${containerClassName}`);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  
    libraries.forEach((lib) => {
      const libElement = document.createElement('div');
  
      libElement.className = 'libs-installer__item';
      if (selectedLibrary?.id === lib.id) {
        libElement.classList.add('libs-installer__item--selected');
      }
      libElement.innerHTML = lib.name;
  
      libElement.onclick = () => selectLibrary(lib);
      container.appendChild(libElement);
    });
  };
  
  const render = () => {
    fillContainer(availableLibraries, 'libs-installer__libs-container--left');
    fillContainer(librariesForInstallation, 'libs-installer__libs-container--right');
  };
  
  const bindEventListeners = () => {
    document
      .querySelector('.libs-installer__arrow--right')
      .addEventListener('click', onMoveRightClick);
    document
      .querySelector('.libs-installer__arrow--left')
      .addEventListener('click', onMoveLeftClick);
    document
      .querySelector('.controls-container__install-btn')
      .addEventListener('click', installLibraries);
  
    render();
  };
  
  addEventListener('load', bindEventListeners);
  