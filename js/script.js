let copyButtons = [...document.querySelectorAll('svg[cssClass="copy-icon"]')];
copyButtons.forEach((icon) => {
    icon.addEventListener('click', () => {
        let commandText = icon.previousElementSibling.lastElementChild.innerText;
        navigator.clipboard.writeText(commandText);
        [...icon.attributes][6].value = 'copy-icon-hide';
        icon.nextElementSibling.attributes[6].value = 'copy-icon-done-show';
        const setCopyIcon = () => {
            [...icon.attributes][6].value = 'copy-icon';
            icon.nextElementSibling.attributes[6].value = 'copy-icon-done';
        }
        setTimeout(() => { setCopyIcon() }, 1000);
    })
})