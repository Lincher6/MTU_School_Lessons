module.exports = (nums, target) => {
    if (!Array.isArray(nums)) {
        throw new Error("nums is not an Array");
    } else if (nums.some(el => typeof el !== 'number')) {
        throw new Error("nums elements must be numbers");
    } else if (JSON.stringify([...nums].sort()) !== JSON.stringify(nums)) {
        throw new Error("nums must be sorted");
    } else if (typeof target !== 'number') {
        throw new Error("nums must be a number");
    }


    for (let i in nums) {
        if (nums[i] === target || nums[i] > target) {
            return +i;
        }
    }
    return +nums.length;
}