import React from "react"

export default function Container(props) {
  return (
    <main className={`bg-blue-100 min-h-screen flex`}>
      <div className={`bg-white max-w-max m-auto grid grid-flow-col rounded-xl`}>{props.children}</div>
    </main>
  )
}
