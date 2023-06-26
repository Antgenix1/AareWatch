<script lang="ts">
    import { getDataForCity, getCities } from "../lib/api";

    let error: string | undefined;
    let loading: boolean = false;
    let cityName: any;
    let cityData: any;
    let cities: [];

    async function fetchData(){
        try {
            loading = true;
            cityData = await getDataForCity({city: cityName.toLowerCase() });
            loading = false;
        } catch (err) {
            loading = false;
            error = (err as Error).message as string;
        }
    }

    async function fetchCities() {
        try {
            loading = true;
            cities = await getCities();
            loading = false;
        } catch (err) {
            loading = false;
            error = (err as Error).message as string;
        }
        
    }
</script>

<main>
    <h1>City Data</h1>

    {#if loading} 
        <p>Loading ...</p>
    {:else if error}
        <p>Error: {error}</p>
    {:else if cityData}
        <div>
            <p>City: {cityData.aare.location}</p>
            <p>Temperature: {cityData.aare.temperature}</p>
        </div>
    {:else}
        <p>No data available</p>
    {/if}

    <input bind:value={cityName}/>
    <button on:click={fetchData}>Fetch Data</button>

    <button on:click={fetchCities}>Fetch Cities</button>
</main>