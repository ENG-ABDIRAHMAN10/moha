import React from 'react';
import { SOCIAL_LINKS, PROFILE_IMAGE_URL, USER_NAME } from './constants';
import SocialIcon from './components/SocialIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden font-sans">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Card */}
      <main className="relative z-10 w-full max-w-6xl bg-slate-800/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 order-2 md:order-1">
          
          {/* NAME – ONE LINE */}
          <h1 className="font-extrabold text-white tracking-tight whitespace-nowrap text-[clamp(2.2rem,5vw,4rem)]">
            {USER_NAME}
          </h1>

          {/* SOCIAL LINKS */}
          <div className="space-y-4 pt-4 border-t border-white/5 w-full">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              Connect With Me
            </h2>

            <div className="flex flex-row justify-between items-center w-full">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-700/50 hover:bg-brand-600 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/25"
                >
                  <SocialIcon
                    platform={link.platform}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-white transition-colors"
                  />

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
                    {link.username}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="w-full md:w-1/2 bg-slate-900 order-1 md:order-2 overflow-hidden group">
          <div className="relative w-full aspect-[1000/1056] md:h-full">
            <img
              src={PROFILE_IMAGE_URL}
              alt={USER_NAME}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
