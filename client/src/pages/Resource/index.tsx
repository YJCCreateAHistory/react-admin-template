import React  from "react"
import { useLocation } from "react-router-dom"
import util from '@/util/route'
const ResourceCenter = ()=>{
  const routeQuery =useLocation()
  const returnComponent = util.getComponentByRoute(routeQuery)
  return (
    <div className="resource-center">
      {returnComponent}
    </div>
  )
}
export default ResourceCenter