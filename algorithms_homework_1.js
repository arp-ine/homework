// 167. Two Sum II - Input Array Is Sorted

var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while(start < end) {
        const sum = numbers[start] + numbers[end];
        if(sum == target) {
            return [start + 1, end + 1];
        }else if(sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return[];
};

//202. Happy Number

var isHappy = function(n) {
    const seen = {};
    while(n !== 1){
        if(seen[n]){
        return false;
        }   
        seen[n] = true;

        n = sumOfSquaresDigits(n);
    }   

    return true;
}

function sumOfSquaresDigits(n){
    let sum = 0;
    while(n > 0){
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

//13. Roman to Integer

var romanToInt = function(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for(let i = 0; i < s.length; ++i){
        const current = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];

        if(current < next){
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};

//217. Contains Duplicate

var containsDuplicate = function(nums) {
    const dupl = new Set();

    for(let n of nums){
        if(dupl.has(n)){
            return true;
        }
        dupl.add(n);
    }

    return false;
};
