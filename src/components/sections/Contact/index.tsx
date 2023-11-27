import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { MailIcon, PhoneIcon } from "lucide-react";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/sections/Contact/ContactForm";
import Socials from "@/components/sections/Contact/Socials";

const Contact = () => {
  return (
    <div id="contact" className="bg-primary-green pt-px ">
      <MaxWidthWrapper className="flex flex-col lg:flex-row">
        <div className="basis-1/3 py-10 pr-10 text-bgColor text-center lg:text-left">
          <h2 className={cn(getHeadingStyles("h2"), "mb-10")}>Contact</h2>
          <div className="mb-5">
            <div className="flex gap-3 items-center flex-col lg:flex-row">
              <div className="p-2 rounded-full bg-white border border-bgColor">
                <MailIcon size={18} />
              </div>
              <h4 className={cn(getHeadingStyles("h4"), "mb-0")}>Email</h4>
            </div>
            <p className="font-bold">ahmadzaheerdev@gmail.com</p>
          </div>
          <div className="mb-5">
            <div className="flex gap-3 items-center flex-col lg:flex-row">
              <div className="p-2 rounded-full bg-white border border-bgColor">
                <PhoneIcon size={18} />
              </div>
              <h4 className={cn(getHeadingStyles("h4"), "mb-0")}>Phone</h4>
            </div>
            <p className="font-bold">+923074754199</p>
          </div>
          <div className="mb-5">
            <h4 className={getHeadingStyles("h4")}>Connect</h4>
            <Socials />
          </div>
        </div>
        <div className="basis-2/3 p-10 bg-bgColor -mb-20 lg:-my-20 relative border border-dim rounded-lg flex flex-col justify-center">
          <h3 className={getHeadingStyles("h3")}>Get In Touch.</h3>
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
