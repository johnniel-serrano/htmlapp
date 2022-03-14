const resultElement = document.getElementById("result") // #result
const formElement = document.getElementById("calcInput") // #calcInput

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = e.target.input.value
    const operations = ['*', '/', '+', '-'] // an array of common mathematical operations
    let _return = 0

    operations.forEach((item) => {
        // string.split(val) : ['before', 'after', 'after', 'etc..']
        const nums = input.split(item)

        // cycle through our operations that we defined
        if (item === "+" && nums[1]) {
            // set the value of _return to be the first item from nums + the second item from nums
            _return = parseFloat(nums[0]) + parseFloat(nums[1])
        } else if (item === "-" && nums[1]) {
            // set the value of _return to be the first item from nums - the second item from nums
            _return = parseFloat(nums[0]) - parseFloat(nums[1])
        } else if (item === "*" && nums[1]) {
            // set the value of _return to be the first item from nums * the second item from nums
            _return = parseFloat(nums[0]) * parseFloat(nums[1])
        } else if (item === "/" && nums[1]) {
            // set the value of _return to be the first item from nums / the second item from nums
            _return = parseFloat(nums[0]) / parseFloat(nums[1])
        }

        // return the _return variable value
        resultElement.innerText = _return
    })
})