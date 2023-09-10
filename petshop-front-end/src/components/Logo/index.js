import logo from "../../img/logonav (1).png"

function Logo() {
    return (
        <div className="flex flex-col justify-center -mt-20">
            <img src={logo} className="w-[300px]" alt="Logo do projeto"/>
        </div>
    )
}

export default Logo