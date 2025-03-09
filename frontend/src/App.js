import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

function App() {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        socket.on("updateBids", (newBid) => {
            setBids((prevBids) => [...prevBids, newBid]);
        });
    }, []);

    const placeBid = () => {
        const bidAmount = Math.floor(Math.random() * 1000);
        socket.emit("placeBid", { user: "User1", amount: bidAmount });
    };

    return (
        <div>
            <h1>Auction App</h1>
            <button onClick={placeBid}>Place Random Bid</button>
            <ul>
                {bids.map((bid, index) => (
                    <li key={index}>{bid.user} placed ${bid.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;