import { FaSquareWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="max-w-[290px]">
          <div className="flex items-center justify-center flex-col">
            <FaSquareWhatsapp className="text-5xl text-[#01BD70]" />
            <h3 className="text-3xl font-bold mb-5 text-[#2D3C72]">Whatsapp</h3>
          </div>
          <p className="text-[#615d5d]">
            Login With Megapersonals and enjoy with{" "}
            <span className="text-[#01BD70] font-bold">
              Whatsapp video chat
            </span>{" "}
            your dating partner
          </p>
          <button className="bg-[#01BD70] w-full py-3 rounded-md mt-2 text-white font-semibold">
            Login With Megapersonal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
