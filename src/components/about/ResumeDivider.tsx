import { FileFind2 } from "@react95/icons";

const ResumeDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-3 my-2">
      <FileFind2 variant="32x32_1" />
      <div>
        <p className="text-lg font-semibold">Want to see my CV?</p>
        <a href="" className="underline">
          {" "}
          Click this link to download it!
        </a>
      </div>
    </div>
  );
};

export default ResumeDivider;
