let mapPeoples = new Map();

mapPeoples.set('1','Tommy');

console.log('Get: '+ mapPeoples.get('1'));
console.log('Has: '+ mapPeoples.has('1'));
console.log('Size: '+ mapPeoples.size);

// iterate over keys (vegetables)
for (let peopleKey of mapPeoples.keys()) {
    console.log('Iterate: ' + mapPeoples.get(peopleKey));
}
