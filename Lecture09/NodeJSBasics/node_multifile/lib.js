function add (a, b) {
    return a + b
}

function privFun () {
    console.log("private function")
}
function pubFun () {
    console.log("public function")
    privFun()
}

module.exports = {
    add,
    pubFun
}