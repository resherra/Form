import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useImmer, useImmerReducer } from "use-immer"

import Container from "../Container"
import dispatchContext from "../dispatchContext"
import stateContext from "../stateContext"
import SideBar from "./SideBar"
import ResSideBar from "./ResSideBar"

export default function AddOns() {
  const navigate = useNavigate()
  const appState = useContext(stateContext)
  const appDispatch = useContext(dispatchContext)

  const initialState = {
    first: { checked: false, ons: "", cost: 0 },
    second: { checked: false, ons: "", cost: 0 },
    third: { checked: false, ons: "", cost: 0 },
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "firstChecked":
        draft.first.checked = true
        if (draft.first.checked) {
          draft.first.ons = action.data.ons
          draft.first.cost = action.data.cost
        }
        return
      case "firstUnchecked":
        draft.first.checked = false
        if (!draft.first.checked) {
          draft.first.ons = ""
          draft.first.cost = 0
        }
        return
      case "secondChecked":
        draft.second.checked = true
        if (draft.second.checked) {
          draft.second.ons = action.data.ons
          draft.second.cost = action.data.cost
        }
        return
      case "secondUnchecked":
        draft.second.checked = false
        if (!draft.second.checked) {
          draft.second.ons = ""
          draft.second.cost = 0
        }
        return
      case "thirdChecked":
        draft.third.checked = true
        if (draft.third.checked) {
          draft.third.ons = action.data.ons
          draft.third.cost = action.data.cost
        }
        return
      case "thirdUnchecked":
        draft.third.checked = false
        if (!draft.third.checked) {
          draft.third.ons = ""
          draft.third.cost = 0
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function handleSubmit() {
    appDispatch({ type: "addOns", data: [state.first, state.second, state.third] })
    appDispatch({ type: "total" })
    navigate("/summary")
  }

  return (
    <Container>
      <SideBar step={"3"} />
      <ResSideBar step={"3"} />

      <div className={`max-w-full md:w-[25rem] m-auto grid gap-8 md:gap-0 h-full py-10`}>
        <div>
          <h3 className={`text-lg md:text-2xl text-marineBlue font-bold`}>Pick add-ons</h3>
          <h5 className={`text-xs md:text-sm text-coolGray font-light`}>add-ons help enhance your gaming experience</h5>
        </div>
        <div className={`self-center flex flex-col gap-3`}>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch({ type: "firstChecked", data: { ons: "Online Service", cost: appState.plan.yearly ? 10 : 1 } })
                } else {
                  dispatch({ type: "firstUnchecked", data: { ons: "", cost: 0 } })
                }
              }}
              value="Online Service"
              id="online-service"
              className="hidden peer"
            />
            <label htmlFor="online-service" className="inline-flex items-center justify-between w-full px-3 md:px-6 py-2 md:py-3 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue peer-checked:bg-alabaster hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue text-xs md:text-sm font-medium pb-2`}>Online Service</div>
                  <div className={`text-coolGray text-[0.6rem] md:text-sm`}>Access to muliplayer games</div>
                </div>
                <div className={`text-xs md:text-sm text-purplishBlue font-medium`}>{appState.plan.yearly ? "+$10/yr" : "+$1/mo"}</div>
              </div>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch({ type: "secondChecked", data: { ons: "Larger Storage", cost: appState.plan.yearly ? 20 : 2 } })
                } else {
                  dispatch({ type: "secondUnchecked", data: { ons: "", cost: 0 } })
                }
              }}
              value="Larger Storage"
              id="Larger Storage"
              className="hidden peer"
            />
            <label htmlFor="Larger Storage" className="inline-flex items-center justify-between w-full px-3 md:px-6 py-2 md:py-3 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue peer-checked:bg-alabaster hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue text-xs md:text-sm font-medium pb-2`}>Larger Storage</div>
                  <div className={`text-coolGray text-[0.6rem]  md:text-sm`}>Extra 1TB of cloud save</div>
                </div>
                <div className={`text-xs md:text-sm text-purplishBlue font-medium`}>{appState.plan.yearly ? "+$20/yr" : "+$2/mo"}</div>
              </div>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch({ type: "thirdChecked", data: { ons: "Customizable profile", cost: appState.plan.yearly ? 20 : 2 } })
                } else {
                  dispatch({ type: "thirdUnchecked", data: { ons: "", cost: 0 } })
                }
              }}
              value="Customizable profile"
              id="Customizable profile"
              className="hidden peer"
            />
            <label htmlFor="Customizable profile" className="inline-flex items-center justify-between w-full px-3 md:px-6 py-2 md:py-3 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue peer-checked:bg-alabaster hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue text-xs md:text-sm font-medium pb-2`}>Customizable profile</div>
                  <div className={`text-coolGray text-[0.6rem] md:text-sm`}>Custom theme on your profile</div>
                </div>
                <div className={`text-xs md:text-sm text-purplishBlue font-medium`}>{appState.plan.yearly ? "+$20/yr" : "+$2/mo"}</div>
              </div>
            </label>
          </div>
        </div>
        <div className={`flex flex-row justify-between items-end`}>
          <Link to={"/select-plan"}>
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
