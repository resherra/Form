import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Container from "../Container"
import stateContext from "../stateContext"
import SideBar from "./SideBar"

export default function Summary() {
  const appState = useContext(stateContext)

  function handleSubmit() {
    console.log("submitted succefuly")
  }

  return (
    <Container>
      <SideBar step={"4"} />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>Pick add-ons</h3>
          <h5 className={`text-sm text-coolGray font-light`}>add-ons help enhance your gaming experience</h5>
        </div>
        <div className="w-full ">
          <div className="bg-gray-100">
            <div>
              <div className={`flex justify-between`}>
                <div className={`text-marineBlue font-semibold`}>{appState.plan.type + (appState.plan.yearly ? " (Yearly)" : " (Monthly)")}</div>
                <div className={` text-marineBlue font-semibold`}>{"$" + appState.plan.price + (appState.plan.yearly ? "/yr" : "/mo")}</div>
              </div>
              <div className={`text-sm text-coolGray underline underline-offset-2`}>
                <Link to={`/select-plan`}>Change</Link>
              </div>
            </div>
            <hr class="h-px m-auto w-11/12 my-4 bg-lightGray border-0" />
            {appState.ons.map((item) => {
              if (item.ons !== "") {
                return (
                  <div className={`flex justify-between p-2`}>
                    <div className={`text-sm text-coolGray`}>{item.ons}</div>
                    <div className={`text-sm text-marineBlue`}>{"+$" + item.cost + (appState.plan.yearly ? "/yr" : "/mo")}</div>
                  </div>
                )
              }
            })}
          </div>
          <div className={`flex justify-between pt-5`}>
            <div className={`text-sm text-coolGray`}>{`Total` + (appState.plan.yearly ? " (per year)" : " (per Month)")}</div>
            <div className={`text-purplishBlue font-bold`}>$120/yr</div>
          </div>
        </div>
        <div className={`mt-10 flex flex-row justify-between items-end`}>
          <Link to={"/add-ons"}>
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
