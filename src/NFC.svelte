<div id="nfc"></div>

<style>
    #nfc {
        width: 50px;
        height: 50px;
        padding: 10px;
        border: 1px solid #aaaaaa;

        position: fixed;
        top: 750px;
        left: 550px;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    @media screen and (max-width: 992px) {
        #nfc {
            width: 45px;
            height: 45px;

            top: 512.5px;
            left: 412.5px;
        }
    }
    @media screen and (max-width: 768px) {
        #nfc {
            top: 612.5px;
            left: 512.5px;
        }
    }
    @media screen and (max-width: 576px) {
        #nfc {
            width: 40px;
            height: 40px;

            top: 362.5px;
            left: 262.5px;
        }
    }
</style>