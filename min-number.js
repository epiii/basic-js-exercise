// JavaScript
// This is a demo task.
// Write a function:
//     function solution(A);
// that, given an array A of N integers, returns the smallest positive integer(greater than 0 that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = (-1, -3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range(1..100, 000); • each element of array A is an integer within the range
//     (-1, 000, 000..1, 000, 000).

function solution(A) {
    let isValid = A.length > 0
    if (!isValid) return 'array is empty'
    else {
        let sortedNum = A.sort()
        let minNum = Math.min(...A)
        let maxNum = Math.max(...A)

        if (minNum <= 0) return 1
        else {
            let resNum = null
            for (let i = minNum; i <= maxNum; i++) {
                if (!sortedNum.includes(i)) {
                    resNum = i
                    break
                }
            }
            return resNum ? resNum : maxNum + 1
        }
    }
}

// test case : 
// let nums = []//, the function should return array is empty
// let nums = [1, 2, 3]//, the function should return 4.
// let nums = [22, 40, 31]//, the function should return 23.
// let nums = [-1, -3] //the function should return 1.
let nums = [1, 3, 6, 4, 1, 2] // the function should return 5
console.log('result :', solution(nums))
