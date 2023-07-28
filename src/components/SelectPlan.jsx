import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { Switch } from "@headlessui/react"
import { useImmer, useImmerReducer } from "use-immer"
import { useNavigate, Link } from "react-router-dom"

//components
import Container from "../Container"
import SideBar from "./SideBar"
import dispatchContext from "../dispatchContext"
import ResSideBar from "./ResSideBar"

export default function SelectPlan() {
  const navigate = useNavigate()
  const appDispatch = useContext(dispatchContext)

  const initialState = {
    plan: { value: "", cost: 0 },
    yearly: false,
    hasErrors: false,
    message: "",
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "yearly":
        //test
        draft.yearly = !draft.yearly
        if (draft.plan.cost <= 15) {
          draft.plan.cost = draft.plan.cost * 10
        } else {
          draft.plan.cost = draft.plan.cost / 10
        }
        return
      case "plan":
        draft.hasErrors = false
        draft.plan.value = action.data.value
        draft.plan.cost = action.data.cost
        if (!draft.plan.value) {
          draft.hasErrors = true
          draft.message = "You must choose a plan!"
        }
        return
      case "submit":
        if (!draft.hasErrors) {
          navigate(`/add-ons`)
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    appDispatch({ type: "selectPlan", data: { type: state.plan.value, yearly: state.yearly, cost: state.plan.cost } })
  }, [state.yearly, state.plan])

  function handleSubmit() {
    dispatch({ type: "plan", data: { value: state.plan.value, cost: state.plan.cost } })
    dispatch({ type: "submit" })
  }

  return (
    <Container>
      <SideBar step={"2"} />
      <ResSideBar step={"2"} />
      <div className={`max-w-full md:w-[25rem] m-auto grid gap-8 md:gap-0 h-full py-10`}>
        <div>
          <h3 className={`text-lg md:text-2xl text-marineBlue font-bold`}>select your plan</h3>
          <h5 className={`text-xs md:text-sm text-coolGray font-light`}>You have the option of monthly or yearly billing</h5>
        </div>
        <div className={`grid w-full grid-cols-3 gap-2 md:gap-4`}>
          <div>
            <input type="checkbox" value="Arcade" checked={state.plan.value === "Arcade"} onChange={(e) => dispatch({ type: "plan", data: { value: e.target.value, cost: state.yearly ? 90 : 9 } })} id="arcade-option" className="hidden peer" />
            <label htmlFor="arcade-option" className="inline-flex items-center justify-between w-full p-2 md:p-4 border border-lightGray rounded-lg cursor-pointer hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster">
              <div>
                <img src="/icon-arcade.svg" alt="" className={`pb-6 md:pb-8 w-6 md:w-10`} />
                <div className={`text-marineBlue text-xs md:text-sm font-medium pb-1`}>Arcade</div>
                <div className={`text-coolGray text-[0.5rem] md:text-xs pb-1`}>{!state.yearly ? "$9/mo" : "$90/yr"}</div>
                {state.yearly && <div className={`text-[0.5rem] md:text-xs text-marineBlue`}>2 months free</div>}
              </div>
            </label>
          </div>
          <div>
            <input type="checkbox" value="Advanced" checked={state.plan.value === "Advanced"} onChange={(e) => dispatch({ type: "plan", data: { value: e.target.value, cost: state.yearly ? 120 : 12 } })} id="advanced-option" className="hidden peer" />
            <label htmlFor="advanced-option" className="inline-flex items-center justify-between w-full p-2 md:p-4 border border-lightGray rounded-lg cursor-pointer hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster">
              <div>
                <img src="/icon-advanced.svg" alt="" className={`pb-6 md:pb-8 w-6 md:w-10`} />
                <div className={`text-marineBlue text-xs md:text-sm font-medium pb-1`}>Advanced</div>
                <div className={`text-coolGray text-[0.5rem] md:text-xs pb-1`}>{!state.yearly ? "$12/mo" : "$120/yr"}</div>
                {state.yearly && <div className={`text-[0.5rem] md:text-xs text-marineBlue`}>2 months free</div>}
              </div>
            </label>
          </div>
          <div>
            <input type="checkbox" value="Pro" checked={state.plan.value === "Pro"} onChange={(e) => dispatch({ type: "plan", data: { value: e.target.value, cost: state.yearly ? 150 : 15 } })} id="pro-option" className="hidden peer" />
            <label htmlFor="pro-option" className="inline-flex items-center justify-between w-full p-2 md:p-4 border border-lightGray rounded-lg cursor-pointer hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster">
              <div>
                <img src="/icon-pro.svg" alt="" className={`pb-6 md:pb-8 w-6 md:w-10`} />
                <div className={`text-marineBlue text-xs md:text-sm font-medium pb-1`}>Pro</div>
                <div className={`text-coolGray text-[0.5rem] md:text-xs pb-1`}>{!state.yearly ? "$15/mo" : "$150/yr"}</div>
                {state.yearly && <div className={`text-[0.5rem] md:text-xs text-marineBlue`}>2 months free</div>}
              </div>
            </label>
          </div>
        </div>
        {state.hasErrors && <div className={`text-strawberryRed font-semibold text-[0.5rem] md:text-xs`}>{state.message}</div>}
        <div className={`flex flex-row justify-center gap-2 md:gap-3 items-center bg-alabaster rounded-lg text-xs md:text-sm  mt-2`}>
          <div className={`font-medium ` + (!state.yearly ? `text-marineBlue` : `text-coolGray`)}>Monthly</div>
          <Switch onChange={() => dispatch({ type: "yearly" })} className={`${state.yearly ? "bg-marineBlue" : "bg-lightGray"} relative inline-flex h-4 md:h-5 w-7 md:w-9 items-center rounded-full`}>
            <span className="sr-only">Switch yearly</span>
            <span className={`${state.yearly ? "translate-x-4 md:translate-x-5" : "translate-x-1"} inline-block h-2 w-2 md:w-3 md:h-3 transform rounded-full bg-white transition`} />
          </Switch>
          <div className={`font-medium ` + (state.yearly ? `text-marineBlue` : `text-coolGray`)}>Yearly</div>
        </div>

        <div className={`mt-10 flex flex-row justify-between items-end`}>
          <Link to="/">
            <button className={`text-marineBlue text-xs md:text-sm font-medium px-3 md:px-4  py-[6px] md:py-2`}>Go back</button>
          </Link>
          <button onClick={handleSubmit} className={`max-w-max bg-marineBlue text-white self-end text-xs md:text-sm font-medium  px-3 md:px-4  py-[6px] md:py-2 rounded-md`}>
            Next Step
          </button>
        </div>
      </div>
    </Container>
  )
}
