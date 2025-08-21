import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div dir=\"rtl\" className=\"min-h-screen bg-neutral-50 text-neutral-900\">
      <header className=\"sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200\">
        <nav className=\"mx-auto max-w-6xl px-4 py-3 flex items-center justify-between\">
          <a href=\"#hero\" className=\"font-semibold tracking-tight\">מוטי חובה</a>
        </nav>
      </header>

      <section id=\"hero\" className=\"relative\">
        <div className=\"mx-auto max-w-6xl px-4 py-20\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className=\"text-4xl font-extrabold\">מוטי חובה</h1>
            <p className=\"mt-4 text-xl\">במאי • מורה למשחק • זמר • בעל חברת הפקה</p>
            <p className=\"mt-4\">יוצר חוויות במה שמניעות אנשים – על במה, בכיתה ובאירועים גדולים.</p>
          </motion.div>
        </div>
      </section>

      <section id=\"reel\" className=\"border-t border-neutral-200 bg-white\">
        <div className=\"mx-auto max-w-6xl px-4 py-16\">
          <h2 className=\"text-2xl font-bold mb-4\">Showreel</h2>
          <div className=\"aspect-video w-full overflow-hidden rounded-3xl shadow\">
            <iframe
              src=\"https://www.youtube.com/embed/Xm5PhbiAw4o?rel=0&modestbranding=1\"
              title=\"Showreel – מוטי חובה\"
              loading=\"lazy\"
              allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"
              allowFullScreen
              className=\"w-full h-full\"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
