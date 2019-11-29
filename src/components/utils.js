// ToDo: Apply padding-right: 15px to navbar, footer & sections to avoid components from jumping.
export const toggleBodyScroll = () => {
    const body = document.querySelector('body');
    const scrollIsEnabled = body.classList.contains('stop-scrolling');
    const actionName = scrollIsEnabled ? 'remove' : 'add';
    body.classList[actionName]('stop-scrolling');
};
