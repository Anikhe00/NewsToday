type StatProps = {
  value: string;
  icon: React.FC;
};

const Stat = ({ value, icon: Icon }: StatProps) => {
  return (
    <div className="group flex flex-row gap-2 items-center justify-center text-gray-500 hover:text-blue-500 cursor-pointer">
      <Icon />
      <span className=" font-libre text-sm font-medium ">{value}</span>
    </div>
  );
};

export default Stat;
