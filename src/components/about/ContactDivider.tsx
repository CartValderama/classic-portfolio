import { Phone2 } from "@react95/icons";

const ContactDivider = () => {
  return (
    <div className="border-y flex items-center w-full gap-x-4 py-2 my-2">
      <Phone2 variant="32x32_4" />
      <div>
        <p className="text-lg font-semibold">Any Questions?</p>
        <div className="flex items-center gap-x-4">
          <p>Mobile: 90883637</p>
          <p>Email: cartantonio2000@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDivider;
