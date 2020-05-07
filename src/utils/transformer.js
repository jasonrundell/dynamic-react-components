import React from "react"
import Components from "../components"
const Transform = data => {
  console.log(data)
  let items = []
  Object.entries(data).forEach(([key, value]) => {
    const ComponentToRender = Components[key]
    items.push(<ComponentToRender {...value} key={key} />)
  })
  return items
}

export default Transform
