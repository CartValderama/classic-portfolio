const Stand = () => {
  return (
    <>
      <div className="w-[88%] h-[20%] bg-[#d3cc96] rounded-b-xs z-10 border border-[#d3cc96]" />
      <div className="w-[40%] h-[20%] bg-[#cac28d] relative flex justify-center z-10">
        <div className="w-[130%] h-[110%] bg-[#bbb380] absolute -bottom-[35%] rounded-[60%] scale-110" />
        <div className="w-[110%] h-[80%] bg-[#cac28d] absolute bottom-[2%] rounded-[50%] scale-110" />
      </div>
    </>
  );
};

export default Stand;
