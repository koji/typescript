export const greeting = (message: string): void => {
    log(message);
};

const log = (message: string): void => {
    document.body.innerHTML = (`${message}`);
    console.log(`message: ${message}`);
}