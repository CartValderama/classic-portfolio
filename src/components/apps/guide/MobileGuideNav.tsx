type GuideNavigationProps = {
  currentSlide: number;
  slideCount: number;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
};

const MobileGuideNav = ({
  currentSlide,
  slideCount,
  onNext,
  onPrev,
}: GuideNavigationProps) => {
  return (
    <div className="flex justify-between items-center mt-4 mobile:[@media(max-height:450px)]:max-w-[500px] w-full">
      <button
        type="button"
        onClick={onPrev}
        className={`w-20 px-4 py-2 rounded bg-emerald-950 active:scale-90 transition-transform duration-300 font-medium ${
          currentSlide === 0 && "opacity-0"
        }`}
        disabled={currentSlide === 0}
      >
        Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: slideCount }).map((_, index) => (
          <p
            key={index}
            className={`w-1 h-1 rounded-full transition-all ${
              currentSlide === index ? "bg-emerald-500 w-1.5" : "bg-gray-300"
            }`}
          ></p>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className={`w-20 px-4 py-2 rounded bg-emerald-950 active:scale-90 transition-transform duration-300 font-medium ${
          currentSlide === slideCount - 1 && "opacity-0"
        }`}
        disabled={currentSlide === slideCount - 1}
      >
        Next
      </button>
    </div>
  );
};

export default MobileGuideNav;
