import React from "react"
import Container from "../Container"
import SideBar from "./SideBar"

export default function Thanks() {
  return (
    <Container>
      <SideBar step={"4"} />
      <div className={`w-[28rem] m-auto text-center`}>
        <img className="m-auto pb-7" src="/icon-thank-you.svg" alt="" />
        <div className={`flex flex-col gap-3`}>
          <p className={`text-3xl font-bold text-marineBlue`}>Thank you!</p>
          <p className={`text-coolGray`}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </Container>
  )
}
