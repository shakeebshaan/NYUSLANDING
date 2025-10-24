import React from 'react';

interface Review {
    rating: number;
    title: string;
    content: string;
    author: string;
}

const reviews: Review[] = [
    {
        rating: 5,
        title: "Perfect, fast And Reliable",
        content: "Perfect, reliable, with all the features you really need and none of the garage gimmick ones. Love the privacy protecting elements of the app. !",
        author: "olamk"
    },
    {
        rating: 5,
        title: "Awesome app",
        content: "Easy to use, library of products is incredible and I love the ability to create recipes. Top notch!",
        author: "Jtillz7725"
    },
    {
        rating: 5,
        title: "Perfect for tracking nutrients",
        content: "The app makes it easy to track what foods I eat. The interface is nice and aesthetic. I recommend it to everyone!",
        author: "mxrton"
    },
    {
        rating: 5,
        title: "Fantastic!",
        content: "Great because it is easy to use and gives a good overview of the macro's. Also, putting in goals was very helpful.",
        author: "A concerned Christian parent"
    },
    {
        rating: 5,
        title: "Best food tracking app I've ever used!",
        content: "Seriously, I cannot recommend this app enough. If you're looking for a food tracker, this is the one.",
        author: "grey280"
    },
    {
        rating: 5,
        title: "BEST COACHING APP EVER",
        content: "Switched over to this from My Fitness Pal and never going back",
        author: "apc1031"
    },
    {
        rating: 5,
        title: "The best app for tracking",
        content: "Love the community database, simple design and small size",
        author: "Dmitry Barskov"
    },
    {
        rating: 5,
        title: "Loved it from the start",
        content: "I've tried a lot of coaching apps and this is by far the best I've found.",
        author: "Xurble"
    },
    {
        rating: 5,
        title: "So Good, and Keeps Getting Better",
        content: "This app is amazing for tracking food intake, and the developer is constantly improving it based on user feedback.",
        author: "dentonjacobs"
    }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill={index < rating ? "#FF6B35" : "#E5E7EB"}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <StarRating rating={review.rating} />
            <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3">
                "{review.title}"
            </h3>
            <p className="text-sm sm:text-base text-text-gray leading-relaxed mb-4 flex-grow">
                {review.content}
            </p>
            <p className="text-sm text-text-gray font-medium">
                – {review.author}
            </p>
        </div>
    );
};

const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right' }> = ({ children, direction = 'left' }) => (
    <div className="flex w-full overflow-hidden">
        <div className={`flex-shrink-0 flex items-start gap-4 will-change-transform ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
            {children}
        </div>
        <div className={`flex-shrink-0 flex items-start gap-4 will-change-transform ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`} aria-hidden="true">
            {children}
        </div>
    </div>
);

const DynamicCards: React.FC = () => {
    const firstRow = reviews.slice(0, 5);
    const secondRow = reviews.slice(5);

    return (
        <section className="bg-off-white text-text-dark py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <span className="inline-block bg-gray-100 text-text-gray text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-border-light">
                    Reviews
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 leading-tight px-2">
                    "This app has<br/>
                    <span className="bg-gradient-to-r from-secondary-orange via-primary-background to-primary-brand text-transparent bg-clip-text"> changed my life"</span>
                </h2>
                
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-gray max-w-xl mx-auto px-4">
                    Hear how NYUS transforms lives, directly from those who've made it.
                </p>

                <div className="mt-12 sm:mt-16 flex flex-col gap-4 sm:gap-6 -mx-4">
                    <Marquee direction="right">
                        {firstRow.map((review, index) => (
                            <div key={`a-${index}`} className="w-80 sm:w-96 flex-shrink-0 mx-2">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee direction="left">
                        {secondRow.map((review, index) => (
                            <div key={`b-${index}`} className="w-80 sm:w-96 flex-shrink-0 mx-2">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default DynamicCards;
