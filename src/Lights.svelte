<script>
    import  lights from './lights.js';

let flashstatus = false;

flash(2, "orange", getRandom());
lights[0].color = "red";

function flash (id, color, speed) {
    if (flashstatus == false) {
        lights[id].color = color;
        flashstatus = true;
    } else {
        lights[id].color = "transparent";
        flashstatus = false;
    }
    
    setTimeout(() => {
        flash(id, color, getRandom());
    }, speed);
}

function getRandom () {
    return (Math.floor(Math.random()*7)+3)*100;
}
</script>

<div class="lights">
    {#each lights as {id, color}}
        <div id="{id}" class="light" style="color: {color};"></div>
    {/each}
</div>

<div class="icons">
    <div id="Icon1" class="icon">Status</div>
    <div id="Icon2" class="icon">Signal</div>
    <div id="Icon3" class="icon">Idk</div>
</div>

<style>
    .icon, .light {
        width: 30px;
        height: 30px;
        margin: 0px 55px 0px 45px;
        display: inline-block;
    }
    
    .light {
        background-color: lightgray;
        border: solid black 1px;
        box-shadow: -4px 4px black;
        position: relative;
    }

    .light::before{
        content: '';
        background-color: currentColor;
        box-shadow: 0px 0px 18px currentColor;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .lights, .icons {
        width: 405px;
        height: 250px;

        position: fixed; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .icons {
        height: 350px;
    }
    
    @media screen and (max-width: 992px) {
        .light, .icon {
            width: 25px;
            height: 25px;
            margin: 0px 26.5px 0px 26.5px;
        }

        .lights, .icons {
            width: 250px;
            height: 150px;
        }

        .icons {
            height: 250px;
        }
    }

    @media screen and (max-width: 768px) {
        .light, .icon {
            margin: 0px 32.6px 0px 32.6px;
        }

        .lights, .icons {
            width: 300px;
        }
    }

    @media screen and (max-width: 576px) {
        .light, .icon {
            width: 15px;
            height: 15px;
            margin: 0px 19px 0px 19px;
        }

        .lights {
            width: 175px;
            height: 100px;
        }

        .icons {
            width: 175px;
            height: 170px;
            margin-left: -10px;
        }
    }
</style>