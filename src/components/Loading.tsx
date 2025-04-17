const Loading = () => {
  return (
    <div className="h-full flex justify-center items-center bg-black">
      <div
        className="h-12 w-12 border-4 border-t-4 border-r-4 border-transparent rounded-full animate-spin 
       border-t-stone-500 border-r-stone-500 border-b-transparent border-l-transparent"
      ></div>
    </div>
  );
};

export default Loading;
