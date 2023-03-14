function howShouldIGetThere(distance, weather) {
    if (weather === 'snow') {
        return 'car';
    }
    if (weather === 'rain') {
        if (distance < 500) {
            return 'walking';
        } else if (500 <= distance && distance <= 2000) {
            return 'bicycle';
        } else {
            return 'car';
        }
    }
    if (weather === 'sunny') {
        if (distance < 1000) {
            return 'walking';
        } else if (1000 <= distance && distance <= 4000) {
            return 'bicycle';
        } else {
            return 'car';
        }
    }
}