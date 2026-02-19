const numbers = [6, 1, 8, 9, 10, 7, 4, 2]

const reducer = (counts, element) => {
    if(element >= 1 && element <= 5) {
        counts['1-5'] = 1 + (counts['1-5'] || 0)
    } else if(element >= 6 && element <= 8) {
        counts['6-8'] = 1 + (counts['6-8'] || 0)
    } else if(element >= 9 && element <= 10) {
        counts['9-10'] = 1 + (counts['9-10'] || 0)
    }

    return counts
}

const numberCount = numbers.reduce(reducer, {})


console.log({ numberCount })