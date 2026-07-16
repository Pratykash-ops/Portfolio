import React from 'react';
import { Link } from 'react-router-dom';

const FullAbout = () => {
  return (
    <section className="c-space section-spacing pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-indigo-500 hover:text-indigo-400 mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Pratyaksh Baghel</h1>
        <p className="text-xl text-neutral-400 mb-12">
          Full-Stack Developer | Technical Strategist | Community Builder | Creative Technologist
        </p>

        <div className="space-y-12">
          <div className="bg-black/40 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Professional Profile</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Dynamic technologist and creative strategist with a specialized focus on building scalable web solutions and driving operational growth. Currently pursuing a Bachelor's degree in Computer Science Engineering while actively leading technical, marketing, and operational initiatives across multiple projects and organizations.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              My work lies at the intersection of software engineering, design, and business strategy—combining backend architecture, system design, digital marketing, and event technology to create impactful user experiences. I have developed production-grade applications spanning healthcare, travel technology, community platforms, and event management systems.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              With experience ranging from engineering secure authentication systems and CRM platforms to orchestrating large-scale event logistics and audiovisual operations, I approach challenges through a blend of analytical thinking, creativity, and data-driven decision-making.
            </p>
          </div>

          <div className="bg-black/40 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Academic Background</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white">Bachelor of Technology (B.Tech) – Computer Science & Engineering (Core)</h3>
                <p className="text-neutral-400">Graphic Era Hill University (2026 – Present)</p>
                <p className="text-neutral-300 mt-2">Focused on advanced computing concepts, software engineering principles, system architecture, emerging technologies, and applied problem-solving.</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl text-white">Senior Secondary Education (Grade XII)</h3>
                <p className="text-neutral-400">Viaan International School - CBSE Board (86%)</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl text-white">Secondary Education (Grade X)</h3>
                <p className="text-neutral-400">Viaan International School - CBSE Board (85%)</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-indigo-400 mb-3">Technical Engineering</h3>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  <li>Full-Stack Web Development</li>
                  <li>Backend Architecture & API Development</li>
                  <li>System Design & Scalable Infrastructure</li>
                  <li>Dashboard & CRM Development</li>
                  <li>Authentication & Security Systems</li>
                  <li>Database Design and Optimization</li>
                  <li>Cloud Deployment & DevOps Fundamentals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-indigo-400 mb-3">Technologies</h3>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  <li><strong>Frontend:</strong> Next.js, React.js, TypeScript, Tailwind CSS</li>
                  <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
                  <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Prisma</li>
                  <li><strong>Security:</strong> XSS Prevention, AES, JWT</li>
                  <li><strong>Infrastructure:</strong> Docker, Linux, Self-Hosting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Career Vision</h2>
            <p className="text-neutral-300 leading-relaxed">
              To build meaningful and scalable technological ecosystems that combine engineering excellence, strategic thinking, and human-centered design. My long-term aspiration is to contribute to innovative solutions in AI, software infrastructure, and digital communities while continuously exploring the intersection of technology, philosophy, and culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullAbout;
