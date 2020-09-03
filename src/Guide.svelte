<script>
    import { guidecount } from './stores.js';
    
    let guideD, guideE, currentText;

    $: {
        
        switch ($guidecount) {
            /*Normale Story*/
            case 1:
                currentText = {
                    guideDText: "Führe den Keytag an die rechte untere Ecke auf den NFC Kontakt.",
                    guideEText: "Drag the keytag to the lower right corner."
                };
                break;
            case 2:
                currentText = {
                    guideDText: "Nach dem Signalton haben Sie die Möglichkeit zwischen ein/ausschalten.",
                    guideEText: "After the Signal you can choose between switching on & off."
                };
                break;
            case 3:
                currentText = {
                    guideDText: "Drücke einmal die rechte Taste um die Alarmanlage zu deaktivieren.",
                    guideEText: "Press the right Button to deactivate the Alarm."
                };
                break;
            case 4:
                currentText = {
                    guideDText: "(Achtung: Deaktiviert den Alarm nur für den Bereich des Bedienteils!)",
                    guideEText: "(Attention: Deactivates the Alarm only for the area of the control panel!)"
                };
                break;
            case 5:
                currentText = {
                    guideDText: "Beachten Sie auch das Sie nur 20 Sekunden haben um eine Aktion zu wählen.",
                    guideEText: "Mind that you have only 20 Seconds to choose a option."
                };
                break;
            case 6:
                currentText = {
                    guideDText: "Führen Sie den Keytag erneut an die untere rechte Ecke.",
                    guideEText: "Drag the keytag to the lower right corner."
                };
                break;
            case 7:
                currentText = {
                    guideDText: "Warten Sie wieder den Signalton ab.",
                    guideEText: "Wait for the Signal."
                };
                break;
            case 8:
                currentText = {
                    guideDText: "Drücken Sie diesmal die linke Taste um die Alarmanlage zu aktivieren.",
                    guideEText: "Press the left Button to activate the alarm."
                };
                break;
            case 9:
                currentText = {
                    guideDText: "(Achtung: Aktiviert den Alarm nur für den Bereich des Bedienteils!)",
                    guideEText: "(Attention: Activates the Alarm only for the area of the control panel!)"
                };
                break;

            case 10:
                currentText = {
                    guideDText: "Perfekt, das nächste mal bei der echten.",
                    guideEText: "Nice job, next time at the real one."
                };
                break;              
            
            /*Fehler*/
            case 11:
                currentText = {
                    guideDText: "... die Alarmanlage ist bereits aus, aber doppelt hält besser.",
                    guideEText: "... the alarm is deactived already, you dont have to deactivate it."
                };
                break;

            case 12:
                currentText = {
                    guideDText: "... die Alarmanlage ist bereits an.",
                    guideEText: "... the Alarm is actived, you dont have to activate it again."
                };
                break;

            case 13:
                currentText = {
                    guideDText: "Sie müssen zuerst den Keytag an das untere rechte Eck halten.",
                    guideEText: "You first have to hold the keytag on the lower right corner."
                };
                break;
        }
    }
</script>

<div id="guideD" class="guide">{currentText.guideDText}</div>
<div id="guideE" class="guide">{currentText.guideEText}</div>

<style>
    .guide {
        height: 50px;
        font-size: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-align: center;
        
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #guideD {
        margin-top: 20px;
        color: rgb(105, 105, 105);
    }

    #guideE {
        margin-top: 40px;
        color: rgb(141, 141, 141);
    }

    @media screen and (max-width: 992px) {
        .guide {
            height: 25px;
            font-size: 25px;
        }
        #guideD {
            margin-top: -10px;
        }

        #guideE {
            margin-top: 80px;
        }
    }
    @media screen and (max-width: 768px) {
        .guide {
            width: 550px;
            height: 20px;
            font-size: 20px;
        }
        #guideD {
            margin-top: 5px;
        }
    }
    @media screen and (max-width: 576px) {
        .guide {
            width: 300px;
            height: 15px;
            font-size: 15px;
        }
        #guideD {
            margin-top: -15px;
        }

        #guideE {
            margin-top: 40px;
        }
    }
</style>