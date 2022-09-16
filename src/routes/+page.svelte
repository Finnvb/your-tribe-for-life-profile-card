<script>
    import "../styles/style.css";
    import Header from "$lib/components/Header.svelte";
    import Bio from "$lib/components/Bio.svelte";


    import * as prismicH from '@prismicio/helpers';
  export let data;
  const {  document }  = data

  

    // -------------------- Flip card ----------------------

    function flip(event) {
        const element = event.currentTarget;
        if (element.className === "showCard" || "container") {
            if (element.style.transform == "rotateY(180deg)") {
                element.style.transform = "rotateY(0deg)";
            } else {
                element.style.transform = "rotateY(180deg)";
            }
        }
    }
    // -------------------- Flip card ----------------------
</script>






<main class="container" on:click={flip}>
    <article class="cardFront" id="card">
        <Header />

        <Bio />
        
    </article>
    <article class="cardBack" />
</main>







<style>
    .container {

        width: 24rem;
        height: 34.5rem;
        transition: transform 1.5s;
        transform-style: preserve-3d;
        cursor: pointer;
        perspective: 1000px;
    }

    .cardFront {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 0px 20px 1px #000;
        background-image: url("/cardFront.jpg");
        background-size: cover;
    }

    .cardBack,
    .cardFront {
        backface-visibility: hidden;
        border-radius: 0.5rem;
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .cardBack {
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-image: url("/yu-gi-yoBG.png");
        background-size: cover;
    }


    @keyframes show {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }


</style>
