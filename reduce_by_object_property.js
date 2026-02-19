const breeds = require('./cat_breeds.json');

const breedCounts = breeds
  .map((breed) => breed.origin || 'Unknown')
  .reduce((counts, origin) => {
    if (!counts[origin]) {
      counts[origin] = 1;
    } else {
      counts[origin] = counts[origin] + 1;
    }

    return counts;
  }, {});

console.log(breedCounts);
