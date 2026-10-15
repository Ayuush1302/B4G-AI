const Styleguide = () => {
  return (
    <div className="min-h-screen bg-brand-white p-12 max-w-7xl mx-auto space-y-16">
      <header className="border-b pb-8">
        <h1 className="text-4xl font-bold">Design Tokens & Styleguide</h1>
        <p className="text-brand-dark-grey mt-2">Visualizing all measured tokens from the audit.</p>
      </header>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Primary', class: 'bg-brand-primary', hex: '#fbe57e' },
            { name: 'Black', class: 'bg-brand-black', hex: '#2a2928' },
            { name: 'White', class: 'bg-brand-white border border-gray-200', hex: '#ffffff' },
            { name: 'Dark Grey', class: 'bg-brand-dark-grey', hex: '#63615e' },
            { name: 'Medium Grey', class: 'bg-brand-medium-grey', hex: '#96938f' },
            { name: 'Light Grey', class: 'bg-brand-light-grey', hex: '#efeeec' },
            { name: 'Lightest Grey', class: 'bg-brand-lightest-grey', hex: '#f5f4f3' },
          ].map((color, i) => (
            <div key={i} className="space-y-2">
              <div className={`w-full h-24 rounded-md ${color.class}`} />
              <p className="font-bold">{color.name}</p>
              <p className="text-sm text-brand-dark-grey uppercase">{color.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Typography (Aspekta)</h2>
        <div className="space-y-8">
          <div><p className="text-sm text-brand-medium-grey mb-1">H1 - 8xl (Fluid)</p><h1>Heading 1</h1></div>
          <div><p className="text-sm text-brand-medium-grey mb-1">H2 - 4xl (Fluid)</p><h2>Heading 2</h2></div>
          <div><p className="text-sm text-brand-medium-grey mb-1">H3 - 4xl (Fluid)</p><h3>Heading 3</h3></div>
          <div><p className="text-sm text-brand-medium-grey mb-1">H4 - 3xl (Fluid)</p><h4>Heading 4</h4></div>
          <div><p className="text-sm text-brand-medium-grey mb-1">H5 - Large</p><h5>Heading 5</h5></div>
          <div><p className="text-sm text-brand-medium-grey mb-1">H6 - Base</p><h6>Heading 6</h6></div>
          <div>
            <p className="text-sm text-brand-medium-grey mb-1">Paragraph - Base (Fluid)</p>
            <p>
              This is a sample paragraph. The typography scale uses clamp values derived from the 
              original computed styles. The line height is set to 1.3, and letter spacing is tight at -0.01em.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-brand-primary text-brand-black font-medium px-8 py-4 rounded-md hover:bg-brand-primary/90 transition-colors focus:ring-4 focus:ring-brand-primary/50 outline-none">
            Primary Button
          </button>
          <button className="bg-brand-black text-brand-white font-medium px-8 py-4 rounded-md hover:bg-brand-dark-grey transition-colors focus:ring-4 focus:ring-brand-primary/50 outline-none">
            Secondary Dark
          </button>
          <button className="bg-brand-lightest-grey text-brand-black font-medium px-8 py-4 rounded-md hover:bg-brand-light-grey transition-colors focus:ring-4 focus:ring-brand-primary/50 outline-none">
            Secondary Light
          </button>
        </div>
      </section>

      {/* Form Inputs */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Form Inputs</h2>
        <div className="max-w-md space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="border-b border-brand-medium-grey py-3 bg-transparent outline-none focus:border-brand-black transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Sample Card */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Sample Card (with INFERRED shadow)</h2>
        <div className="max-w-sm bg-brand-white p-8 rounded-lg shadow-card border border-brand-lightest-grey">
          <div className="w-12 h-12 bg-brand-primary rounded-sm mb-6" />
          <h4 className="mb-4">Digital Strategy</h4>
          <p>Data-driven roadmaps to position your brand as a market leader and maximize ROI.</p>
        </div>
      </section>
    </div>
  );
};

export default Styleguide;
