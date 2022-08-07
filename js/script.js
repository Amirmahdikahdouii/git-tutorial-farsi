let copyButtons = [...document.querySelectorAll('i[cssClass="copy-icon"]')];
copyButtons.forEach((icon) => {
    icon.addEventListener('click', () => {
        let commandText = icon.previousElementSibling.lastElementChild.innerText;
        navigator.clipboard.writeText(commandText);
        [...icon.attributes][1].value = 'copy-icon-hide';
        icon.nextElementSibling.attributes[1].value = 'copy-icon-done-show';
        const setCopyIcon = () => {
            [...icon.attributes][1].value = 'copy-icon';
            icon.nextElementSibling.attributes[1].value = 'copy-icon-done';
        }
        setTimeout(() => { setCopyIcon() }, 1000);
    })
})