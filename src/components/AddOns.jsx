import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useImmer, useImmerReducer } from "use-immer"

import Container from "../Container"
import dispatchContext from "../dispatchContext"
import stateContext from "../stateContext"
import SideBar from "./SideBar"

export default function AddOns() {
  const navigate = useNavigate()
  const appState = useContext(stateContext)
  const appDispatch = useContext(dispatchContext)

  const initialState = {
    ons: [],
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "addOn":
        draft.ons.push(action.value)
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function handleSubmit() {
    appDispatch({ type: "addOns", data: state.ons })
    navigate("/summary")
  }

  return (
    <Container>
      <SideBar step={"3"} />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>Pick add-ons</h3>
          <h5 className={`text-sm text-coolGray font-light`}>add-ons help enhance your gaming experience</h5>
        </div>
        {/*  games +$1/mo */}
        <div className={`grid w-full gap-4`}>
          <div>
            <input onChange={(e) => dispatch({ type: "addOn", value: e.target.value })} type="checkbox" value="Online Service" id="online-service" className="hidden peer" />
            <label htmlFor="online-service" className="inline-flex items-center justify-between w-full px-5 py-4 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue font-semibold`}>Online Service</div>
                  <div className={`text-coolGray text-sm`}>Access to muliplayer games</div>
                </div>
                <div className={`text-sm text-purplishBlue font-semibold`}>{appState.plan.yearly ? "+$10/yr" : "+$1/mo"}</div>
              </div>
            </label>
          </div>
          <div>
            <input onChange={(e) => dispatch({ type: "addOn", value: e.target.value })} type="checkbox" value="Larger Storage" id="Larger Storage" className="hidden peer" />
            <label htmlFor="Larger Storage" className="inline-flex items-center justify-between w-full px-5 py-4 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue font-semibold`}>Larger Storage</div>
                  <div className={`text-coolGray text-sm`}>Extra 1TB of cloud save</div>
                </div>
                <div className={`text-sm text-purplishBlue font-semibold`}>{appState.plan.yearly ? "+$20/yr" : "+$2/mo"}</div>
              </div>
            </label>
          </div>
          <div>
            <input onChange={(e) => dispatch({ type: "addOn", value: e.target.value })} type="checkbox" value="Customizable profile" id="Customizable profile" className="hidden peer" />
            <label htmlFor="Customizable profile" className="inline-flex items-center justify-between w-full px-5 py-4 border border-lightGray rounded-lg cursor-pointer peer-checked:border-purplishBlue hover:bg-alabaster">
              <div className={`w-full flex justify-between items-center`}>
                <div>
                  <div className={`text-marineBlue font-semibold`}>Customizable profile</div>
                  <div className={`text-coolGray text-sm`}>Custom theme on your profile</div>
                </div>
                <div className={`text-sm text-purplishBlue font-semibold`}>{appState.plan.yearly ? "+$20/yr" : "+$2/mo"}</div>
              </div>
            </label>
          </div>
        </div>
        <div className={`mt-10 flex flex-row justify-between items-end`}>
          <Link to={"/select-plan"}>
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
