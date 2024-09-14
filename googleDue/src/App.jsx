import { MdDuo } from "react-icons/md";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-[290px]">
        <div className="flex items-center justify-center flex-col">
          <MdDuo className="text-5xl text-[#0B78EF]" />
          <h3 className="text-3xl font-bold mb-5 text-[#2D3C72]">Google DUO</h3>
        </div>
        <p className="text-[#615d5d]">
          Login With Megapersonals and enjoy with{" "}
          <span className="text-[#0B78EF] font-bold">
            Google DUO video chat
          </span>{" "}
          your dating partner
        </p>
        <button className="bg-[#0B78EF] w-full py-3 rounded-md mt-2 text-white font-semibold">
          Login With Megapersonal
        </button>
      </div>
    </div>
  );
}

export default App;
