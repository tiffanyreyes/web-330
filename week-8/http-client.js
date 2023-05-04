export class HttpClient {
    async get (url, params = "") {
        url = new URL(url);
        url.search = new URLSearchParams(params);
    
        const res = await fetch(url.toString(), {
            method: "GET",
        });
        return res.json();
    }
};

