function daysToSeconds(days) {
    if (!Number(days)) {
        return 'Provide a valid number of days!'
    }
    if (days <= 1) {
        return `${days} day is ${days * 24 * 60 * 60} seconds`;
    } else {
        return `${days} days is ${days * 24 * 60 * 60} seconds`;
    }
}