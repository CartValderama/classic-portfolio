import { FileFind2 } from "@react95/icons";

const ResumeDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-2 my-2">
      <FileFind2 variant="32x32_1" />
      <div>
        <p className="font-medium">Want to see my CV?</p>
        <a
          href="/docs/CV_ValderamaCart.pdf"
          download
          className="flex gap-1 items-center underline text-sm"
          aria-label="Download Cart Valderama's resume as a PDF"
        >
          <span aria-label="resume">Click this link to download it!</span>
        </a>
      </div>
    </div>
  );
};

export default ResumeDivider;
