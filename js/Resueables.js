export function AddListener(listener,button,fuctionName) {
    button.addEventListener(listener,fuctionName);
}


export function Show(htmlObject) {
    htmlObject.classList.remove('hidden');
}

export function Hide(htmlObject) {
    htmlObject.classList.add('hidden');
}