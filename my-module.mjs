function clog(params) {
    console.log(params);
}

//===node导出module的两种方法===

// module.exports = clog;
// exports.test = clog;


//===ES6导出module的两种方法===

//export default clog;
export {clog}