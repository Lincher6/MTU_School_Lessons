module.exports = {
    RequiredError: class RequiredError extends Error {
        constructor(message) {
            super(message);
            this.name = "RequiredError";
        }
    },

    ArrayDataError: class ArrayDataError extends Error {
        constructor(message) {
            super(message);
            this.name = "ArrayDataError";
        }
    },
}