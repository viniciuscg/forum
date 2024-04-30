import { FaDatabase } from "react-icons/fa";

function NoData() {
  return (
    <div className="flex flex-col items-center min-w-[600px]">
      <h1>No Data Found.</h1>
      <FaDatabase />
    </div>
  )
}

export default NoData