const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Cannot fetch at ${url}, status: ${res.status}`);
    }

    return await res.json();
};