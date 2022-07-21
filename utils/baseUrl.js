const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? "https://ipad_purchase.now.sh"
    : "http://localhost:3010";

export default baseUrl;
