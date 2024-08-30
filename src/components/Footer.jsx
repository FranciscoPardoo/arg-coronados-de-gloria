import sol from "/sol-de-mayo.png"

function Footer() {
    return (
        <footer className="bg-bluelight h-20 flex items-center justify-center">
            <div className="flex flex-row justify-center items-center">
                <img src={sol} alt="Sol de Mayo" className="w-16 h-16" />
                <div className="ml-5 flex flex-col justify-center">
                    <h1 className="font-montserrat italic font-black text-3xl tracking-widest text-slate-50 mb-0">Argentina</h1>
                    <h2 className="font-montserrat italic font-black text-lg tracking-tight text-slate-50 leading-none">Coronados de Gloria</h2>
                </div>
                <p className="font-montserrat italic font-medium text-sm text-slate-50 ml-40">Copyright 2024 | Diseñado y Desarrollado por Francisco Pardo</p>
            </div>
        </footer>
    )
}

export default Footer