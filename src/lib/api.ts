const API = 'https://aareguru.existenz.ch/v2018';

export async function getDataForCity({ city }: { city: string }) {
    const response = await fetch(`${API}/current?city=${city}`, {
        headers: {
            'accept': '*/*'
        }
    });

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const data = await response.json()
    return data
}

export async function getCities() {
    const response = await fetch(`${API}/cities`);

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const data = await response.json()
    console.log(data)
    return data
}