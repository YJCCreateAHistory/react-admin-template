interface IProps {
  path: string;
  element: React.ReactNode;
  meta?: {
    requireAuth?: boolean;
    title?: string
    key: string;
  },
  children?: IProps[]
}

export interface IRoutes {
  path?:string;
  element: React.ReactNode;
  children: IProps[]
}

export interface IMapRoutes {
  path: string;
  components?: React.ReactNode;
  children?: IMapRoutes[]
}

export interface IRouteQuery {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null | any;
}