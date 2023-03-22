function errorMessage(number) {
    return {
        1: 'Check the fan: e1',
        2: 'Emergency stop: e2',
        3: 'Pump Error: e3',
        4: 'Restart device: e4',
        5: 'Temperature Sensor Error: e5',
    }[number] || "Passed number doesn't match possible failure parameters"
}
console.log(errorMessage(2));