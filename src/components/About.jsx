import { FileText, Shield } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 bg-primary text-white rounded-2xl p-8 shadow-lg z-10 -translate-y-8">
              <div className="text-6xl font-bold  text-center text-secondary">2</div>
              <div className="text-2xl font-semibold text-secondary mt-2">Years</div>
              <div className="text-xl text-secondary mt-1">Experience</div>
            </div>
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hands together in support"
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We support our members financially during unforeseen eventualities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tujipange Companion is a registered Welfare Association which provides last expense cover to its members
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Flexible cover Plans</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Transparency and accountability</h3>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-8 leading-relaxed">
              we work together with members to enable them access financial support and decent send off to their loved ones when bereaved regardless of their financial challenges
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who we cover?</h2>
              <p className="text-lg leading-relaxed mb-8 text-blue-50">
                Our funeral expenses cover is designed to include everyone, ensuring that no one is left behind in their time of need. We provide compassionate and comprehensive support for all families, regardless of background. Your peace of mind is our commitment, and we are here for you every step of the way.
              </p>
              <button className="bg-black/10 hover:bg-cyan-300 text-secondary font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                More Details
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">1345 +</div>
                <div className="text-secondary text-lg">Happy Clients</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">21 +</div>
                <div className="text-secondary text-lg">Paid Cover</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">★★★★★</div>
                <div className="text-secondary text-lg">Customer Ratings</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">Excellent</div>
                <div className="text-secondary text-lg">Customer Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
