import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}>
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold neon-text">Velos</h1>
        <Button onClick={() => setDarkMode(!darkMode)} variant="outline">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>

      <motion.section
        className="p-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold">Welcome to My Cyberpunk Portfolio</h2>
        <p className="mt-4 text-lg">
          UI/UX Designer | Graphic Designer | Video Editor | Music Producer
        </p>
      </motion.section>

      <motion.div
        className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">UI/UX Projects</h3>
          <p>Check out my latest design works.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">Graphic Designs</h3>
          <p>Creative posters, album covers, and more.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">Music Production</h3>
          <p>Explore my beats and soundtracks.</p>
        </div>
      </motion.div>
    </div>
  );
}
