import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import {AboutSectionOne, AboutSectionTwo} from "../components/home/about-section";
import Brands from "../components/home/brands";
import ScrollUp from "../components/home/scroll-up";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Pricing from "../components/home/pricing";
import Testimonials from "../components/home/testimonials";
import Video from "../components/home/video";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

interface HomePageProps {
  session: any;
  email: string;
}

function HomePage ({email, session}: HomePageProps) {
  return (
    <div className="w-full mx-auto dark:bg-black">
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return { 
    props: {
      session,
      email: session?.user?.email ?? "",
    },
  };
}

export default HomePage;
