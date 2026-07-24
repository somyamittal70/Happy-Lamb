import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Tag,
  Sparkles,
  BookOpen,
  Send,
} from "lucide-react";

// Blog Post Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering DaVinci Resolve: Color Grading 10-Bit LOG Footage",
    excerpt:
      "A complete guide to transforming flat LOG video profiles into cinematic, film-like looks using node trees and LUTs.",
    category: "Tutorials",
    readTime: "6 min read",
    date: "Jul 18, 2026",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
    slug: "mastering-davinci-resolve-color-grading",
    featured: true,
  },
  {
    id: 2,
    title: "Top 5 Camera Rigs for High-Speed Commercial Shoots in 2026",
    excerpt:
      "Comparing cinema camera setups, wireless video transmitters, and FPV drone pairings for fast-paced commercial sets.",
    category: "Gear Review",
    readTime: "4 min read",
    date: "Jun 28, 2026",
    image:
      "https://i.pinimg.com/1200x/2a/7b/b4/2a7bb4336df2eca8439b231a620e4bcf.jpg",
    slug: "top-5-camera-rigs-commercial-shoots",
    featured: false,
  },
  {
    id: 3,
    title: "The Art of Pacing: How Sound Design Drives Film Narrative",
    excerpt:
      "Why foley effects, ambient soundscapes, and subtle bass drops impact the emotional tone of a video more than visuals.",
    category: "Filmmaking",
    readTime: "8 min read",
    date: "May 14, 2026",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    slug: "art-of-pacing-sound-design",
    featured: false,
  },
  {
    id: 3,
    title: "How Motion Graphics Elevate Modern Brand Storytelling",
    excerpt:
      "Discover how seamless motion design, animated typography, and visual effects help brands create engaging digital experiences.",
    category: "Design",
    readTime: "5 min read",
    date: "Jul 15, 2026",
    image:
      "https://i.pinimg.com/736x/70/75/db/7075dba3796c57367858d32188aa99ff.jpg",
    slug: "motion-graphics-brand-storytelling",
    featured: false,
  },
];

export default function BlogSection() {
  const [featuredPost, ...secondaryPosts] = BLOG_POSTS;
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C]/60 bg-amber-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFC72C]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#FFC72C]" />
              <span>Insights & Tutorials</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Latest from the <span className="text-[#FFC72C]">Journal</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#FFC72C] hover:border-[#FFC72C] hover:shadow-md transition-all duration-300"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Blog Grid Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Article (Spans 7 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFC72C]/80 transition-all duration-500"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/80 px-3.5 py-1 text-xs font-bold text-slate-800 backdrop-blur-md shadow-sm">
                  <Tag className="h-3 w-3 text-[#FFC72C]" />
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span>{featuredPost.date}</span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-[#FFC72C]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#FFC72C] transition-colors leading-snug">
                  <a href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FFC72C] hover:text-[#FFC72C]transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Secondary Articles Column (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-slate-200/80 bg-white p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-lg hover:border-[#FFC72C] transition-all duration-300"
              >
                <div className="relative aspect-video sm:w-2/5 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#FFC72C] font-semibold">
                      <span>{post.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-bold text-slate-900 group-hover:text-[#FFC72C] transition-colors leading-snug">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h4>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-[#FFC72C]transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}

            {/* Newsletter Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#FFC72C] bg-gradient-to-br from-[#FFC72C]/30 via-orange-50/50 to-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC72C]">
                <BookOpen className="h-4 w-4 text-[#FFC72C]" />
                <span>Stay Updated</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Get monthly color presets, workflow tips, and gear guides
                straight to your inbox.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex items-center gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 shadow-inner"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-amber-600 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Join</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
