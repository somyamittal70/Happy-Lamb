import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag, Sparkles, BookOpen } from "lucide-react";

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
      "https://images.unsplash.com/photo-1512790182412-b19e6d61b397?q=80&w=1000&auto=format&fit=crop",
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
];

export default function BlogSection() {
  const [featuredPost, ...secondaryPosts] = BLOG_POSTS;

  return (
    <section className="relative w-full bg-[#0f1012] text-white py-24 overflow-hidden border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-amber-600/5 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Insights & Tutorials</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Latest from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Journal</span>
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
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Blog Grid Layout: 1 Hero Featured Post + 2 Side Posts */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Article (Spans 7 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#16171b] overflow-hidden"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16171b] via-transparent to-black/30" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md">
                  <Tag className="h-3 w-3" />
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  <a href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Secondary Articles Column (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondaryPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-white/10 bg-[#16171b] p-6 flex flex-col sm:flex-row gap-6 hover:border-white/20 transition-all"
              >
                <div className="relative aspect-video sm:w-2/5 shrink-0 overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                      <span>{post.category}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal">{post.readTime}</span>
                    </div>

                    <h4 className="mt-2 text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h4>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}

            {/* Newsletter Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6 flex items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <BookOpen className="h-4 w-4" />
                  <span>Stay Updated</span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Get monthly color presets, workflow tips, and gear guides straight to your inbox.
                </p>
              </div>

              <a
                href="#newsletter"
                className="shrink-0 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition-colors"
              >
                Subscribe
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}