import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { MailIcon, PhoneIcon } from "lucide-react";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/sections/Contact/ContactForm";
import Socials from "@/components/sections/Contact/Socials";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="bg-primary-green pt-px ">
      <MaxWidthWrapper className="flex flex-col lg:flex-row relative before:content-['<contact>'] before:text-primary-green before:absolute before:w-full before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:-top-10 before:italic after:content-['</contact>'] after:text-primary-green after:absolute after:w-full after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:-bottom-28 lg:after:-bottom-10 after:italic before:mix-blend-difference after:mix-blend-difference">
        <div className="basis-1/3 py-10 pr-10 text-bgColor text-center lg:text-left">
          <h2 className={cn(getHeadingStyles("h2"), "mb-10")}>Contact</h2>
          <div className="mb-5">
            <div className="flex gap-3 items-center flex-col lg:flex-row">
              <div className="p-2 rounded-md bg-white border border-bgColor">
                <MailIcon size={18} />
              </div>
              <h4 className={cn(getHeadingStyles("h4"), "mb-0")}>Email</h4>
            </div>
            <Link href="mailto:ahmadzaheerdev@gmail.com" className="font-bold">
              ahmadzaheerdev@gmail.com
            </Link>
          </div>
          <div className="mb-5">
            <div className="flex gap-3 items-center flex-col lg:flex-row">
              <div className="p-2 rounded-md bg-white border border-bgColor">
                <PhoneIcon size={18} />
              </div>
              <h4 className={cn(getHeadingStyles("h4"), "mb-0")}>Phone</h4>
            </div>
            <Link href="tel:+923074754199" className="font-bold">
              +923074754199
            </Link>
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
