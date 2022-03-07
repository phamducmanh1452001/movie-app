<script context="module">
    import { popularMoviesUrl } from '../stores.js';
    let url = '';
    popularMoviesUrl.subscribe(value => { url = value });

    export const load = async ({fetch}) => {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            return {
                props: {
                    popularMovies: data.results,
                }
            };
        }
    }
</script>

<script>
    import PopularMovies from "../components/PopularMovies.svelte";
    export let popularMovies = [];
</script>

<section>
    <PopularMovies movies={popularMovies}/>
</section>