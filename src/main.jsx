import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

//Components

import AddOns from "./components/AddOns"
import MainForm from "./components/MainForm"
import SelectPlan from "./components/SelectPlan"
import Summary from "./components/Summary"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainForm />} />
      <Route path="/select-plan" element={<SelectPlan />} />
      <Route path="/add-ons" element={<AddOns />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  </BrowserRouter>
)
