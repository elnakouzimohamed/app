import '../styles/Services.css';

const Services = () => {
    const services = [
        { id: 1, title: 'Service 01', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!', image: '../service.jpg' },
        { id: 2, title: 'Service 02', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!', image: '/service.jpg' },
        { id: 3, title: 'Service 03', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!', image: '/service.jpg' }
    ];

    return (
        <section className="services">
            <h2>Check Out Our Services</h2>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;