import React from 'react'
import DataResource from '@/pages/Resource/module/DataResource'
import ManpowerResource from '@/pages/Resource/module/ManpowerResource'
import Main from '@/pages/Main'
import { IMapRoutes } from '@/types/route'
const mapRoutes: IMapRoutes[] =  [
  {
    path: '/home',
    children: [
      {
        path: '/home',
        components: <Main/>
      }
    ]
  },
  {
    path: '/resource',
    children: [
      {
        path: '/resource/list',
        components: <DataResource/>
      },
      {
        path: '/resource/personal',
        components: <ManpowerResource/>
      }
    ]
  },
]

export default mapRoutes