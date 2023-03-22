function chooseWell(arr) {
    const goodCounter = arr.filter((word) => word === "good").length

    return goodCounter === 0 ? "Fail!" : goodCounter <= 2 ? "Publish!" : "I smell a series!"
}

console.log(chooseWell(['good', 'good', 'shit']));