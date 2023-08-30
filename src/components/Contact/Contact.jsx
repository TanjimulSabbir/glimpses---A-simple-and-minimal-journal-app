
function Contact() {
    return (
        <div className="py-10 raleway">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-extrabold lora mb-10">Join our mailing list to stay up to date</h1>
                <p className="text-Primary">
                    Be the first to hear about the latest product releases & other exclusive content. Don't worry, we'll never flood your inbox
                </p>
            </div>
            <div className="w-full max-w-6xl mx-auto">
                <form action="">
                    <input type="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Contact