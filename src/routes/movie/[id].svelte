<script context="module">
    import { getMovieUrl } from '../../stores.js';

    let getUrl = (/** @type {string} */ id) => '';
    getMovieUrl.subscribe(value => { getUrl = value });

    export const load = async ({ fetch, params }) => {
        const res = await fetch(getUrl(params.id));
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            return {
                props: { movieDetail: data }
            }
        }
    };
</script>

<script>
    export let movieDetail;
</script>

<div class="movie">
    
</div>


<style>
    
</style>