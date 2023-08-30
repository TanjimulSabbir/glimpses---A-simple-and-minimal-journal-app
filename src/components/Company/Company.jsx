import microsoft from "../../assets/Photos/Company/microsoft.svg";
import zapier from "../../assets/Photos/Company/zapier.png";
import matelogo from "../../assets/Photos/Company/mtelogo.svg";
import thetimesnews from "../../assets/Photos/Company/thetimesnews.png";
function Company() {
    const Companies = [microsoft, zapier, matelogo, thetimesnews]
    return (
        <div className="my-14">
            <div className="flex items-center justify-evenly text-black">
                {
                    Companies.map((company, index) => {
                        console.log(company)
                        return (
                            <div key={index} className="w-[200px]">
                                <img src={company} alt={company} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Company