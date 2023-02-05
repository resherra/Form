import React from "react"

export default function MainForm() {
  return (
    <div className={`px-20 py-12`}>
      <div>
        <h3 className={`text-3xl font-semibold`}>Personal info</h3>
        <h5 className={`text-sm font-light`}>Please provide your name, email address, and phone number</h5>
      </div>
      <div className="mt-10">
        <form className="flex flex-col" action="">
          <div className={`flex flex-col`}>
            <label htmlFor="Name" className={`font-semibold text-gray-900 text-sm`}>
              Name
            </label>
            <input type="text" name="" className={`border border-gray-200 rounded-md mb-5`} />
          </div>
          <div className={`flex flex-col`}>
            <label htmlFor="Email address" className={`font-semibold text-gray-900 text-sm`}>
              Email address
            </label>
            <input type="text" name="" className={`border border-gray-200 rounded-md mb-5`} />
          </div>
          <div className={`flex flex-col`}>
            <label htmlFor="Phone Number" className={`font-semibold text-gray-900 text-sm`}>
              Phone Number
            </label>
            <input type="text" className={`border border-gray-200 rounded-md mb-5`} />
          </div>
          <button type="submit" className={`bg-blue-900 text-white self-end mt-10 text-sm font-semibold px-4 py-2 rounded-md`}>
            Next Step
          </button>
        </form>
      </div>
    </div>
  )
}
