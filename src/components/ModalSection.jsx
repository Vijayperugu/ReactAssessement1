
const models = [
  {
    name: '1290 SUPER DUKE R EVO',
    specs: '180 HP | 140 Nm | 189 kg',
    image: 'bike1.jpeg',
    overlayTitle: 'SUPER DUKE',
    overlayText: 'The Beast',
  },
  {
    name: '1290 SUPER ADVENTURE',
    specs: '160 HP | 138 Nm | 215 kg',
    image: 'bike2.jpeg',
    overlayTitle: 'ADVENTURE',
    overlayText: 'Born To Explore',
  },
  {
    name: 'RC 390',
    specs: '44 HP | 37 Nm | 155 kg',
    image: 'bike3.jpeg',
    overlayTitle: 'RC SERIES',
    overlayText: 'Track Focused',
  },
  {
    name: '890 DUKE R',
    specs: '121 HP | 99 Nm | 166 kg',
    image: 'bike4.jpeg',
    overlayTitle: 'DUKE',
    overlayText: 'The Streetfighter',
  },
];

const ModelsSection = () => {
  return (
    <section id="models" className="models-section">
      <div className="container">
        <h2 className="section-title">OUR MODELS</h2>
        <p className="section-subtitle">READY TO RACE</p>
        <div className="models-grid">
          {models.map((model, idx) => (
            <div className="model-card" key={idx}>
              <div className="model-image">
                <img src={model.image} alt={model.name} />
                <div className="model-overlay">
                  <h3>{model.overlayTitle}</h3>
                  <p>{model.overlayText}</p>
                </div>
              </div>
              <div className="model-info">
                <h3>{model.name}</h3>
                <p>{model.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
