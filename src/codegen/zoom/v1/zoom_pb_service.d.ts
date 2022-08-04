// package: zoom.v1
// file: zoom/v1/zoom.proto

import * as zoom_v1_zoom_pb from "../../zoom/v1/zoom_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ZoomServiceCreateZoom = {
  readonly methodName: string;
  readonly service: typeof ZoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof zoom_v1_zoom_pb.CreateZoomRequest;
  readonly responseType: typeof zoom_v1_zoom_pb.CreateZoomResponse;
};

type ZoomServiceGetZoomList = {
  readonly methodName: string;
  readonly service: typeof ZoomService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof zoom_v1_zoom_pb.GetZoomListRequest;
  readonly responseType: typeof zoom_v1_zoom_pb.GetZoomListResponse;
};

export class ZoomService {
  static readonly serviceName: string;
  static readonly CreateZoom: ZoomServiceCreateZoom;
  static readonly GetZoomList: ZoomServiceGetZoomList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ZoomServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createZoom(
    requestMessage: zoom_v1_zoom_pb.CreateZoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: zoom_v1_zoom_pb.CreateZoomResponse|null) => void
  ): UnaryResponse;
  createZoom(
    requestMessage: zoom_v1_zoom_pb.CreateZoomRequest,
    callback: (error: ServiceError|null, responseMessage: zoom_v1_zoom_pb.CreateZoomResponse|null) => void
  ): UnaryResponse;
  getZoomList(requestMessage: zoom_v1_zoom_pb.GetZoomListRequest, metadata?: grpc.Metadata): ResponseStream<zoom_v1_zoom_pb.GetZoomListResponse>;
}

