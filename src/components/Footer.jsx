import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Resume Section */}
        <div className="resume-card mb-12 hover-grow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2 gradient-text">View My Resume</h3>
              <p className="text-gray-400">Download my detailed resume to learn more about my experience and skills</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/0xravii/Cybersecurity%20and%20Software.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#915EFF] hover:bg-[#7140d1] text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover-grow"
              >
                <span>📄 View Resume</span>
              </a>
              <a 
                href="/0xravii/Cybersecurity%20and%20Software.pdf"
                download
                className="border-2 border-[#915EFF] text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-[#915EFF] hover-grow"
              >
                <span>⬇️ Download PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400">📧 molletiravikumar798@gmail.com</p>
            <p className="text-gray-400">📞 +917989999344</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ravi-kumar-molleti-2a566721b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://instagram.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Ravi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;