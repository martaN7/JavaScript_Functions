function getMyName() {
    console.log(arguments.callee.name);
}
getMyName();