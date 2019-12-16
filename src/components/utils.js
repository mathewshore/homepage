export const toggleBodyScroll = () => {
    const body = document.querySelector('body');
    const scrollIsEnabled = body.classList.contains('stop-scrolling');
    const actionName = scrollIsEnabled ? 'remove' : 'add';
    body.classList[actionName]('stop-scrolling');
    if (actionName === 'add') {
        body.setAttribute('style', 'overflow: hidden;');
    }
};
