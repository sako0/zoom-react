// package: zoom.v1
// file: zoom/v1/zoom.proto

import * as jspb from "google-protobuf";

export class CreateZoomRequest extends jspb.Message {
  getAuth0Id(): string;
  setAuth0Id(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoomRequest): CreateZoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoomRequest;
  static deserializeBinaryFromReader(message: CreateZoomRequest, reader: jspb.BinaryReader): CreateZoomRequest;
}

export namespace CreateZoomRequest {
  export type AsObject = {
    auth0Id: string,
  }
}

export class CreateZoomResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getJoinUrl(): string;
  setJoinUrl(value: string): void;

  getStartUrl(): string;
  setStartUrl(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoomResponse): CreateZoomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoomResponse;
  static deserializeBinaryFromReader(message: CreateZoomResponse, reader: jspb.BinaryReader): CreateZoomResponse;
}

export namespace CreateZoomResponse {
  export type AsObject = {
    id: number,
    createdAt: string,
    joinUrl: string,
    startUrl: string,
    topic: string,
  }
}

