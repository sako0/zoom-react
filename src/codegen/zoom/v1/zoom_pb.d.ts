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

export class GetZoomListRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getZoomToken(): string;
  setZoomToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoomListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoomListRequest): GetZoomListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoomListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoomListRequest;
  static deserializeBinaryFromReader(message: GetZoomListRequest, reader: jspb.BinaryReader): GetZoomListRequest;
}

export namespace GetZoomListRequest {
  export type AsObject = {
    organizationId: number,
    zoomToken: string,
  }
}

export class GetZoomListResponse extends jspb.Message {
  clearZoomListList(): void;
  getZoomListList(): Array<ZoomInfo>;
  setZoomListList(value: Array<ZoomInfo>): void;
  addZoomList(value?: ZoomInfo, index?: number): ZoomInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoomListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoomListResponse): GetZoomListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoomListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoomListResponse;
  static deserializeBinaryFromReader(message: GetZoomListResponse, reader: jspb.BinaryReader): GetZoomListResponse;
}

export namespace GetZoomListResponse {
  export type AsObject = {
    zoomListList: Array<ZoomInfo.AsObject>,
  }
}

export class ZoomInfo extends jspb.Message {
  getZoomUserId(): string;
  setZoomUserId(value: string): void;

  clearZoomMeetingListList(): void;
  getZoomMeetingListList(): Array<ZoomMeetingInfo>;
  setZoomMeetingListList(value: Array<ZoomMeetingInfo>): void;
  addZoomMeetingList(value?: ZoomMeetingInfo, index?: number): ZoomMeetingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomInfo): ZoomInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomInfo;
  static deserializeBinaryFromReader(message: ZoomInfo, reader: jspb.BinaryReader): ZoomInfo;
}

export namespace ZoomInfo {
  export type AsObject = {
    zoomUserId: string,
    zoomMeetingListList: Array<ZoomMeetingInfo.AsObject>,
  }
}

export class ZoomMeetingInfo extends jspb.Message {
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

  getHostId(): string;
  setHostId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomMeetingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomMeetingInfo): ZoomMeetingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomMeetingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomMeetingInfo;
  static deserializeBinaryFromReader(message: ZoomMeetingInfo, reader: jspb.BinaryReader): ZoomMeetingInfo;
}

export namespace ZoomMeetingInfo {
  export type AsObject = {
    id: number,
    createdAt: string,
    joinUrl: string,
    startUrl: string,
    topic: string,
    hostId: string,
  }
}

