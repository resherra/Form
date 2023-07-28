import React from "react"
import Container from "../Container"
import SideBar from "./SideBar"
import ResSideBar from "./ResSideBar"

export default function Thanks() {
  return (
    <Container>
      <SideBar step={"4"} />
      <ResSideBar step={"4"} />

      <div className={`max-w-full md:w-[25rem] m-auto grid gap-8 md:gap-0 h-full py-10 text-center`}>
        <img className="m-auto w-14 md:w-20 pb-0 md:pb-7" src="/icon-thank-you.svg" alt="" />
        <div className={`flex flex-col gap-3 md:gap-10`}>
          <p className={`text-2xl md:text-3xl font-bold text-marineBlue`}>Thank you!</p>
          <p className={`text-xs md:text-base text-coolGray`}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </Container>
  )
}
