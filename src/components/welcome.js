const Welcome = () => {
    return (
      <section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: "url('/background.jpeg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
  
        {/* Text Content */}
        <div className="relative text-center max-w-[1400px] text-2xl mx-auto p-2">
          <h1 className="font-bold text-[32px]">Welcome to Our Website</h1>
          <p>Discover our amazing services and products.</p>
        </div>
      </section>
    );
  };
  
  export default Welcome;
  