
function Contact() {
    return (
        <div className="UniversalPadding py-14">
            <div className="text-center mb-10">
                <h1 className="text-2xl font-extrabold lora mb-8">Join our mailing list to stay up to date</h1>
                <p className="text-Primary text-center">
                    Be the first to hear about the latest product releases & other exclusive  <br /> content. Don't worry, we'll never flood your inbox
                </p>
            </div>
            <div className="w-full max-w-6xl mx-auto flex justify-center">
                <form>
                    <input className="py-3 bg-gray-100 rounded px-3 w-64 placeholder:pl-1 placeholder:text-Primary"  type="email" placeholder="Your Email" />
                    <button className="text-white text-sm uppercase ml-3 rounded py-3 px-6 font-bold  bg-Blue">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Contact