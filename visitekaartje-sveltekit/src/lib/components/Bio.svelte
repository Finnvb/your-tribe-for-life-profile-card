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
            <img class="svgIcon" src="/emailIcon.svg" alt="email" /> finnvb@gmail.com
        </li>
    </ul>

   
    <ul>
        <h2>Hobby's</h2>
        <li>Voetbal</li>
        <li>Gamen</li>
        <li>Fitness</li>
    </ul>
</div>




<style>

    
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