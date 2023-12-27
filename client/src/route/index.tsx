import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { IRoutes } from '../types/route'
import pageRoutes from './module/pageRoute'
const routes: IRoutes[] = [
  ...pageRoutes
]

const Router = ()=>{
  const route = useRoutes(routes)
  return route
}


export default Router