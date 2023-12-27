declare module '*.svg' {
  interface Svg {
    content: string;
    id: string;
    viewBox: string;
    node: any;
  }
  const svg: Svg;
  export default svg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.gif' {
  const gif: string;
  export default gif;
}

// 这里用于扩充window对象上的值
declare interface Window {
  baseUrl?: string,
  authUrl?: string,
  fridayAppId?: string,
  capsuleUrl?: string,
  shopShareUrl?: string;
  shopCustomerServiceQQ?: string;
  wxPayInit?: boolean;
  env?: string;
  hostPrefix?: string;
  FRIDAY_COMMON_DATA?: any,
  fingerprint?: string,
  _faq?: any
  appFridayId?: string,
  resourceServerUrl?: string;
  campusHost?: string;
  classAnalyseAppId?: string;
}