import ContactHero from "./components/contact/ContactHero";
import ContactForm from "./components/contact/ContactForm";
import ContactInfo from "./components/contact/ContactInfo";
import ContactMap from "./components/contact/ContactMap";
import FilmStripRail from "./components/contact/FilmStripRail";

export const metadata = {
  title: "Contact — Happy Lamb",
  description: "Get in touch with our production team.",
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "#050505" }}>
      <FilmStripRail side="left" />
      <FilmStripRail side="right" />

      <ContactHero />

      <section
        className="relative flex flex-col gap-16 px-6 py-24 lg:flex-row lg:gap-24 lg:px-[96px] lg:py-32"
        style={{ backgroundColor: "#050505" }}
      >
        <ContactForm />
        <ContactInfo />
      </section>

      <ContactMap />
    </main>
  );
}