import React, { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Container from "../Container"
import stateContext from "../stateContext"
import SideBar from "./SideBar"

export default function Summary() {
  const appState = useContext(stateContext)
  const navigate = useNavigate()

  useEffect(() => {
    const totalCost = appState.ons.reduce((acc, obj) => acc + obj.cost, 0)
    console.log(totalCost)
  }, [])

  function handleSubmit() {
    navigate("/appreciation")
  }
  return (
    <Container>
      <SideBar step={"4"} />
      <div className={`w-[25rem] m-auto grid h-full py-10`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>Finishing up</h3>
          <h5 className={`text-sm text-coolGray font-light`}>Double-check everything looks OK before confirming.</h5>
        </div>
        <div className="w-full self-start">
          <div className="bg-gray-100 rounded-xl p-4">
            <div className={`flex justify-between items-center p-2`}>
              <div className={`flex flex-col justify-between`}>
                <div className={`text-marineBlue text-sm font-medium`}>{appState.plan.type + (appState.plan.yearly ? " (Yearly)" : " (Monthly)")}</div>
                <div className={`text-sm text-coolGray underline underline-offset-2`}>
                  <Link to={`/select-plan`}>Change</Link>
                </div>
              </div>
              <div className={`text-marineBlue text-sm font-medium`}>{"$" + appState.plan.cost + (appState.plan.yearly ? "/yr" : "/mo")}</div>
            </div>
            <hr className="h-px m-auto w-11/12 my-3 bg-lightGray" />
            <div>
              {appState.ons.map((item, i) => {
                if (item.ons !== "") {
                  return (
                    <div key={i} className={`flex justify-between p-1`}>
                      <div className={`text-sm text-coolGray`}>{item.ons}</div>
                      <div className={`text-sm text-marineBlue`}>{"+$" + item.cost + (appState.plan.yearly ? "/yr" : "/mo")}</div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className={`flex justify-between pt-5 px-6`}>
            <div className={`text-sm text-coolGray`}>{`Total` + (appState.plan.yearly ? " (per year)" : " (per Month)")}</div>
            <div className={`text-purplishBlue font-bold`}>{"+$" + appState.totalCost + (appState.plan.yearly ? "/yr" : "/mo")}</div>
          </div>
        </div>
        <div className={`flex flex-row justify-between items-end`}>
          <Link to={"/add-ons"}>
            <button className={`text-marineBlue text-sm font-medium px-4 py-2`}>Go back</button>
          </Link>
          <button onClick={handleSubmit} className={`bg-marineBlue text-white text-sm font-medium px-4 py-2 rounded-md`}>
            Next Step
          </button>
        </div>
      </div>
    </Container>
  )
}
