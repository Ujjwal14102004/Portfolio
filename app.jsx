import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold neon-text">Velos</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 border rounded-full">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <motion.section
        className="p-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold">Welcome to My Cyberpunk Portfolio</h2>
        <p className="mt-4 text-lg">UI/UX Designer | Graphic Designer | Video Editor | Music Producer</p>
      </motion.section>

      <motion.div
        className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {["UI/UX Projects", "Graphic Designs", "Music Production"].map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg transition-transform"
          >
            <h3 className="text-xl font-semibold">{category}</h3>
            <p>Check out my work in {category.toLowerCase()}.</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
