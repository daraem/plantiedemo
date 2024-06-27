
export default function home() {
    return (
    <>
        <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
            <div className="bg-white w-[60%] h-[70%] rounded-xl">
                <div className="flex justify-center items-start">
                    <div className="bg-white w-[25%] h-[45%] my-[1%]">
                        <img src="/logo/plantiedblogo.png" className="h-[100%] w-[100%]"></img>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-justify w-[75%]"><strong>Welcome to this demo!</strong> PlantieDB is an ongoing docker project destinated to the creation of plant databases
                    containing the information you want to display. I plan to release the full version in the next 3 months, meanwhile,
                    you can follow the journey on my <a href="https://daraem.github.io/Devblog/" className="link">blog</a>.</p>
                </div>
            </div>
        </div>
    </>        
    )
}