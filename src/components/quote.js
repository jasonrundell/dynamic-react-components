import React from "react"

export default props => (
  <blockquote cite={props.cite}>
    <div dangerouslySetInnerHTML={{ __html: props.caption }} />
    <footer>{props.attribution}</footer>
  </blockquote>
)
