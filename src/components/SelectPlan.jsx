import React, { useEffect } from "react"
import Container from "../Container"
import SideBar from "./SideBar"
import { useState } from "react"
import { Switch } from "@headlessui/react"
import { useNavigate } from "react-router-dom"

export default function SelectPlan() {
  const [enabled, setEnabled] = useState(false)
  const [plan, setPlan] = useState("")

  function handleSubmit() {
    if (plan === "") {
      console.log("error happened")
    }
  }

  function handleGoBack() {
    console.log("go back!")
  }

  return (
    <Container>
      <SideBar />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>select your plan</h3>
          <h5 className={`text-sm text-coolGray font-light`}>You have the option of monthly or yearly billing</h5>
        </div>
        <ul className={`grid w-full grid-cols-3 gap-4`}>
          <li>
            <input type="checkbox" checked={plan === "arcade"} onChange={() => setPlan("arcade")} id="arcade-option" className="hidden peer" />
            <label htmlFor="arcade-option" className="inline-flex items-center justify-between w-full p-5 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div>
                <img src="/icon-arcade.svg" alt="" className={`pb-10`} />
                <div className={`text-marineBlue text-sm font-semibold`}>Arcade</div>
                <div className={`text-coolGray text-xs`}>{!enabled ? "$9/mo" : "$90/yr"}</div>
                {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" checked={plan === "advanced"} onChange={() => setPlan("advanced")} id="advanced-option" value="" className="hidden peer" />
            <label htmlFor="advanced-option" className="inline-flex items-center justify-between w-full p-5 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div>
                <img src="/icon-advanced.svg" alt="" className={`pb-10`} />
                <div className={`text-marineBlue text-sm font-semibold`}>Advanced</div>
                <div className={`text-coolGray text-xs`}>{!enabled ? "$12/mo" : "$120/yr"}</div>
                {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" checked={plan === "pro"} onChange={() => setPlan("pro")} id="pro-option" value="" className="hidden peer" />
            <label htmlFor="pro-option" className="inline-flex items-center justify-between w-full p-5 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div>
                <img src="/icon-pro.svg" alt="" className={`pb-10`} />
                <div className={`text-marineBlue text-sm font-semibold`}>Pro</div>
                <div className={`text-coolGray text-xs`}>{!enabled ? "$15/mo" : "$150/yr"}</div>
                {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
              </div>
            </label>
          </li>
        </ul>
        <div className={`flex flex-row justify-center gap-3 items-center bg-alabaster rounded-lg text-sm py-2 mt-8`}>
          <div className={`font-semibold ` + (enabled ? `text-coolGray` : `text-marineBlue`)}>Monthly</div>
          <Switch checked={enabled} onChange={setEnabled} className={`${enabled ? "bg-marineBlue" : "bg-lightGray"} relative inline-flex h-5 w-9 items-center rounded-full`}>
            <span className="sr-only">Switch yearly</span>
            <span className={`${enabled ? "translate-x-5" : "translate-x-1"} inline-block h-3 w-3 transform rounded-full bg-white transition`} />
          </Switch>
          <div className={`font-semibold ` + (enabled ? `text-marineBlue` : `text-coolGray`)}>Yearly</div>
        </div>
        <div className={`mt-10 flex flex-row justify-between items-end`}>
          <button onClick={handleGoBack} className={`text-marineBlue text-sm font-semibold px-4 py-2`}>
            Go back
          </button>
          <button onClick={handleSubmit} className={`bg-marineBlue text-white text-sm font-semibold px-4 py-2 rounded-md`}>
            Next Step
          </button>
        </div>
      </div>
    </Container>
  )
}
