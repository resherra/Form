import React, { useEffect } from "react"
import Container from "../Container"
import SideBar from "./SideBar"
import { useState } from "react"
import { Switch } from "@headlessui/react"
import { useImmerReducer } from "use-immer"

export default function SelectPlan() {
  const [enabled, setEnabled] = useState(false)

  const initialState = {
    plan: { value: "", hasErrors: false, message: "" },
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "plan":
        draft.plan.hasErrors = false
        draft.plan.value = action.value
        if (!draft.plan.value) {
          draft.plan.hasErrors = true
          draft.plan.message = "You must choose a plan!"
        }
        return
      case "submit":
        if (!draft.plan.hasErrors) {
          draft.submitCount++
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function handleSubmit() {
    dispatch({ type: "plan", value: state.plan.value })
    dispatch({ type: "submit" })
  }

  useEffect(() => {
    if (state.submitCount > 0) {
      console.log("submitted succefuly")
    }
  }, [state.submitCount])

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
            <input type="checkbox" value="arcade" checked={state.plan.value === "arcade"} onChange={(e) => dispatch({ type: "plan", value: e.target.value })} id="arcade-option" className="hidden peer" />
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
            <input type="checkbox" value="advanced" checked={state.plan.value === "advanced"} onChange={(e) => dispatch({ type: "plan", value: e.target.value })} id="advanced-option" className="hidden peer" />
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
            <input type="checkbox" value="pro" checked={state.plan.value === "pro"} onChange={(e) => dispatch({ type: "plan", value: e.target.value })} id="pro-option" className="hidden peer" />
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
        <div className={`text-strawberryRed font-semibold text-xs`}>{state.plan.hasErrors && state.plan.message}</div>
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
