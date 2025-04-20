const PhoneHeader = () => {
  return (
    <div className="hidden mobile:flex flex-col justify-center items-center w-full mb-5">
      <div className="flex items-center justify-between w-full">
        <div className="w-5 h-5" />
        <div className="w-38 h-2 bg-[#242425] rounded-3xl border-2 border-[#515455]" />
        <div className="bg-[#1e1e1e] border-2 border-[#464646] w-5 h-5 rounded-full mr-5 flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-[#464646] rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-[#1e1e1e] rounded-full" />
          </div>
        </div>
      </div>
      <p className="uppercase font-bold text-lg text-white">SpamSung</p>
    </div>
  );
};

export default PhoneHeader;
