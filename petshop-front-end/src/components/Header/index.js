import NavBar from "../NavBar"

function Header({ title }) {
    return (
        <> 
            <div className="grid grid-cols-[13rem_auto] items-start h-full">
                <NavBar />
            <main className="flex flex-col items-center">
            
                <div className="bg-gray-200 w-full h-20 flex items-center">
                    <h1 className="text-#0588D1 text-[35px] ml-3 font-medium">{title}</h1>
                </div>
                
            </main>
            </div>
        </>
    )
}

export default Header;