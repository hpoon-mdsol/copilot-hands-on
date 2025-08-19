// function to parse data from a string
function parseData(data) {
    try {
        // Assuming data is in JSON format
        return JSON.parse(data);
    } catch (error) {
        console.error("Error parsing data:", error);
        return null;
    }
}

// function to parse url from a string
function parseUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return {
            href: parsedUrl.href,
            protocol: parsedUrl.protocol,
            host: parsedUrl.host,
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            hash: parsedUrl.hash
        };
    } catch (error) {
        console.error("Error parsing URL:", error);
        return null;
    }
}

function splitURLandReturnComponents(url) {
    return parseUrl(url);
}