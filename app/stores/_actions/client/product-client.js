'use client'

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getProducts} from "@/app/stores/_actions/stock_item";

const useCachedItems = (storeid) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAndCacheItems = async (storeid) => {
        try {
            // Fetch items from Firebase
            const itemsData = getProducts(storeid)

            // Store fetched items in localStorage
            localStorage.setItem('items', JSON.stringify(itemsData));

            // Update state with fetched items
            setItems(itemsData);
        } catch (err) {
            setError('Failed to fetch items.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const cachedItems = localStorage.getItem('s_items');

        if (cachedItems) {
            // If cached items exist, use them
            setItems(JSON.parse(cachedItems));
            setLoading(false);
        } else {
            // Fetch and cache the items if not already cached
            fetchAndCacheItems(storeid);
        }
    }, []);

    return { items, loading, error };
};

export default useCachedItems;