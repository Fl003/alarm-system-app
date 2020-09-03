<script>
    import NFC from './NFC.svelte';
    import Lights from './Lights.svelte';
    import Buttons from './Buttons.svelte';
</script>

<div class="box">
    <NFC/>
    <div class="ring">
        <div class="controlpanel">
            <Lights/>
            <Buttons/>
        </div>
    </div>
</div>

<style>
    .box {
        width: 600px;
        height: 800px;
        background-color: rgb(255, 252, 245);
        box-shadow: 5px 5px 10px lightslategray;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .ring {
        width: 550px;
        height: 600px;
        background-color: lightgray;
        border: solid 1px black;
        box-shadow: 0px 0px 5px black inset;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .controlpanel {
        width: 500px;
        height: 550px;
        background-color: whitesmoke;
        border: solid 1px black;
        border-radius: 5%;
        box-shadow: -3px 3px black;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 992px) {
        .box {
            width: 450px;
            height: 550px;
        }

        .ring {
            width: 400px;
            height: 400px;
        }

        .controlpanel {
            width: 370px;
            height: 370px;
        }
    }

    @media screen and (max-width: 768px) {
        .box {
            width: 550px;
            height: 650px;
        }

        .ring {
            width: 500px;
            height: 500px;
        }

        .controlpanel {
            width: 470px;
            height: 470px;
        }
    }

    @media screen and (max-width: 576px) {
        .box {
            width: 300px;
            height: 400px;
        }

        .ring {
            width: 250px;
            height: 250px;
        }

        .controlpanel {
            width: 220px;
            height: 220px;
        }
    }
</style>