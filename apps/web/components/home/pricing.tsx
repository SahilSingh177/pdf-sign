"use client";
import { useState } from "react";
import SectionTitle from "../section-title";

const checkIcon = (
  <svg width="8" height="6" viewBox="0 0 8 6" className="fill-current">
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);

const crossIcon = (
  <svg width="7" height="7" viewBox="0 0 8 8" className="fill-current">
    <path d="M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p className="m-0 text-base font-medium text-body-color">{text}</p>
    </div>
  );
};


const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  buttonText?: string;
  buttonClassName?: string;
  buttonState?: "active" | "inactive";
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-3xl font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="time text-body-color">/{duration}</span>
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button
            disabled={props.buttonState === "inactive"}
            className={"flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp " + props.buttonClassName}
          >
            {props.buttonText ?? "Start Free Trial"}
          </button>
        </div>
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Individual"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="Client Management" status="active" />
            <OfferList text="Secure E-Signing" status="active" />
            <OfferList text="Authorization Storage" status="active" />
            <OfferList text="Policy Tracking" status="active" />
            <OfferList text="Real time Analytics" status="active" />
            <OfferList text="Data Security" status="active" />
            <OfferList text="Mobile Accessibility" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Organization"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="Upto 20 members" status="active" />
            <OfferList text="Integrated Communication" status="active" />
            <OfferList text="Document Organization" status="active" />
            <OfferList text="Reporting Tools" status="active" />
            <OfferList text="Compliance Assurance" status="active" />
            <OfferList text="Customizable Workflow Automation" status="active" />
            <OfferList text="Advanced Data Security" status="active" />
            <OfferList text="Enhanced Onboarding" status="active" />
            <OfferList text="Premier Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            buttonText="Coming soon..."
            buttonState="inactive"
          >
            <OfferList text="Scalability for Large Teams" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Dedicated Account Manager" status="active" />
            <OfferList text="API Integration" status="active" />
            <OfferList text="Custom Development" status="active" />
            <OfferList text="Scalability for Operations" status="active" />
            <OfferList text="Custom Branding" status="active" />
            <OfferList text="Advanced Training Programs" status="active" />
            <OfferList text="High Priority Support" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;