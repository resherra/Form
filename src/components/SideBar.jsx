import React from "react"

export default function SideBar() {
  return (
    <div className={`bg-purplishBlue rounded-br-3xl rounded-tr-3xl py-10 pl-6 pr-20 flex flex-col gap-4`}>
      <div className={`flex flex-row items-center gap-3`}>
        <div className="w-6 h-6 bg-lightBlue rounded-full border border-blue-50 flex justify-center items-center">
          <p className={`text-marineBlue font-semibold text-xs`}>1</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-white`}>STEP 1</div>
          <div className={`text-sm text-white font-semibold`}>YOUR INFO</div>
        </div>
      </div>
      <div className={`flex flex-row items-center gap-3`}>
        <div className="w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center">
          <p className={`text-blue-50 font-semibold text-xs`}>2</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-white`}>STEP 2</div>
          <div className={`text-sm text-white font-semibold`}>SELECT PLAN</div>
        </div>
      </div>{" "}
      <div className={`flex flex-row items-center gap-3`}>
        <div className="w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center">
          <p className={`text-blue-50 font-semibold text-xs`}>3</p>
        </div>
        <div>
          <div className={`text-xs text-white`}>STEP 3</div>
          <div className={`text-sm text-white font-semibold`}>ADD-ONS</div>
        </div>
      </div>{" "}
      <div className={`flex flex-row items-center gap-3`}>
        <div className="w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center">
          <p className={`text-blue-50 font-semibold text-xs`}>4</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-white`}>STEP 4</div>
          <div className={`text-sm text-white font-semibold`}>SUMMARY</div>
        </div>
      </div>
    </div>
  )
}
