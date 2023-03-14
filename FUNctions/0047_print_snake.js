function printSnake(length, rows) {

    let row = 0;

    while (row < rows) {
        let currentRow = ``;

        if (row === 0) {
            currentRow += `>-8`;
        } else if (row % 2 !== 0) {
            currentRow += `┌`;
        } else if (row % 2 === 0) {
            currentRow += `└`;
        }

        let currentLength = currentRow.length + 1;
        while (currentLength < length) {
            currentRow += `─`;
            currentLength++;
        }

        if (row % 2 === 0) {
            currentRow += `┐`;
        } else if (row % 2 !== 0) {
            currentRow += `┘`;
        }

        row++;
        console.log(currentRow);
    }
}