import React, { useEffect, useState } from 'react'
import { formatRatings } from '../../utils/formatRatings';

const Ratings = ({ popularity }) => {
    const [itemRatings, setItemRatings] = useState(0);

    const setRatings = () => {
        if (popularity > 40000) {
            setItemRatings(5);
        }
        else if (popularity > 30000) {
            setItemRatings(4);
        }
        else if (popularity > 20000) {
            setItemRatings(3);
        }
        else if (popularity > 10000) {
            setItemRatings(2);
        }
        else {
            setItemRatings(1);
        }
    }

    useEffect(() => {
        setRatings();
    }, [popularity])

    return (
        <span className="flex items-center my-1">
            <svg fill={itemRatings > 0 ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill={itemRatings > 1 ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill={itemRatings > 2 ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill={itemRatings > 3 ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill={itemRatings > 4 ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-500 ml-2 text-sm">{formatRatings(popularity)} Reviews</span>
        </span>
    )
}

export default Ratings