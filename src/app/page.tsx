"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const sections = [
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" },
    { id: "section4", label: "Section 4" },
  ];

  const [currentSection, setCurrentSection] = useState<string>("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current: string = "";

      sections.forEach((section: HTMLElement) => {
        const sectionTop: number = section.offsetTop;
        const sectionHeight: number = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row-reverse justify-center gap-10">
        <div>
          <header className="bg-gray-800 py-4 sticky top-20">
            <nav className="flex justify-center">
              <ul className="flex flex-col gap-5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      onClick={() => scrollToSection(section.id)}
                      className={`text-white px-4 py-2 ${
                        currentSection === section.id ? "bg-gray-900" : ""
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>

        <div className="w-1/2">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="portfolio-item h-screen flex flex-col justify-center items-center"
            >
              <h2 className="text-4xl font-semibold">{section.label}</h2>
              <div className="subsection">
                <h3>Subsection 1</h3>
                <p>This is the content of subsection 1.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quam, ad? Libero distinctio corporis eum magni aut modi saepe
                  repellendus, esse labore velit officia pariatur illum earum
                  sunt hic accusamus laudantium nisi, fugiat assumenda
                  reprehenderit nostrum aliquid. Quos voluptates earum error
                  libero, voluptatum totam maxime suscipit dolores itaque a,
                  quae hic at quaerat illum et esse incidunt, autem qui.
                  Similique recusandae voluptates ratione itaque omnis provident
                  pariatur sed, excepturi magnam perferendis, modi sit
                  praesentium, neque maiores veniam. Quasi exercitationem
                  ducimus aliquid odit laboriosam totam earum natus facere sequi
                  hic? Ullam non rerum a assumenda, quam, dolor ut officia
                  cumque nesciunt soluta nulla architecto fugit velit nihil
                  aliquid quis harum laboriosam repudiandae accusantium odit
                  dolorem cupiditate culpa voluptas. Totam facilis fugiat
                  numquam labore ullam. Optio quisquam recusandae illum totam
                  eaque culpa nulla, voluptates suscipit sit doloribus aliquid
                  corrupti magnam minima aspernatur error sunt cumque fugiat
                  dolorem porro esse similique quia, ratione soluta unde.
                  Deserunt nesciunt voluptatem architecto animi repudiandae
                  praesentium iure vitae magni consequatur tenetur omnis,
                  aliquid ut ratione ipsa tempora totam a voluptas eius dicta
                  fugit possimus aspernatur? Consequuntur molestias, sunt,
                  itaque necessitatibus dignissimos, atque expedita esse illum
                  ea eligendi possimus in ipsum at quis. Consectetur obcaecati
                  possimus eos quibusdam fuga!
                </p>
              </div>
              <div className="subsection">
                <h3>Subsection 2</h3>
                <p>This is the content of subsection 2.</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
