import React from "react"

export default function Container(props) {
  return (
    <main className={`bg-blue-100 min-h-screen w-screen flex px-2`}>
      <div className={`bg-white w-full md:w-[50rem] md:h-[30rem] p-2 md:p-0 m-auto flex flex-col md:flex-row rounded-xl`}>{props.children}</div>
    </main>
  )
}
