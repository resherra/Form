import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { Switch } from "@headlessui/react"
import { useImmerReducer } from "use-immer"
import { useNavigate, Link } from "react-router-dom"

//components
import Container from "../Container"
import SideBar from "./SideBar"
import dispatchContext from "../dispatchContext"

export default function SelectPlan() {
  const navigate = useNavigate()
  const [enabled, setEnabled] = useState(false)
  const appDispatch = useContext(dispatchContext)

  const initialState = {
    plan: { value: "", price: 0, hasErrors: false, message: "" },
    yearly: false,
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "plan":
        draft.plan.hasErrors = false
        draft.plan.value = action.value
        draft.plan.price = action.price
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
    dispatch({ type: "plan", value: state.plan.value, price: state.plan.price })
    dispatch({ type: "submit" })
  }

  useEffect(() => {
    if (state.submitCount > 0) {
      navigate("/add-ons")
      appDispatch({ type: "selectPlan", data: { type: state.plan.value, yearly: enabled, price: state.plan.price } })
    }
  }, [state.submitCount])

  return (
    <Container>
      <SideBar step={"2"} />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>select your plan</h3>
          <h5 className={`text-sm text-coolGray font-light`}>You have the option of monthly or yearly billing</h5>
        </div>
        <ul className={`grid w-full grid-cols-3 gap-4`}>
          <li>
            <input type="checkbox" value="arcade" checked={state.plan.value === "arcade"} onChange={(e) => dispatch({ type: "plan", value: e.target.value, price: !enabled ? 9 : 90 })} id="arcade-option" className="hidden peer" />
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
            <input type="checkbox" value="advanced" checked={state.plan.value === "advanced"} onChange={(e) => dispatch({ type: "plan", value: e.target.value, price: !enabled ? 12 : 120 })} id="advanced-option" className="hidden peer" />
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
            <input type="checkbox" value="pro" checked={state.plan.value === "pro"} onChange={(e) => dispatch({ type: "plan", value: e.target.value, price: !enabled ? 15 : 150 })} id="pro-option" className="hidden peer" />
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
          <Switch onChange={setEnabled} className={`${enabled ? "bg-marineBlue" : "bg-lightGray"} relative inline-flex h-5 w-9 items-center rounded-full`}>
            <span className="sr-only">Switch yearly</span>
            <span className={`${enabled ? "translate-x-5" : "translate-x-1"} inline-block h-3 w-3 transform rounded-full bg-white transition`} />
          </Switch>
          <div className={`font-semibold ` + (enabled ? `text-marineBlue` : `text-coolGray`)}>Yearly</div>
        </div>
        <div className={`mt-10 flex flex-row justify-between items-end`}>
          <Link to="/">
            <button className={`text-marineBlue text-sm font-semibold px-4 py-2`}>Go back</button>
          </Link>
          <button onClick={handleSubmit} className={`bg-marineBlue text-white text-sm font-semibold px-4 py-2 rounded-md`}>
            Next Step
          </button>
        </div>
      </div>
    </Container>
  )
}
