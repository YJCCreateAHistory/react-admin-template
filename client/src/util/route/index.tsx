import { IRouteQuery, IMapRoutes } from "../../types/route"
import routes from '@/route/mapRoutes'
class RouteUtil {
  component: React.ReactNode
  recursionFindComponet = (pathname: string, routes: IMapRoutes[]) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === pathname) {
        this.component = routes[i].components
        return 
      }
      if (routes[i].children) {
        this.recursionFindComponet(pathname, routes[i].children as any)
      }
    }
    return null
  }
  getComponentByRoute = (query: IRouteQuery) => {
    const { pathname } = query
     this.recursionFindComponet(pathname, routes)
    return this.component
  }
}

export default new RouteUtil()
