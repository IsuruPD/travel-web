import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
        // Reset form after submission
        setEmail('');
    };

    return (
        <section className="py-16 bg-amber-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6 playfair">Stay in the Wild</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for exclusive offers, wildlife updates, and safari tips from our expert guides.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition"
                    >
                        SUBSCRIBE
                    </button>
                </form>

                <p className="text-sm mt-4 text-amber-200">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
