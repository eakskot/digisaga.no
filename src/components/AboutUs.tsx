
import React from "react";
import { Users, Heart, Lightbulb } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 font-plex">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-wider text-digisaga-warmOrange uppercase mb-3">
              Om oss
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Et ungt team med stor <span className="relative inline-block">
                <span className="relative z-10 text-digisaga-warmOrange">lidenskap</span>
                <span className="absolute -z-10 left-0 bottom-1 bg-digisaga-yellow/30 w-full h-3 transform -rotate-1 rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-digisaga-yellow to-digisaga-warmOrange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Fire studenter</h3>
              <p className="text-gray-600 text-sm">Med felles lidenskap for AI og teknologi</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-digisaga-warmOrange to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Praktisk fokus</h3>
              <p className="text-gray-600 text-sm">AI som frigjør tid til mer meningsfulle oppgaver</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-digisaga-yellow to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Enkle løsninger</h3>
              <p className="text-gray-600 text-sm">Målbare resultater i hverdagen</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200/50">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-digisaga-warmOrange">Digisaga</strong> er et norsk teknologiselskap startet av fire engasjerte studenter med en felles lidenskap for kunstig intelligens og ny teknologi. Vi hjelper bedrifter med å automatisere rutiner, forbedre kundedialog og ta i bruk AI på en måte som er både praktisk og verdiskapende.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vi tror på en fremtid der AI ikke erstatter mennesker, men frigjør tid og gir rom for mer meningsfulle oppgaver. Derfor utvikler vi løsninger som er enkle å implementere og gir målbare resultater i hverdagen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hos Digisaga møter du et ungt og nysgjerrig team som brenner for å gjøre ny teknologi tilgjengelig for alle – og som setter seg godt inn i hver enkelt kundes behov.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
