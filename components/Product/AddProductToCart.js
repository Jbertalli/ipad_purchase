import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';

function AddProductToCart({ user, productId }) {
    const [quantity, setQuantity] = useState(1);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let timeout;
        if(success) {
            timeout = setTimeout(() => setSuccess(false), 3000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [success]);

    async function handleAddProductTOCart() {
        try {
            const url = `${baseUrl}/api/cart`;
            const payload = { quantity, productId };
            const token = cookie.get('token');
            const headers = { headers: { Authorization: token } };
            await axios.put(url, payload, headers);
        } catch(error) {
            catchErrors(error, window.alert);
        }
    }
    return (
        <Input 
            type="number"
            min="1"
            placeholder="Quantity"
            value={quantity}
            onChange={event => setQuantity(Number(event.target.value))}
            action={
                user && success ? {
                    content: 'Item added',
                    disabled: true
                } :
                user ? {
                    content: 'Add to Cart',
                    onClick: handleAddProductTOCart
                } : {
                    content: 'Sign up to Purchase',
                    onClick: () => router.push('/signup')
                }}
        />
    );
}

export default AddProductToCart;
