// package: zoom.v1
// file: zoom/v1/zoom.proto

var zoom_v1_zoom_pb = require("../../zoom/v1/zoom_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ZoomService = (function () {
  function ZoomService() {}
  ZoomService.serviceName = "zoom.v1.ZoomService";
  return ZoomService;
}());

ZoomService.CreateZoom = {
  methodName: "CreateZoom",
  service: ZoomService,
  requestStream: false,
  responseStream: false,
  requestType: zoom_v1_zoom_pb.CreateZoomRequest,
  responseType: zoom_v1_zoom_pb.CreateZoomResponse
};

ZoomService.GetZoomList = {
  methodName: "GetZoomList",
  service: ZoomService,
  requestStream: false,
  responseStream: false,
  requestType: zoom_v1_zoom_pb.GetZoomListRequest,
  responseType: zoom_v1_zoom_pb.GetZoomListResponse
};

exports.ZoomService = ZoomService;

function ZoomServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ZoomServiceClient.prototype.createZoom = function createZoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ZoomService.CreateZoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ZoomServiceClient.prototype.getZoomList = function getZoomList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ZoomService.GetZoomList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ZoomServiceClient = ZoomServiceClient;

