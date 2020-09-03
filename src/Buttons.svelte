<script>
    import { signal, guidecount } from './stores.js';
    import  lights from './lights.js';

    function lock () {
        if(!checkSignal())
            return;
            
        if (lights[0].color === "red") {
            guidecount.set(12);
            return;
        }
        lights[0].color = "red";
        
        if($guidecount === 9 || $guidecount === 10) return;
        lockGuide();
    }

    function unlock () {
        if(!checkSignal()) 
            return;

        if (lights[0].color === "green") {
            guidecount.set(11);
            return;
        }
        lights[0].color = "green";
        
        if($guidecount === 9 || $guidecount === 10) return;
        unlockGuide();
    }
    
    function checkSignal () {
        if (!$signal) {
            guidecount.set(13);
            return false;
        }
        signal.set(false);
        lights[1].color = "transparent";
        return true;
    }

    function unlockGuide () {
        guidecount.set(4);
        setTimeout(() => {
            if($guidecount === 4){
                guidecount.set(5)
                setTimeout(() => {
                    if($guidecount === 5)
                        guidecount.set(6);
                }, 5000);
            }
        }, 5000);
    }

    function lockGuide () {
        guidecount.set(9);
        setTimeout(() => {
                guidecount.set(10);
        }, 5000);
    }
</script>

<div class="buttons">
    <button id="lock" on:click={lock}>
        Lock
    </button>
    <button id="unlock" on:click={unlock}>
        Unlock
    </button>
</div>

<style>
    button {
        width: 120px;
        height: 120px;
        margin: 150px 5px 0px 5px;
        background-color: #93834ba6;
        border: 1px solid black;
        border-radius: 15%;
        box-shadow: 0px 0px 20px whitesmoke inset;
        cursor: pointer;
    }

    button:active {
        background-color: #93834ba6;
        box-shadow: 0px 0px 30px whitesmoke inset;
    }

    .buttons {
        width: 310px;
        height: 250px;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #lock {
        float: left;
    }

    #unlock {
        float: right;
    }

    @media screen and (max-width: 992px) {
        button {
            width: 85px;
            height: 85px;
            margin: 150px 20px 0px 20px;
            cursor: none;
        }

        .buttons {
            width: 250px;
        }
    }
    
    @media screen and (max-width: 768px) {
        button {
            width: 100px;
            height: 100px;
            margin: 150px 25px 0px 25px;
            cursor: none;
        }

        .buttons {
            width: 310px;
        }
    }

    @media screen and (max-width: 576px) {
        button {
            width: 60px;
            height: 60px;
            margin: 150px 5px 0px 5px;
            cursor: none;
        }

        .buttons {
            width: 150px;
            height: 275px;
        }
    }
</style>