var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums[0] + nums[0 + 1] === target) {
            return [i, i + 1]
        } else {
            i++;
        }
    }
};

console.log(twoSum([1, 1, 3], 4))