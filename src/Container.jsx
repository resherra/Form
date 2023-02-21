import React from "react"

export default function Container(props) {
  return (
    <main className={`bg-blue-100 min-h-screen flex`}>
      <div className={`bg-white w-[50rem] h-[30rem] m-auto flex rounded-xl`}>{props.children}</div>
    </main>
  )
}
