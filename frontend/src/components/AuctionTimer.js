import React, { useState, useEffect } from 'react';

const AuctionTimer = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                <span>{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            ) : (
                <span>Auction Ended</span>
            )}
        </div>
    );
};

export default AuctionTimer;
