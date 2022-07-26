// package: user.v1
// file: user/v1/user.proto

import * as user_v1_user_pb from "../../user/v1/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_v1_user_pb.CreateUserRequest;
  readonly responseType: typeof user_v1_user_pb.CreateUserResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly CreateUser: UserServiceCreateUser;
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

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createUser(
    requestMessage: user_v1_user_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_v1_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: user_v1_user_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: user_v1_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
}

