import { Spinner } from "../ui/spinner";

const Loading = ({ className, msg }: { className?: string; msg: string }) => (
  <div
    className={`w-full h-100 md:h-150 lg:h-200 flex flex-col gap-2 items-center justify-center animate-pulse rounded-md ${className}`}
  >
    <Spinner className="size-8 text-blue-500" />
    <p className="font-libre text-sm text-gray-600">{msg}</p>
  </div>
);

export default Loading;
