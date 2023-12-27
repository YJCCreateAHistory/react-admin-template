import React from "react";
import AppContainer from "../../pages/App";
import Main from '../../pages/Main'
import { IRoutes } from '../../types/route'
import ResourceCenter from "@/pages/Resource"

const root:IRoutes[] = [
  {
    element: <AppContainer />,
    children: [
      {
        path: '/home',
        element: <Main />,
        meta: {
          requireAuth: true,
          title: 'Home',
          key: 'home'
        }
      },
      {
        path: '/resource',
        element: <ResourceCenter />,
        meta: {
          requireAuth: true,
          title: 'resource',
          key: 'resource'
        },
        children: [
          {
            path: '/resource/list',
            element: <ResourceCenter />,
          },
          {
            path: '/resource/personal',
            element: <ResourceCenter />,
          }
        ]
      }
    ]
  },
]

export default root