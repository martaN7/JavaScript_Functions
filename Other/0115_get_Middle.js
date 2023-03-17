export function getMiddle(string) {
    return string.length % 2 === 0
        ? string.substr(string.length / 2 - 1, 2)
        : string.charAt((string.length - 1) / 2);
}