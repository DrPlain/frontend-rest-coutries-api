import { BsArrowLeft } from "react-icons/bs";

export default function BackButton({ setCountry }) {
  return (
    <div>
      <button
        className="flex items-center border p-2 my-8 shadow-md"
        onClick={() => setCountry("")}
      >
        {" "}
        <BsArrowLeft size={30} className="mx-4" />
        <p className="mx-4 p-3">Back</p>
      </button>
    </div>
  );
}
