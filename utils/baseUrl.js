const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? "https://ipad-purchase.vercel.app" || "https://www.cssclone.com"
    : "http://localhost:3010";

export default baseUrl;
