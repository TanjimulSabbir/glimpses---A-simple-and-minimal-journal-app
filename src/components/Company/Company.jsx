import microsoft from "../../assets/Photos/Company/microsoft.svg";
import zapier from "../../assets/Photos/Company/zapier.png";
import matelogo from "../../assets/Photos/Company/mtelogo.svg";
import thetimesnews from "../../assets/Photos/Company/thetimesnews.png";
function Company() {
    const Companies = [microsoft, zapier, matelogo, thetimesnews]
    return (
        <div className="my-12 w-full max-w-5xl mx-auto">
            <div className="flex items-center justify-between text-black">
                {
                    Companies.map((company, index) => {
                        console.log(company)
                        return (
                            <div key={index} className={`${index >= 2 ? "w-60" : "w-24"}`}>
                                <img className="w-full h-full" src={company} alt={company} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Company