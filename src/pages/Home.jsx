import About from "../components/home/About";
import BlogSection from "../components/home/Blogs";
import FeaturedWork from "../components/home/Featured";
import Hero from "../components/home/Hero";
import HireSection from "../components/home/Hire";
import OurClients from "../components/home/OurClient";
import ServicesLight from "../components/home/Services";
import TestimonialsLight from "../components/home/Testimonial";

export default function HomePage() {
    return(
        <>
        <Hero />
        <About />
        <FeaturedWork />
        <BlogSection />
        <ServicesLight />
        <OurClients />
        <TestimonialsLight />
        <HireSection />
        </>
    )
}