<script>
    import "../styles/style.css";
    // import Header from "$lib/components/Header.svelte";
    // import Bio from "$lib/components/Bio.svelte";


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
        <!-- <Header/> -->

        <header><h1>{@html prismicH.asHTML(document.data.naam)}</h1></header>
        <!-- <Bio /> -->
        <div class="bio">
            <ul>
             
                <li>
                    <a href="https://github.com/Finnvb"
                        ><img
                            id="githubLink"
                            class="svgIcon"
                            src="/githubIcon.svg"
                            alt="github"
                        />Finnvb</a
                    >
                    <p id="githubHandle" />
                </li>
           
                <li>
                    <img class="svgIcon" src="/emailIcon.svg" alt="email" /> {@html prismicH.asHTML(document.data.email)}
                </li>
            </ul>
        
           
            <ul>
                <h2>Hobby's</h2>
                <li>Voetbal</li>
                <li>Gamen</li>
                <li>Fitness</li>
            </ul>
        </div>
        
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
        transform: perspective(1000px);
  
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



    h1{
        position: absolute;
        top: 0;
        color: black;
        font-weight: bold;
        margin-top: 2rem;
        margin-left: 2.5rem;
        font-size: 1.2rem;
    }












    ul {

align-self: end;
}

li {
display: flex;
list-style: none;
align-items: center;
font-size: 14px;
text-decoration: none;
}

a {
text-decoration: none;

}

.svgIcon {
padding-right: 0.5rem;
}

#githubLink {
transition: 0.5s;
}

#githubLink:hover {
transform: scale(1.1);
opacity: 100%;
}

.bio {
display: flex;
justify-content: space-between;
position: absolute;
bottom: 0;
margin-left: 2.3rem;
margin-bottom: 3.5rem;
width: 75%;

}


h2{
font-size: 1rem;
font-weight: bold;
}
a:visited{
color: black;
}

</style>
