const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? "https://ipad-purchase.vercel.app"
    : "http://localhost:3010";

export default baseUrl;
