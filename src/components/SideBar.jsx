import React from "react"

export default function SideBar(props) {
  return (
    <div className={`bg-sideimage m-2 flex flex-col gap-4 rounded-r-3xl rounded-l-lg pt-10 pl-6 pr-20`}>
      <div className={`flex flex-row items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center ` + (props.step === "1" ? "bg-lightBlue text-marineBlue" : "text-white")}>
          <p className={`font-medium text-xs`}>1</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-coolGray`}>STEP 1</div>
          <div className={`text-xs text-white font-medium`}>YOUR INFO</div>
        </div>
      </div>
      <div className={`flex flex-row items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center ` + (props.step === "2" ? "bg-lightBlue text-marineBlue" : "text-white")}>
          <p className={`font-medium text-xs`}>2</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-coolGray`}>STEP 2</div>
          <div className={`text-xs text-white font-medium`}>SELECT PLAN</div>
        </div>
      </div>{" "}
      <div className={`flex flex-row items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center ` + (props.step === "3" ? "bg-lightBlue text-marineBlue" : "text-white")}>
          <p className={`font-medium text-xs`}>3</p>
        </div>
        <div>
          <div className={`text-xs text-coolGray`}>STEP 3</div>
          <div className={`text-xs text-white font-medium`}>ADD-ONS</div>
        </div>
      </div>{" "}
      <div className={`flex flex-row items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-blue-50 flex justify-center items-center ` + (props.step === "4" ? "bg-lightBlue text-marineBlue" : "text-white")}>
          <p className={`font-medium text-xs`}>4</p>
        </div>{" "}
        <div>
          <div className={`text-xs text-coolGray`}>STEP 4</div>
          <div className={`text-xs text-white font-medium`}>SUMMARY</div>
        </div>
      </div>
    </div>
  )
}
