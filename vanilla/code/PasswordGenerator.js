import { RandomPasswordCharSet, RandomPasswordGenLength } from "./constants.js";

export function generateRandomPassword() {
    const length = RandomPasswordGenLength;
    const charset = RandomPasswordCharSet;
    const charsetLength = charset.length;
    let passwordArray = new Array(length);

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        passwordArray[i] = charset[randomIndex];
    }

    return passwordArray.join('');
}
