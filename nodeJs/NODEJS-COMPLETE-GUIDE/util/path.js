const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
// 모든 운영체제에서 작동하며 항상 루트 파일 경로를 알려준다.