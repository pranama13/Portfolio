import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { 
  SiPython, SiTensorflow, SiPytorch, SiOpencv, SiFastapi, 
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss,
  SiLinkedin, SiGithub, SiYoutube, SiTiktok, SiFacebook, SiInstagram 
} from "react-icons/si";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Star Background Component
const StarBackground = () => {
  const stars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    brightness: Math.random() * 0.3 + 0.3,
    speed: Math.random() * 2 + 1,
  }));

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.6)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.brightness,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [star.brightness, star.brightness * 0.5, star.brightness],
            rotate: [0, 15, 0],
            x: [0, Math.random() * 5 - 2.5, 0],
            y: [0, Math.random() * 5 - 2.5, 0],
          }}
          transition={{
            duration: star.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

// Typewriter Title Component
const TypewriterTitle = ({ text, className }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={className}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.05 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);

// Updated Navigation Bar Component
const NavBar = () => {
  const navItems = [
    { name: "About", id: "#about" },
    { name: "Projects", id: "#projects" },
    { name: "Experience", id: "#experience" },
    { name: "Skills", id: "#skills" },
    { name: "Connect", id: "#connect" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gray-800/50 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        <motion.a
          href="#"
          className="font-mono pixel-text text-base sm:text-xl font-bold bg-white bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Home
        </motion.a>
        <ul className="flex space-x-2 sm:space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-800 font-mono pixel-text text-xs sm:text-base"
            >
              <a href={item.id} className="px-1 sm:px-3 py-1 sm:py-2">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

// Footer Component
const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gray-900/80 border-t border-gray-800 mt-10 sm:mt-20"
  >
    <div className="container mx-auto px-4 py-4 sm:py-6 text-center text-gray-400 font-mono pixel-text text-sm sm:text-base">
      © {new Date().getFullYear()} Pranama Lakshan. All rights reserved.
    </div>
  </motion.footer>
);

// Sticky Email Button Component
const EmailButton = () => (
  <motion.a
    href="mailto:pranamalakshan360@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <FiMail className="text-white text-lg sm:text-2xl" />
  </motion.a>
);

// Main Portfolio Component
export default function Portfolio() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const titles = ["AI Engineer", "Frontend Developer"];

  const projects = [
    {
      name: "Smart Inventory Management System (In Progress)",
      url: "#",
      github: "#",
      image: "inv.jpg",
      description:
        "AI-driven inventory system with predictive analytics and OCR integration for automated data processing.",
    },
    {
      name: "Cinec Social Clubs Platform",
      url: "#",
      github: "https://github.com/example/cinec-social-clubs",
      image: "/web.png",
      description:
        "Full-stack platform managing 20+ campus clubs with event scheduling and member management.",
    },
    {
      name: "AI Image Generator",
      url: "https://github.com/example/ai-image-generator",
      github: "https://github.com/example/ai-image-generator",
      image: "/image.png",
      description:
        "Stable Diffusion-based image generation API with FastAPI backend.",
    },
    {
      name: "AI Music Generator",
      url: "https://github.com/example/ai-music-generator",
      github: "https://github.com/example/ai-music-generator",
      image: "/music.png",
      description:
        "Transform text prompts into musical compositions using MusicGen architecture.",
    },
    {
      name: "Facebook Post Automation",
      url: "https://github.com/pranama13/Facebook-Post-Automation-using-Selenium",
      github: "https://github.com/pranama13/Facebook-Post-Automation-using-Selenium",
      image: "/fb.png",
      description:
        "Automated Facebook post scheduling using Selenium for efficient social media management.",
    },
    {
      name: "Mobile Phone Price Predictor",
      url: "https://github.com/pranama13/Simple-Ai-Prediction-System",
      github: "https://github.com/pranama13/Simple-Ai-Prediction-System",
      image: "/predict.png",
      description:
        "Developed an AI Prediction System that predicts mobile phone prices using given data.",
    },
  ];

  const skillsCategories = [
    {
      category: "Programming",
      skills: ["Python", "Java", "JavaScript", "C", "HTML5/CSS3"],
      icon: "💻",
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "NLP"],
      icon: "🧠",
    },
    {
      category: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Next.js"],
      icon: "🎨",
    },
    {
      category: "Backend",
      skills: ["FastAPI", "Node.js", "Firebase", "MySQL"],
      icon: "⚙️",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:pranamalakshan360@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen w-screen relative overflow-x-hidden bg-black-100 text-white">
      <NavBar />
      <StarBackground />
      <EmailButton />

      <main className="container mx-auto px-4 pt-16 sm:pt-24 pb-10 sm:pb-20">
        {/* About Section */}
        <motion.section
          id="about"
          className="flex flex-col items-center mb-16 sm:mb-28 border-b border-gray-300 pb-10 sm:pb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative">
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-transparent shadow-lg relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              textShadow: [
                "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #9333ea, 0 0 40px #9333ea",
                "0 0 5px #fff, 0 0 15px #fff, 0 0 25px #d8b4fe, 0 0 50px #d8b4fe",
                "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #9333ea, 0 0 40px #9333ea"
              ]
            }}
            transition={{ 
              delay: 0.4,
              textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center neon-text"
          >
            Pranama Lakshan
          </motion.h1>

          <motion.div
            className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-purple-600 hover:bg-purple-800 !text-white transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              CV
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pranama-lakshan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-1 sm:p-2 rounded-md bg-blue-600 hover:bg-blue-700 !text-white transition-colors flex items-center justify-center"
            >
              <SiLinkedin className="text-xl sm:text-2xl" />
            </motion.a>
            <motion.a
              href="https://github.com/pranama13"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-1 sm:p-2 rounded-md bg-gray-800 hover:bg-gray-900 !text-white transition-colors flex items-center justify-center"
            >
              <SiGithub className="text-xl sm:text-2xl" />
            </motion.a>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                textShadow: [
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #3b82f6, 0 0 40px #3b82f6",
                  "0 0 5px #fff, 0 0 15px #fff, 0 0 25px #a78bfa, 0 0 50px #a78bfa",
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #3b82f6, 0 0 40px #3b82f6"
                ]
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5,
                textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-2xl sm:text-4xl font-mono pixel-text bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent neon-text"
            >
              {titles[titleIndex].split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    color: ["#ffffff", "#bfdbfe", "#ffffff"],
                  }}
                  transition={{ 
                    delay: i * 0.05,
                    color: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="inline-block hover:rotate-12 hover:text-pink-400 transition-transform"
                  style={{ textShadow: "0 0 8px rgba(59, 130, 246, 0.7)" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 sm:mt-12 max-w-full sm:max-w-2xl mx-auto text-center"
          >
            <hr className="w-full my-8 sm:my-15 border-t border-gray-300" />
            <TypewriterTitle
              text="About Me"
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-100 to-pink-100 bg-clip-text text-transparent font-mono pixel-text"
            />
            <p className="w-full text-center text-lg sm:text-2xl px-0.5 text-gray-400 leading-relaxed">
              I am a 3rd-year Software Engineering undergraduate at CINEC Campus,
              passionate about frontend development and artificial intelligence. Throughout my academic journey,
              I have worked on multiple projects that showcase my skills in software development and AI.
              <b>My ultimate goal is to become an AI Engineer, specializing in machine learning, deep learning, and AI-powered applications</b>.
              I am constantly working on enhancing my AI expertise while integrating it with frontend development to create
              intelligent and user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 w-full max-w-full sm:max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              className="p-5 sm:p-7 rounded-xl bg-gray-900/50 backdrop-blur-md border border-gray-700 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 animate-pulse opacity-50" />
              <div className="relative z-10">
                <TypewriterTitle
                  text="Artificial Intelligence"
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono pixel-text"
                />
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
                  I have a deep passion for AI, which I have self-studied. I work with <b>Python, TensorFlow, PyTorch, OpenCV, and FastAPI</b>,
                  developing AI-powered applications such as OCR models for handwritten text recognition,
                  AI-driven image generation, and machine learning models for predictive analysis. My goal
                  is to integrate AI into real-world applications, making technology smarter and more accessible.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiPython className="text-2xl sm:text-3xl text-green-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiTensorflow className="text-2xl sm:text-3xl text-orange-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiPytorch className="text-2xl sm:text-3xl text-red-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiOpencv className="text-2xl sm:text-3xl text-blue-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiFastapi className="text-2xl sm:text-3xl text-green-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 sm:p-6 rounded-xl bg-gray-900/50 backdrop-blur-md border border-gray-700 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 0, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse opacity-50" />
              <div className="relative z-10">
                <TypewriterTitle
                  text="Frontend Development"
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono pixel-text"
                />
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
                  My journey as a frontend developer has been driven by a love for
                  crafting dynamic web applications and seamless user experiences.
                  I work with <b>React.js, Next.js, HTML, CSS, JavaScript, and TypeScript</b>, focusing
                  on creating intuitive and responsive interfaces. I also use <b>Tailwind CSS</b>
                  for styling, ensuring visually appealing and efficient designs.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiReact className="text-2xl sm:text-3xl text-cyan-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiNextdotjs className="text-2xl sm:text-3xl text-white" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiHtml5 className="text-2xl sm:text-3xl text-orange-500" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiCss3 className="text-2xl sm:text-3xl text-blue-500" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiJavascript className="text-2xl sm:text-3xl text-yellow-400" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiTypescript className="text-2xl sm:text-3xl text-blue-600" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <SiTailwindcss className="text-2xl sm:text-3xl text-teal-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mt-10 sm:mt-16 border-b border-gray-300 pb-10 sm:pb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.h2
              className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 font-mono pixel-text bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TypewriterTitle text="Projects" />
            </motion.h2>

            <motion.div
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg border border-gray-700 hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg h-40 sm:h-48">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 sm:gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-gray-800 rounded-full hover:bg-gray-700 flex items-center gap-1 sm:gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        Code
                      </motion.a>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-purple-600 rounded-full hover:bg-purple-700 flex items-center gap-1 sm:gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        Demo
                      </motion.a>
                    </div>
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse delay-75" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          id="experience"
          className="mt-10 sm:mt-16 border-b border-gray-300 pb-10 sm:pb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.h2
              className="text-4xl sm:text-6xl font-semibold mb-6 sm:mb-8 font-mono pixel-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TypewriterTitle text="Work Experience" />
            </motion.h2>

            <motion.div
              className="w-full max-w-full sm:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-4 sm:p-6 border-2 border-gray-600 rounded-lg relative bg-gray-900/50 backdrop-blur-sm"
                variants={staggerItem}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      LOLC Holdings PLC
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      Data Systems Analyst (2021 - 2022)
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </div>
                <ul className="text-gray-300 space-y-2 text-xs sm:text-sm">
                  <li>
                    • Automated data processing workflows using Python, reducing
                    manual work by 40%
                  </li>
                  <li>
                    • Developed inventory forecasting models with 92% accuracy
                    rate
                  </li>
                  <li>
                    • Implemented data validation systems that reduced errors by
                    35%
                  </li>
                  <li>
                    • Collaborated with cross-functional teams to optimize ERP
                    system usage
                  </li>
                </ul>
                <div className="mt-3 sm:mt-4 flex gap-2 flex-wrap">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-800 rounded-full">
                    Data Analysis
                  </span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-800 rounded-full">
                    Process Automation
                  </span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-800 rounded-full">
                    System Integration
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mt-10 sm:mt-16 border-b border-gray-300 pb-10 sm:pb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.h2
              className="text-4xl sm:text-6xl font-semibold mb-6 sm:mb-8 font-mono pixel-text bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TypewriterTitle text="Technical Skills" />
            </motion.h2>

            <motion.div
              className="w-full max-w-full sm:max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-4 sm:p-6 border-2 border-gray-600 rounded-lg relative bg-gray-900/50 backdrop-blur-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {skillsCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="p-3 sm:p-4 rounded-lg bg-gray-800/40 hover:bg-gray-700/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-xl sm:text-2xl">{category.icon}</span>
                        <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                          {category.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-2">
                        {category.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-700 rounded-full flex items-center gap-1 sm:gap-2"
                          >
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3 justify-end">
                  <motion.div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1.2, 0.8, 1.2] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Updated Connect Section */}
        <motion.section
          id="connect"
          className="mt-10 sm:mt-16 border-b border-gray-300 pb-10 sm:pb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.h2
              className="text-4xl sm:text-6xl font-semibold mb-6 sm:mb-8 font-mono pixel-text bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TypewriterTitle text="Connect" />
            </motion.h2>

            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 sm:gap-8">
              {/* Social Media Links (Left) */}
              <motion.div
                className="md:w-1/3 flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://linkedin.com/in/pranama-lakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiLinkedin className="text-2xl sm:text-3xl text-blue-600" />
                  <span className="font-mono pixel-text text-blue-400">Connect with LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/pranama13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiGithub className="text-2xl sm:text-3xl text-gray-200" />
                  <span className="font-mono pixel-text text-gray-200">Connect with GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@pranama01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiYoutube className="text-2xl sm:text-3xl text-red-600" />
                  <span className="font-mono pixel-text text-red-400">Connect with YouTube</span>
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@_pranama?_t=ZS-8uJUwfWlEzh&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiTiktok className="text-2xl sm:text-3xl text-white" />
                  <span className="font-mono pixel-text text-gray-100">Connect with TikTok</span>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/pranama2001?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiFacebook className="text-2xl sm:text-3xl text-blue-600" />
                  <span className="font-mono pixel-text text-blue-400">Connect with Facebook</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/pranama01?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiInstagram className="text-2xl sm:text-3xl text-pink-500" />
                  <span className="font-mono pixel-text text-pink-400">Connect with Instagram</span>
                </motion.a>
              </motion.div>

              {/* Contact Form (Right) */}
              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleFormSubmit}
                  className="p-4 sm:p-6 rounded-xl bg-gray-900/50 backdrop-blur-md border border-gray-700 shadow-lg"
                >
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="name" className="block text-base sm:text-lg text-gray-300 font-mono pixel-text mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="email" className="block text-base sm:text-lg text-gray-300 font-mono pixel-text mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="message" className="block text-base sm:text-lg text-gray-300 font-mono pixel-text mb-1 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows="3 sm:rows-4"
                      className="w-full px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-3 py-1 sm:px-4 sm:py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}