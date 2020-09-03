<script>
    import { signal, guidecount } from './stores.js';
    import  lights from './lights.js';
    
    let starttop, startleft;
    var currTimeout;
    var img = new Image();
    img.src = '../images/transparent.svg';

    function drag (event) {
        const {x, y} = setPosition (event);
        checkLocation (event, x, y);
    }
    
    function dragStart (event) {
        event.dataTransfer.setDragImage(img, 0, 0);
    }

    function dragEnd (event) {
        setPosition(event);
    }

    function touchMove (event) {
        const {x, y} = setPosition (event, event.targetTouches[0]);
        checkLocation (event, x, y);
    }
    
    function checkLocation (event, x, y) {
        const nfcelement = document.getElementById("nfc");
        const {left, top} = getPosition(nfcelement);
        
        if ((x < left + 30 && x > left - 30) && (y < top + 30 && y > top - 30) && !$signal)
            gotSignal();
    }

    function getPosition (element) {
		const rect = element.getBoundingClientRect();
		return {
			left: rect.left + window.scrollX,
			top: rect.top + window.scrollY
		};
    }

    function setPosition (event, touchLocation = {}) {
        const x = touchLocation.pageX || event.x;
		const y = touchLocation.pageY || event.y;

		event.target.style.left = x + 'px';
        event.target.style.top = y + 'px';

        return {
			x, y
		};
    }

    function gotSignal () {
        if ($signal) return; 
		signal.set(true);
        lights[1].color = "orange";
        clearTimeout(currTimeout);
        waiting ();
        signalGuide ();
    }

    function signalGuide() {
        if ($guidecount === 9 || $guidecount === 10) return;
        
        if ($guidecount === 1 || lights[0].color === "red")
            guidecount.set(2);
        else if ($guidecount === 6 || lights[0].color === "green")
            guidecount.set(7);

        setTimeout(() => {
            if ($guidecount === 2)
                guidecount.set(3);
            else if ($guidecount === 7)
                guidecount.set(8);
        }, 5000);
    }

    function waiting () {
        currTimeout = setTimeout(() => {
            console.log('test');
			if (!$signal) return;
            signal.set(false);
            lights[1].color = "transparent";
            if ($guidecount === 10) return;
            guidecount.set(5);
		}, 20000);
    }
</script>

<div id="keytag" draggable="true" on:drag={drag} on:dragstart={dragStart} on:dragend={dragEnd} on:touchmove={touchMove}></div>

<style>
    #keytag {
        width: 75px;
        height: 75px;
        padding: 10px;
        background-color: #666;
        border: 1px solid #aaaaaa;
        border-radius: 50% 50% 5% 50%;
        cursor: grab;

        position: fixed;
        top: 90%;
        left: 85%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    #keytag:active {
        cursor: grabbing;
    }

    @media screen and (max-width: 992px) {
        #keytag {
            width: 65px;
            height: 65px;
        }
    }
    
    @media screen and (max-width: 576px) {
        #keytag {
            width: 50px;
            height: 50px;
        }
    }
</style>