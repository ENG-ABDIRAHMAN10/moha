import React from 'react';
import { SOCIAL_LINKS, PROFILE_IMAGE_URL } from './constants';
import SocialIcon from './components/SocialIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#0b1624] relative overflow-hidden font-sans">
      
      {/* Main Card */}
      <main className="w-full max-w-7xl bg-[#0f1e2f] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-10">
          
          {/* NAME – VERTICAL (LIKE IMAGE) */}
          <h1 className="text-white font-extrabold leading-tight tracking-tight">
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Mohamed
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Osmaan
            </span>
          </h1>

          {/* CONNECT */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
              Connect With Me
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="group relative flex items-center justify-center w-12 h-12 bg-slate-700/40 hover:bg-slate-600 rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <SocialIcon
                    platform={link.platform}
                    className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors"
                  />

                  {/* Tooltip */}
                  <span className="absolute -top-10 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.username}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="w-full md:w-1/2 bg-black overflow-hidden">
          <div className="relative w-full h-full aspect-[1000/1056]">
            <img
              src={PROFILE_IMAGE_URL}
              alt="Mohamed Osmaan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
