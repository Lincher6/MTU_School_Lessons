module.exports = (nums, target) => {
    for (let i in nums) {
        if (nums[i] === target || nums[i] > target) {
            return +i
        }
    }
    return +nums.length
}