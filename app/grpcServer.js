var PROTO_FILE_PATH = 'E:\\WebstormWorkspace\\grpc_demo\\proto\\Student.proto'; //
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var server = new grpc.Server();
server.addService(grpcService.StudentService.service, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log("call: " + call.request.username);

    callback(null, {realname: '张三'})
}

function getStudentsByAge(call, callback) {

}

function getStudentsWrapperByAges(call, callback) {

}

function biTalk(call, callback) {

}