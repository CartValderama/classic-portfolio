import { useEffect, useState } from "react";
import { slides } from "../../../data/guideSlides";
import MobileGuideNav from "./MobileGuideNav";
import { useApplicationStore } from "../../../store/applicationStore";

interface MobileGuideProps {
  initialSlide?: number;
}

const MobileGuide = ({ initialSlide = 0 }: MobileGuideProps) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { activeWindow } = useApplicationStore();

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeWindow]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? slides.length - 1 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const CurrentIcon = slides[currentSlide].icon;
  const iconClasses =
    "text-8xl mobile:[@media(max-height:450px)]:text-7xl text-white";

  return (
    <div className="bg-emerald-800 text-white p-4 overflow-auto h-full lg:hidden flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-4xl mobile:[@media(max-height:450px)]:text-2xl font-bold">
          Mobile Guide
        </h2>
      </div>

      <div className="flex flex-col justify-between items-center h-full w-full relative overflow-hidden mobile:[@media(max-height:450px)]:text-xs">
        <div
          key={currentSlide}
          className="flex w-full h-full flex-col justify-center items-center"
        >
          <div className="flex flex-col items-center justify-center mobile:[@media(max-height:450px)]:max-w-[500px]">
            <h3 className="font-medium text-white text-3xl mb-2 mobile:[@media(max-height:450px)]:text-lg">
              {slides[currentSlide].title}
            </h3>
            {CurrentIcon && <CurrentIcon className={iconClasses} />}
          </div>
          <p className="text-base text-center mt-2 mobile:[@media(max-height:450px)]:max-w-[500px] mobile:[@media(max-height:450px)]:text-xs">
            {slides[currentSlide].description}
          </p>
        </div>

        <MobileGuideNav
          currentSlide={currentSlide}
          slideCount={slides.length}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      </div>
    </div>
  );
};

export default MobileGuide;
