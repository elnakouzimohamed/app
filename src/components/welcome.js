const Welcome = ({title, description, image, title_size , title_font }) => {
    return (
      
      <section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: image }}>
      
        <div className="absolute inset-0 bg-black opacity-20"></div>
  
     
        <div className="relative text-center max-w-[1400px] mx-auto p-2">
          <h1 className={` ${size} ${font}`}>{title}</h1>
          <p className="sm:text-[24px] text-[20px]">{description}</p>
        </div>
      </section>
    );
  
  };
  
  export default Welcome;
  