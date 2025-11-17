import { BiSolidError } from "react-icons/bi";

const ErrorState = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <div className="w-full flex-col h-120 flex justify-center items-center gap-3">
      {/* Icon */}
      <div className="flex items-center justify-center p-3 bg-red-100 rounded-md">
        <BiSolidError className="w-7 h-7 text-red-500" />
      </div>

      {/* Error Message */}
      <p className="font-libre text-gray-600">{errorMsg}</p>
    </div>
  );
};

export default ErrorState;
