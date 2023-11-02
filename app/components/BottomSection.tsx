const BottomSection = () => {
    return <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center">
                <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Skontaktuj się ze mną</h1>
                <p className="font-normal text-gray-400 text-md md:text-lg mb-20">Zawsze jestem gotów do komunikacji i
                    nawiązania nowych kontaktów. Jeśli chcesz się ze mną skontaktować, jestem dostępny przez kilka
                    różnych kanałów. </p>
                <div className="flex items-center justify-center space-x-8">
                    <a href="#"
                       className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="instagram"
                           className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"/>
                    </a>
                </div>
            </div>

        </div>

    </footer>
}

export default BottomSection