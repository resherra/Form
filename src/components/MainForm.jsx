import React, { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import Container from "../Container"
import SideBar from "./SideBar"
import dispatchContext from "../dispatchContext"

export default function MainForm() {
  const appDispatch = useContext(dispatchContext)
  const navigate = useNavigate()

  const initialState = {
    name: { value: "", hasErrors: false, message: "", checkCount: 0 },
    email: { value: "", hasErrors: false, message: "", checkCount: 0 },
    phoneNumber: { value: "", hasErrors: false, message: "", checkCount: 0 },
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "nameNow":
        draft.name.hasErrors = false
        draft.name.value = action.value
        if (draft.name.value.length > 40) {
          draft.name.hasErrors = true
          draft.name.message = "Name can't be longer than 40 character"
        }
        if (draft.name.value && !/^([a-zA-Z ]+)$/.test(draft.name.value)) {
          draft.name.hasErrors = true
          draft.name.message = "Name can only contain characters"
        }
        return
      case "nameAfterDelay":
        if (!draft.name.hasErrors && draft.name.value.length < 3) {
          draft.name.hasErrors = true
          draft.name.message = "Name should be longer than three characters"
        }
        if (!draft.name.hasErrors) {
          draft.name.checkCount++
        }
        return
      case "emailNow":
        draft.email.hasErrors = false
        draft.email.value = action.value
        return
      case "emailAfterDelay":
        if (!/^\S+@.\S+$/.test(draft.email.value)) {
          draft.email.hasErrors = true
          draft.email.message = "The email address you provided is invalid"
        }
        if (!draft.email.hasErrors) {
          draft.email.checkCount++
        }
        return
      case "phoneNumberNow":
        draft.phoneNumber.hasErrors = false
        draft.phoneNumber.value = action.value
        if (!draft.phoneNumber.value) {
          draft.phoneNumber.hasErrors = true
          draft.phoneNumber.message = "This field is required"
        }
        if (draft.phoneNumber.value && (draft.phoneNumber.value.length < 10 || draft.phoneNumber.value.length > 15)) {
          draft.phoneNumber.hasErrors = true
          draft.phoneNumber.message = "Please enter a valid phone number"
        }
        if (draft.phoneNumber.value && !/^([0-9]+)$/.test(draft.phoneNumber.value)) {
          draft.phoneNumber.hasErrors = true
          draft.phoneNumber.message = "This field can only contain Numbers"
        }
        return
      case "phoneNumberAfterDelay":
        if (!draft.phoneNumber.hasErrors) {
          draft.phoneNumber.checkCount++
        }
        return
      case "submitForm":
        if (!draft.name.hasErrors && !draft.email.hasErrors && !draft.phoneNumber.hasErrors) {
          draft.submitCount++
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  //check name after delay
  useEffect(() => {
    if (state.name.value) {
      const delay = setTimeout(() => {
        dispatch({ type: "nameAfterDelay" })
      }, 700)
      return () => {
        clearTimeout(delay)
      }
    }
  }, [state.name.value])

  //check email after delay
  useEffect(() => {
    if (state.email.value) {
      const delay = setTimeout(() => {
        dispatch({ type: "emailAfterDelay" })
      }, 1200)
      return () => {
        clearTimeout(delay)
      }
    }
  }, [state.email.value])

  //check phone number after delay
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch({ type: "phoneNumberAfterDelay" })
    }, 1200)
    return () => {
      clearTimeout(delay)
    }
  }, [state.phoneNumber.value])

  //handle submit
  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: "nameNow", value: state.name.value })
    dispatch({ type: "nameAfterDelay", value: state.name.value })
    dispatch({ type: "emailNow", value: state.email.value })
    dispatch({ type: "emailAfterDelay", value: state.email.value })
    dispatch({ type: "phoneNumberNow", value: state.phoneNumber.value })
    dispatch({ type: "phoneNumberAfterDelay", value: state.phoneNumber.value })
    dispatch({ type: "submitForm" })
  }

  useEffect(() => {
    if (state.submitCount > 0) {
      appDispatch({ type: "register", data: { name: state.name.value, email: state.email.value, phoneNumber: state.phoneNumber.value } })
      navigate(`/select-plan`)
    }
  }, [state.submitCount])

  return (
    <Container>
      <SideBar step={"1"} />
      <div className={`w-[25rem] m-auto`}>
        <div>
          <h3 className={`text-2xl text-marineBlue font-bold`}>Personal info</h3>
          <h5 className={`text-sm text-coolGray font-light`}>Please provide your name, email address, and phone number.</h5>
        </div>
        <div>
          <form className="flex flex-col">
            <div className={`flex flex-col`}>
              <div className={`flex justify-between`}>
                <label htmlFor="Name" className={`font-semibold text-marineBlue text-xs pb-1`}>
                  Name
                </label>
                <div className={`text-strawberryRed font-semibold text-xs`}>{state.name.hasErrors && state.name.message}</div>
              </div>
              <input autoComplete="off" autoCorrect="off" spellCheck="false" onChange={(e) => dispatch({ type: "nameNow", value: e.target.value })} placeholder="e.g. Stephen King" type="text" name="" className={`border border-lightGray rounded-md placeholder:text-xs placeholder:text-coolGray placeholder:font-semibold py-1 pl-2 mb-5 ` + (state.name.hasErrors ? "border-strawberryRed outline-strawberryRed" : "outline-purplishBlue")} />
            </div>
            <div className={`flex flex-col`}>
              <div className={`flex justify-between`}>
                <label htmlFor="Email address" className={`font-semibold text-marineBlue text-xs pb-1`}>
                  Email address
                </label>
                <div className={`text-strawberryRed font-semibold text-xs`}>{state.email.hasErrors && state.email.message}</div>
              </div>
              <input autoComplete="off" autoCorrect="off" spellCheck="false" onChange={(e) => dispatch({ type: "emailNow", value: e.target.value })} placeholder="e.g. stephenking@lorem.com" type="text" name="" className={`border border-lightGray rounded-md placeholder:text-xs placeholder:text-coolGray placeholder:font-semibold py-1 pl-2 mb-5 ` + (state.email.hasErrors ? "border-strawberryRed outline-strawberryRed" : "outline-purplishBlue")} />
            </div>
            <div className={`flex flex-col`}>
              <div className={`flex justify-between`}>
                <label htmlFor="Phone Number" className={`font-semibold text-marineBlue text-xs pb-1 `}>
                  Phone Number
                </label>
                <div className={`text-strawberryRed font-semibold text-xs`}>{state.phoneNumber.hasErrors && state.phoneNumber.message}</div>
              </div>
              <input autoComplete="off" autoCorrect="off" spellCheck="false" onChange={(e) => dispatch({ type: "phoneNumberNow", value: e.target.value })} placeholder="e.g. +1 234 567 890" type="text" className={`border border-lightGray rounded-md placeholder:text-xs placeholder:text-coolGray placeholder:font-semibold py-1 pl-2 mb-5 ` + (state.phoneNumber.hasErrors ? "border-strawberryRed outline-strawberryRed" : "outline-purplishBlue")} />
            </div>
          </form>
        </div>
        <button onClick={handleSubmit} type="submit" className={`max-w-max bg-marineBlue text-white self-end text-sm font-semibold px-4 py-2 rounded-md`}>
          Next Step
        </button>
      </div>
    </Container>
  )
}
