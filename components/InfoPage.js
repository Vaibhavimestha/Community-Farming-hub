import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";

export default function InfoPage({
  eyebrow,
  title,
  description,
  image,
  sections = [],
}) {
  return (
    <>
      <Navbar />

      <section className="bg-[#1b4332] text-white py-20">
        <div className="container-main">
          <p className="text-[#e9c46a] uppercase tracking-widest text-sm font-bold">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl mt-4">
            {title}
          </h1>
          <p className="text-gray-200 max-w-2xl leading-8 mt-6">
            {description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <img
            src={image}
            alt={title}
            className="w-full h-[380px] object-cover rounded-3xl"
          />

          <div className="space-y-7">
            {sections.map((section, index) => (
              <div key={section.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#e8f5e9] flex items-center justify-center">
                  <Sprout className="text-[#1b4332]"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1b4332]">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 leading-7 mt-2">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}

            <Link href="/marketplace" className="primary-btn">
              Explore GrowTogether <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}