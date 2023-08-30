import microsoft from "../../assets/Photos/Company/ms-logo-gray.svg";
import zapier from "../../assets/Photos/Company/zapier.png";
import matelogo from "../../assets/Photos/Company/mtelogo.svg";
import thetimesnews from "../../assets/Photos/Company/thetimesnews.png";
function Company() {
    const Companies = [microsoft, zapier, matelogo, thetimesnews]
    return (
        <div className="my-14">
            <div>
                {
                    Companies.map((company, index) => {
                        return (
                            <div key={index}>
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