"use client";
import {TypeAnimation} from "react-type-animation";

const PersonSection = () => {
    return <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center">
                <div className="flex justify-center mb-16">
                    <img src="./photo.jpg" alt="Image" width={300} className="rounded-3xl"/>
                </div>
                <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Mateusz Bonar</h6>
                <TypeAnimation
                    sequence={[
                        "Mid React Developer",
                        1000,
                        'Frontend Developer',
                        1000,
                        "Pasjonat programowania",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"
                />
                <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Pełen pasji i zaangażowania do
                    oprogramowania. Lubię
                    tworzyć narzędzia, które ułatwiają ludziom życie.</p>
                <a href="https://www.linkedin.com/in/mateusz-bonar-98b923180/"
                   className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Kontakt</a>
                <a
                    href="./cv.pdf"
                    download="Mateusz_Bonar_CV.pdf"
                    className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500 ml-4">Pobierz
                    CV
                </a>
            </div>
        </div>
    </section>
}

export default PersonSection