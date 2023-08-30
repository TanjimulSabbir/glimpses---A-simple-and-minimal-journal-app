import ServicesData from "./Services.json"
function Services({ Icons }) {
    // const AllServices = [...ServicesData.Services, Icons];
    // console.log('AllServices', [...Icons])
    return (
        <div>
            {
                Services.map(service => {
                    return (
                        <>

                        </>
                    )
                })
            }
        </div>
    )
}

export default Services