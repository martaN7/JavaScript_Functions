export function multiTable(number) {
    return [...Array(10).keys()].map((n) => `${n + 1} * ${number} = ${(n + 1) * number}`).join("\n")
}