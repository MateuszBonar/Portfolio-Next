const EducationSection = () => {

    const education = [{
        title: '2016 - 2020',
        description: 'Kielce University of Technology (inż.)',
    }, {
        title: '2020 - 2021',
        description: 'Kielce University of Technology (Mgr inż.)',
    }]

    return <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Wykształcenie</h1>

            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I
                studied</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {education.map(({title, description, isCurrent}, index) => <div
                    className="bg-gray-50 px-8 py-10 rounded-md"
                    key={index}>
                    <h4 className="font-medium text-gray-700 text-lg mb-4">{title}</h4>

                    <p className="font-normal text-gray-500 text-md mb-4">{description}</p>
                    {isCurrent &&

                        <div className="relative">
                            <h6 className="font-semibold text-gray-500 text-md relative z-10">Aktualnie</h6>
                        </div>
                    }
                </div>)}
            </div>

        </div>

    </section>
}

export default EducationSection