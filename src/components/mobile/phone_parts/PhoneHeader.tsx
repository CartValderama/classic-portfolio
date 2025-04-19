const PhoneHeader = () => {
  return (
    <div className="hidden mobile:flex flex-col justify-center items-center w-full mb-5 mobile:[@media(max-height:450px)]:flex-row-reverse mobile:[@media(max-height:450px)]:py-0 mobile:[@media(max-height:450px)]:h-full mobile:[@media(max-height:450px)]:w-auto mobile:[@media(max-height:450px)]:mb-0 mobile:[@media(max-height:450px)]:ml-5">
      <div className="flex items-center justify-between w-full mobile:[@media(max-height:450px)]:flex-col mobile:[@media(max-height:450px)]:h-full">
        <div className="w-5 h-5 mobile:[@media(max-height:450px)]:mt-5" />
        <div className="w-38 h-2 bg-[#242425] rounded-3xl border-2 border-[#515455] mobile:[@media(max-height:450px)]:w-2 mobile:[@media(max-height:450px)]:h-38" />
        <div className="bg-[#1e1e1e] border-2 border-[#464646] w-5 h-5 rounded-full mr-5 flex items-center justify-center mobile:[@media(min-height:550px)]:mr-0 mobile:[@media(max-height:450px)]:mt-5">
          <div className="w-3.5 h-3.5 bg-[#464646] rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-[#1e1e1e] rounded-full" />
          </div>
        </div>
      </div>
      <p className="uppercase font-bold text-lg text-white mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
        SpamSung
      </p>
    </div>
  );
};

export default PhoneHeader;
