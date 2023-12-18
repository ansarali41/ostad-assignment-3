const findNeedle = (haystack, needle) => {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let str = '';
        for (let j = i; j < i + needle.length; j++) {
            str += haystack[j];
        }
        if (str == needle) {
            return i;
        }
    }
    return -1;
};

const haystack = 'sadbutsad',
    needle = 'sad';
const getResult = findNeedle(haystack, needle);

console.log('getResult:', getResult);
// ** time complexity is O(n^2) and Space Complexity is O(n)
