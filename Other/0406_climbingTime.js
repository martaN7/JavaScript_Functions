function climbingTime(height, upPerDay, downPerDay) {
    if (upPerDay <= 0 || downPerDay < 0 || height <= 0) return false;
    for (let i = upPerDay, j = 0; ; i += upPerDay - downPerDay, j++) {
        if (i >= height) return j + 1;
    }
}

console.log(climbingTime(210, 5, 1));
