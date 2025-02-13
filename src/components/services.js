import Image from "next/image";


const Services = () => {
    const services = [
        { id: 1, title: "Service 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 2, title: "Service 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 3, title: "Service 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
    ];
    console.log(styles);

    return (
        <section className={styles.services}>
            <h2 className={styles.h2}>Check Out Our Services</h2>
            <div className={styles.servicesContainer}>
                {services.map(service => (
                    <div key={service.id} className={styles.serviceCard}>
                        <Image src="/service.jpg" alt={service.title} width={300} height={200} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
