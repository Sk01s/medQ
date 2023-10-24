const baseUrl =
    process.env.PROD === "production"
        ? "https://medq.vercel.app"
        : "http://localhost:3000";

export default baseUrl;
