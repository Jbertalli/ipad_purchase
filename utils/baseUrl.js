const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? "https://www.cssclone.com"
    : "http://localhost:3010";

export default baseUrl;
