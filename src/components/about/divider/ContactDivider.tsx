import { Phone2 } from "@react95/icons";

const ContactDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-2 my-2">
      <Phone2 variant="32x32_4" />
      <div>
        <p className="font-medium">Any Questions?</p>

        <p className="flex items-center text-sm">cartantonio2000@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactDivider;
