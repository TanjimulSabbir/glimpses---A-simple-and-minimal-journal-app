import microsoft from "../../assets/Photos/Company/microsoft.svg";
import zapier from "../../assets/Photos/Company/zapier.png";
import matelogo from "../../assets/Photos/Company/mtelogo.svg";
import thetimesnews from "../../assets/Photos/Company/thetimesnews.png";
function Company() {
    const Companies = [microsoft, zapier, matelogo, thetimesnews]
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <div className="UniversalPadding my-12 w-full max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 text-black">
                    {
                        Companies.map((company, index) => {
                            console.log(company)
                            return (
                                <div key={index} className={`${index >= 2 ? "w-52" : "w-28"}`}>
                                    <a href={`${company}`}><img className="w-full h-full" src={company} alt={company} /></a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Company