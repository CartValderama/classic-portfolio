import { useEffect, useState } from "react";

type headDividerProps = {
  dateOnly: boolean;
};

const HeadDivider = ({ dateOnly }: headDividerProps) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDate(currentDate.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div
      className={` flex border-y ${
        dateOnly ? "justify-center " : "justify-between "
      } items-center w-full gap-x-4 py-2 text-xs`}
    >
      <p className={`${dateOnly && "hidden"}`}>Second portfolio version</p>
      <p>Oslo, {date}</p>
      <a
        href="</div>/docs/CV_ValderamaCart.pdf"
        download
        className={`flex gap-1 items-center underline ${dateOnly && "hidden"}`}
        aria-label="Download Cart Valderama's resume as a PDF"
      >
        Click this to download my CV
      </a>
    </div>
  );
};

export default HeadDivider;
