const ExperienceSection = () => {
    return <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Doświadczenie</h1>

            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Poniżej kilka informacji na temat mojego doświadczenia</p>

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                    <h6 className="font-medium text-gray-400 text-base uppercase">Firma</h6>
                    <p className="font-semibold text-gray-600 text-base">Britenet <span
                        className="font-normal text-gray-300">/ Kielce</span></p>
                    <p className="font-semibold text-gray-600 text-base">Britenet <span
                        className="font-normal text-gray-300">/ Kielce</span></p>
                    <p className="font-semibold text-gray-600 text-base">Onwelo <span
                        className="font-normal text-gray-300">/ Kielce</span></p>
                </div>

                <div className="space-y-8 md:space-y-16 mb-16 md:mb-0 lg:ml-8">
                    <h6 className="font-medium text-gray-400 text-base uppercase">Stanowisko</h6>
                    <p className="font-normal text-gray-400 text-base">Mid React Developer <br/> Dzięki ciągłemu zaangażowaniu i rozwijaniu swoich kompetencji, awansowałem na stanowisko Frontend Lider Development gdzie nadzoruję projekt, jak również uczestniczę w procesie podejmowania decyzji technicznych i strategii. </p>
                    <p className="font-normal text-gray-400 text-base">Junior React Developer <br/> Praca w projekcie w branży logistycznej, tworzenie nowych modułów jak również naprawa błędów </p>
                    <p className="font-normal text-gray-400 text-base">Trainee Frontend Developer <br/> Letni staż na który się zakwalifikowałem gdzie pod okiem doświadczonych programistów tworzyliśmy wewnętrzne projekty</p>
                </div>

                <div className="space-y-8 md:space-y-16">
                    <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>
                    <p className="font-normal text-gray-400 text-base">grudzień 2022 - obecnie</p>
                    <p className="font-normal text-gray-400 text-base">marzec 2021 - grudzień 2022</p>
                    <p className="font-normal text-gray-400 text-base">lipiec 2019 - sierpien 2019</p>
                </div>
            </div>

        </div>

    </section>
}

export default ExperienceSection