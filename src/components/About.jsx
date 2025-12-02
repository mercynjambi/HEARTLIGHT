import { FileText, Shield } from 'lucide-react';
import peter from '../assets/peter.jpg';

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
              src={peter}
              alt="Hands together in support"
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>

          <div>
            <h1 className="text-5xl md:text65xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your Family's <span className='text-4xl md:text-5xl text-secondary font-bold text-gray-900 mb-6 leading-tight'>Financial Future</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Join our comprehensive welfare fund program with flexible plans, easy claims processing and reliable support when you need it most. We work together with our members to enable them access financial support and a decent send off for their loved ones.
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
               We extend our compassionate care and practical support to every individual and family grieving the loss of a loved one, no one walks through grief alone. Our services are open to all who need a helping hand during one of life’s most difficult journeys
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
