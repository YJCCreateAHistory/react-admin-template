import React from 'react'
import './index.less'
interface ISvgIconProps {
  svg: any;
  width: string;
  height: string;
  fill?: string;
  className?: string;
}

const Svg = (props: ISvgIconProps) => {
  const { svg, height, width, fill, className } = props, result = {}
  const getStyle = (height_1, width_1, fill_1) => {
    if (height_1 != undefined) {
      result['height'] = height_1
    }
    if (width_1 != undefined) {
      result['width'] = width_1
    }
    if (fill_1 != undefined) {
      result['fill'] = fill_1
    }
    return result
  }
  const classNames = `svg-default-style ${className}`
  return (
    <div className={classNames} style={getStyle(height, width, fill)}>
      <svg 
        width={width} 
        height={height} 
        fill={fill} 
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg" 
        dangerouslySetInnerHTML={{ __html: atob(svg.split(',')[1]) }} >
      </svg>
    </div>
  )
}



export default Svg