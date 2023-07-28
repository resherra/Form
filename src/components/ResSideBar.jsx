export default function ResSideBar({ step }) {
  return (
    <div className={`flex md:hidden flex-row  justify-center gap-6  bg-gray-400/10 rounded-lg p-2`}>
      <div className={`flex flex-col  items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-marineBlue flex justify-center items-center ` + (step === "1" ? "bg-marineBlue text-white" : "text-marineBlue")}>
          <p className={`font-medium text-xs`}>1</p>
        </div>{" "}
      </div>
      <div className={`flex flex-col  items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-marineBlue flex justify-center items-center ` + (step === "2" ? "bg-marineBlue text-white" : "text-marineBlue")}>
          <p className={`font-medium text-xs`}>2</p>
        </div>{" "}
      </div>{" "}
      <div className={`flex flex-col  items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-marineBlue flex justify-center items-center ` + (step === "3" ? "bg-marineBlue text-white" : "text-marineBlue")}>
          <p className={`font-medium text-xs`}>3</p>
        </div>
      </div>{" "}
      <div className={`flex flex-col  items-center gap-3`}>
        <div className={`w-6 h-6 rounded-full border border-marineBlue flex justify-center items-center ` + (step === "4" ? "bg-marineBlue text-white" : "text-marineBlue")}>
          <p className={`font-medium text-xs`}>4</p>
        </div>{" "}
      </div>
    </div>
  )
}
