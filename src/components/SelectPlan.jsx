import React, { useEffect } from "react"
import Container from "../Container"
import SideBar from "./SideBar"
import { useState } from "react"
import { Switch } from "@headlessui/react"
import { useNavigate } from "react-router-dom"
import { useImmerReducer } from "use-immer"

export default function SelectPlan() {
  const [enabled, setEnabled] = useState(false)
  const navigate = useNavigate()
  const initialState = {
    arcade: { hasErrors: false, checkCount: 0 },
    advanced: { hasErrors: false, checkCount: 0 },
    pro: { hasErrors: false, checkCount: 0 },
    message: "",
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "arcade":
        return
      case "advanced":
        return
      case "pro":
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function handleGoBack() {
    console.log("hello")
    navigate("/")
  }

  function handleSubmit() {
    navigate(`/add-ons`)
  }

  return (
    <Container>
      <SideBar />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>select your plan</h3>
          <h5 className={`text-sm text-coolGray font-light`}>You have the option of monthly or yearly billing</h5>
        </div>
        <div className={`grid grid-flow-col grid-cols-3 gap-4`}>
          <button className={`flex flex-col gap-10 p-3 focus:bg-alabaster hover:bg-alabaster border border-lightGray focus:border-purplishBlue rounded-lg`}>
            <div>
              <img src="/icon-arcade.svg" alt="" />
            </div>
            <div className={`flex flex-col items-start`}>
              <div className={`text-marineBlue text-sm font-semibold`}>Arcade</div>
              <div className={`text-coolGray text-xs`}>{!enabled ? "$9/mo" : "$90/yr"}</div>
              {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
            </div>
          </button>
          <button className={`flex flex-col gap-10 p-3 focus:bg-alabaster hover:bg-alabaster border border-lightGray focus:border-purplishBlue rounded-lg`}>
            <div>
              <img src="/icon-advanced.svg" alt="" />
            </div>
            <div className={`flex flex-col items-start`}>
              <div className={`text-marineBlue text-sm font-semibold`}>Advanced</div>
              <div className={`text-coolGray text-xs`}>{!enabled ? "$12/mo" : "$120/yr"}</div>
              {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
            </div>
          </button>{" "}
          <button className={`flex flex-col gap-10 p-3 focus:bg-alabaster hover:bg-alabaster border border-lightGray focus:border-purplishBlue rounded-lg`}>
            <div>
              <img src="/icon-pro.svg" alt="" />
            </div>
            <div className={`flex flex-col items-start`}>
              <div className={`text-marineBlue text-sm font-semibold`}>Pro</div>
              <div className={`text-coolGray text-xs`}>{!enabled ? "$15/mo" : "$150/yr"}</div>
              {enabled && <div className={`text-xs text-marineBlue font-semibold`}>2 months free</div>}
            </div>
          </button>
        </div>
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
