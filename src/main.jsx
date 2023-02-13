import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useImmer, useImmerReducer } from "use-immer"
import "./index.css"

//Components

import AddOns from "./components/AddOns"
import MainForm from "./components/MainForm"
import SelectPlan from "./components/SelectPlan"
import Summary from "./components/Summary"

//Context
import stateContext from "./stateContext"
import dispatchContext from "./dispatchContext"

export default function Main() {
  const initialState = {
    user: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    plan: {
      type: "",
      yearly: localStorage.getItem("yearly"),
    },
    ons: [],
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "register":
        draft.user = action.data
        return
      case "selectPlan":
        draft.plan = action.data
        return
      case "addOns":
        draft.ons = action.data
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  //store user credentials
  useEffect(() => {
    localStorage.setItem("name", state.user.name)
    localStorage.setItem("email", state.user.email)
    localStorage.setItem("phoneNumber", state.user.phoneNumber)
  }, [state.user])

  //store user plan
  useEffect(() => {
    localStorage.setItem("type", state.plan.type)
    localStorage.setItem("yearly", state.plan.yearly)
  }, [state.plan])

  //store ons
  useEffect(() => {
    localStorage.setItem("ons", state.ons)
  }, [state.ons])

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainForm />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </dispatchContext.Provider>
    </stateContext.Provider>
  )
}
