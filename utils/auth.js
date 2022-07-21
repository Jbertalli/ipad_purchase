import cookie from 'js-cookie';
import Router from 'next/router';

export function handleLogin(token) {
    cookie.set('ipad_purchase', token),
    Router.push('/');
}