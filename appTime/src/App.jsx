import { IoVideocam } from "react-icons/io5";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-[290px]">
        <div className="flex items-center justify-center flex-col">
          <IoVideocam className="text-5xl" />
          <h3 className="text-3xl font-bold mb-5 text-[#2D3C72]">AppTime</h3>
        </div>
        <p className="text-[#615d5d]">
          Login With Megapersonals and enjoy with{" "}
          <span className="text-[#01BD70] font-bold">AppTime video chat</span>{" "}
          your dating partner
        </p>
        <button className="bg-[#01BD70] w-full py-3 rounded-md mt-2 text-white font-semibold">
          Login With Megapersonal
        </button>
      </div>
    </div>
  );
}

export default App;
