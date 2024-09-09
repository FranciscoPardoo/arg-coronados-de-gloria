import sol from "/sol-de-mayo.png";

function Footer() {
    return (
        <footer className="bg-bluelight h-auto w-full flex flex-col sm:flex-row items-center lg:justify-between justify-center p-4 sm:p-6">
            <div className="flex flex-row justify-center items-center mb-4 sm:mb-0">
                <img src={sol} alt="Sol de Mayo" className="w-12 h-12 sm:w-16 sm:h-16" />
                <div className="ml-3 sm:ml-5 flex flex-col justify-center text-center sm:text-left">
                    <h1 className="font-montserrat italic font-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest text-slate-50 mb-0">
                        Argentina
                    </h1>
                    <h2 className="font-montserrat italic font-black text-sm sm:text-md tracking-tight text-slate-50 leading-none">
                        Coronados de Gloria
                    </h2>
                </div>
            </div>
            <p className="font-montserrat italic font-medium text-xs sm:text-sm text-slate-50 text-center">
                Copyright 2024 | Diseñado y Desarrollado por Francisco Pardo
            </p>
        </footer>
    );
}

export default Footer;
