export default function ContactMap() {
    return (
        <section className="pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden relative grayscale-[20%] hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415058778!2d73.72107954101898!3d19.991109988229775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714574925890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sambhav Export Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
