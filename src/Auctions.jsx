import PropTypes from 'prop-types'
import './styles/auctions.css'
import { setRefreshCallback } from './modules/auctionEvents.js';
import { getAuctions } from './api/auctions.js';
import { useEffect, useState } from "react";
import { getColor } from './modules/getRarityColor.js';

function AuctionsList() {
    const [auctions, setAuctions] = useState([]);

    async function refresh() {
        const newAuctions = await getAuctions(); 
        setAuctions(newAuctions);
    }

    useEffect(() => {
        setRefreshCallback(refresh);
    }, [])

    return(
        <div className='auction-list'>
            {auctions.map((auction) => (
                <Auction key={auction.id} item_name={auction.item_name} tier={auction.tier} highest_bid_amount={auction.highest_bid_amount} starting_bid={auction.starting_bid} />
            ))}
        </div>
    )
}


function Auction(props) {
    const color = getColor(props.tier)
    let price = props.starting_bid
    if (props.highest_bid_amount != 0) {
        price = props.highest_bid_amount
    }
    return(
        <div>
            <h3 style={{ color: color }}>{props.item_name}</h3>
            <p className='price'>${price}</p>
        </div>
    )
}
Auction.protoTypes = {
    item_name: PropTypes.string,
    tier: PropTypes.string,
    starting_bid: PropTypes.number,
    highest_bid_amount: PropTypes.number
}

export default  AuctionsList