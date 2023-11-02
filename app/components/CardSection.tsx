const CardSection = () => {

    const data = [{
        title: 'O mnie',
        description: 'Jestem doświadczonym programista frontedowym specjalizującym się w technologii React. Dzięki solidnemu doświadczeniu z pracy z bibliotekami i narzędzami jestem w stanie tworzyć kompleksowe rozwiązania.'
    }, {
        title: 'Moja historia',
        description: 'Ukończyłem studia pierwszego i drugiego stopnia z informatyki na Politechnice Świętokrzyskiej ze specjalizacją systemy informacyjne. Podczas studiów magisterskich rozpocząłem już pracę w branży frontend. '
    }, {
        title: 'Technologie',
        description: 'Rozwijam się w technologiach takich jak React, Next, SCSS, Jest, Playwright. Również technologiach backendowych: MongoDB, Express. Moją misją jest wykorzystywanie swojej wiedzy i umiejętności, aby tworzyć innowacyjne rozwiązania. '
    }]

    return <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(({icon, title, description}) => <div className="bg-gray-50 px-8 py-10 rounded-md"
                                                               key={icon}>
                    <h4 className="font-medium text-gray-700 text-lg mb-4">{title}</h4>
                    <p className="font-normal text-gray-500 text-md">{description}</p>
                </div>)
                }
            </div>
        </div>

    </section>
}

export default CardSection