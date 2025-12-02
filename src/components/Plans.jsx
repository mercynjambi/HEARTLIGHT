import { Shield, Users, DollarSign, FileText, CheckCircle } from 'lucide-react';

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-200 via-stone-100 to-stone-200">

      {/* PLANS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Select the coverage that's right for you and your family
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD COMPONENT (Reusable styling) */}
            {[
              {
                title: "Bronze",
                price: "Kes 500",
                sum: "Kes 70,000",
                features: ["Individual cover", "Ages 18-85", "24/7 Priority support"],
              },
              {
                title: "Silver",
                price: "Kes 1,800",
                sum: "Kes 100,000",
                features: [
                  "Family cover",
                  "Ages 25-85",
                  "Parents + children below 20yrs",
                  "24/7 Priority support",
                ],
              },
              {
                title: "Platinum",
                price: "Kes 2,400",
                sum: "Kes 200,000",
                features: [
                  "Extended family cover",
                  "Ages 25-85",
                  "Parents + children + in-laws",
                  "24/7 VIP support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="
                  bg-white/90 backdrop-blur p-8 rounded-xl 
                  shadow-md border border-gray-200
                  transition-all duration-300 
                  hover:shadow-2xl hover:scale-105 
                  hover:border-[3px]
                  hover:border-[var(--color-primary)]
                "
              >
                <h3 className="text-2xl font-bold text-gray-700 mb-2">{plan.title}</h3>

                <div className="mb-6">
                  <span className="text-5xl font-bold" style={{ color: "var(--color-primary)" }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="text-gray-600 mb-6">Sum Assured: {plan.sum}</p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 rounded-lg font-semibold transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  Select {plan.title}
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* BENEFITS SECTION */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Welfare Fund?
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive protection with modern convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/80 backdrop-blur p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--color-primary)" }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple 4-step registration process with plan selection and dependent management
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--color-secondary)" }}>
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Flexible Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Bronze, Silver, and Platinum plans to fit your budget and coverage needs
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--color-primary)" }}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Claims</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined claims process with document upload and status tracking
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="py-8 bg-stone-100">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Yearly Subscription
    </h2>

    <div className="bg-white p-8 rounded-xl shadow-md text-xl md:text-2xl font-medium text-gray-700">
      <p className="mb-4">
        <span className="font-bold text-[var(--color-primary)]">Bronze:</span> Kes 5,400/year
      </p>
      <p className="mb-4">
        <span className="font-bold text-[var(--color-primary)]">Silver:</span> Kes 21,000/year
      </p>
      <p>
        <span className="font-bold text-[var(--color-primary)]">Platinum:</span> Kes 27,600/year
      </p>
    </div>
  </div>
</section>


    </div>
  );
};

export default Plans;
