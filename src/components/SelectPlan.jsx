import React from "react"
import Container from "../Container"
import SideBar from "./SideBar"

export default function SelectPlan() {
  return (
    <Container>
      <SideBar />
      <div className={`px-20 py-12`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>select your plan</h3>
          <h5 className={`text-sm text-coolGray font-light`}>You have the option of monthly or yearly billing</h5>
        </div>

        <div className={`flex gap-5`}>
          <div>
            <div className={`max-w-min flex flex-col gap-7 border border-red-400 rounded-md py-4 pl-2 pr-10`}>
              <div>
                <img src="../public/icon-arcade.svg" alt="" />
              </div>
              <div>
                <div className={`text-marineBlue font-semibold text-sm`}>Arcade</div>
                <div className={`text-coolGray text-xs`}>$9/mo</div>
              </div>
            </div>
          </div>
          <div>
            <div className={`max-w-min flex flex-col gap-7 border border-red-400 rounded-md py-4 pl-2 pr-10`}>
              <div>
                <img src="../public/icon-arcade.svg" alt="" />
              </div>
              <div>
                <div className={`text-marineBlue font-semibold text-sm`}>Arcade</div>
                <div className={`text-coolGray text-xs`}>$9/mo</div>
              </div>
            </div>
          </div>
          <div>
            <div className={`max-w-min flex flex-col gap-7 border border-red-400 rounded-md py-4 pl-2 pr-10`}>
              <div>
                <img src="../public/icon-arcade.svg" alt="" />
              </div>
              <div>
                <div className={`text-marineBlue font-semibold text-sm`}>Arcade</div>
                <div className={`text-coolGray text-xs`}>$9/mo</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-sm flex bg-lightGray justify-center`}>
          <div>Monthly</div>
          <div>
            <img src="../public/toggle-icon.svg" alt="" />
          </div>
          <div>Yearly</div>
        </div>
        <div className={`mt-10 flex flex-row justify-between items-center`}>
          <button className={`text-marineBlue text-sm font-semibold`}>Go back</button>
          <button className={`bg-marineBlue text-white text-sm font-semibold px-4 py-2 rounded-md`}>Next Step</button>
        </div>
      </div>
    </Container>
  )
}
