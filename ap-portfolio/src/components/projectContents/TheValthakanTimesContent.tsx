export default function PriceSnapContents(){
    return(
    <>
    {/* Overview */}
    <section className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="grid grid-col-2 gap-4 max-w-4xl mx-auto">
        <img
          src="/images/pricesnap/store_1.png"  
          alt="Store img 1"
          className="w-full rounded-2xl shadow-lg mb-10 object-cover"
        />
        <img
          src="/images/pricesnap/store_2.png"  
          alt="Store img 1"
          className="w-full rounded-2xl shadow-lg mb-10 object-cover"
        />
          
        <h2 className="text-gray-900 font-semibold text-2xl mb-6">Overview</h2>
        <p className="text-gray-700 font-sans leading-relaxed mb-4">
          In Vancouver, the same product is often sold at different prices across stores. 
          When I first arrived in Vancouver, I was surprised by these price differences. 
          This application allows users to conveniently compare prices among different stores.
        </p>
        <p className="text-gray-700 font-sans leading-relaxed">
          After conducting market research, I found that there were already various websites that compare product prices across stores.
          However, due to the following issues, I decided to develop PriceSnap.
        </p>
      </div>
    </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 font-semibold text-2xl mb-6">Problem</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">
    
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Users must visit each market’s website to check prices.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>The service cannot be used without creating an account.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>It is difficult to browse and compare across different markets.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900  font-semibold text-2xl mb-6">Solution</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">
                
              </p>
              <ul className="space-y-3  font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Integrated into a single app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Quick search without the need to create an account</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>UI design for price comparison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 font-semibold text-2xl mb-6">Breifing</h2>
          <img
            src="/images/pricesnap/Purpose goal.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 mb-6 font-semibold text-2xl py-12">Design Concept</h2>
          <img
            src="/images/pricesnap/pricesnap_design.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Sitemap</h2>
          <img
            src="/images/pricesnap/Sitemap.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Wireframe</h2>
          <img
            src="/images/pricesnap/wireframe.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Mockup</h2>
          <img
            src="/images/pricesnap/Mockup.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </>
    )
}