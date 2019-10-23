'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let firstIndex = 0;
	let lastIndex = array.length - 1;
	let middleIndex = Math.floor(array.length / 2);
  console.log(middleIndex)

	while(array[middleIndex] !== target && firstIndex < lastIndex ){
    //console.log(middleIndex);
		if(array[middleIndex] < target){
			firstIndex = middleIndex + 1;
		}
    if(array[middleIndex] > target){
			lastIndex = middleIndex - 1;
		}
		middleIndex = Math.floor((firstIndex + lastIndex) /2)
	}
	return (array[middleIndex] !== target) ? false : true
};

module.exports = binarySearch