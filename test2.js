
/* ==UserStyle==
@name           HaxBall
@namespace      USO Archive
@author         H
@description    Alternative style for HaxBall browser game
@version        20230501.5.0
@license        CC-BY-4.0
@preprocessor   uso
==/UserStyle== */
@-moz-document domain("haxball.com") {
    .rightbar {
        display: none;
    }
    .header {
        display: none;
    }
    .game-state-view .bar {
        background: transparent !important;
    }
    .chatbox-view > .log p.notice {
        color: #f9817f;
    }   
    .teamicon {
        display: none;    
    }   
    .rc-anchor-dark {
        background: #29201f;
        color: #fff;
    }
    .chatbox-view-contents {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 5px 10px 5px 10px;
        background-color: rgba(60, 49, 43, var(--chat-opacity, 1));
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }            
    .chatbox-view-contents>.input input[type=text] {
        color: #fff;
        background-color: #29201f;
        border: none;
        border-radius: 5px;
        padding: 0 8px;
        flex-grow: 1;
        align-self: stretch;
        box-sizing: border-box
    }      
    .chatbox-view-contents>.input input[type=text]:focus {
        border: 1px solid #29201f;
        padding: 0 7px;
    } 
    .chatbox-view-contents>.drag::before {
        content: "";
        position: absolute;
        top: 0;
        left: calc(50% - 10px);
        width: 20px;
        bottom: 0;
        border-radius: 10px;
        background-color: rgb(60 49 43)    
    } 
    .chatbox-view-contents>.drag:hover::before {
        background-color: rgb(60 49 43)
    }
    .chatbox-view-contents>.drag {
        position: absolute;
        top: 0;
        left: 10px;
        right: 10px;
        border-radius: 2.5px;
        cursor: n-resize;
        height: 0px
    }  
    .game-view > .bottom-section button {
        background-color: #29201f;
    }
    .dialog,
    .room-view > .container {
        background-color: #3c312b;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .dialog button,
    .room-view > .container button {
        background-color: #24496700;
    }
    .settings-view .section .inputrow:nth-child(odd) {
        background-color: #29201f21;
    }
    .settings-view .section select {
        height: 25px;
        border: none;
        background-color: #19111685;
        margin-left: 10px;
    }
    .settings-view .section .inputrow > :not(:first-child) {
        background-color: #19111685;
        border-radius: 7px;
        margin: 2px 2px;
        padding: 1px 5px;
        display: inline-block;
    }
    .room-view > .container > .teams .player-list-view .list {
        flex: 1;
        background-color: #19111685;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .dialog select,
    .room-view > .container select {
        border: 1px solid #19111685;
        background-color: #19111685;
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: white;
        padding: 1px 5px;
    }
    .dialog .label-input,
    .room-view > .container .label-input {
        display: flex;
        background-color: #24496700;
        align-items: baseline;
        border-radius: 5px;
        padding: 3px 3px 3px 5px;
    }
    .dialog input,
    .room-view > .container input {
        color: white;
        background-color: #19111685;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .dialog > h1,
    .room-view > .container > h1 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px !important;
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 3px;
        border-bottom-color: #f98280;
        border-bottom-style: solid;
    }
    .landing-page .about-box {
        background: rgba(20, 30, 53, 0);
        padding: 20px 55px;
        padding-top: 30px;
        border-radius: 50px;
        margin-top: 40px;
        margin-bottom: 25px;
        text-align: center;
    }
    .dialog button,
    .room-view > .container button {
        background-color: #29201f;
    }
    .dialog .file-btn label,
    .room-view > .container .file-btn label {
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        background-color: #29201f;
        display: inline-block;
        cursor: pointer;
    }
    .roomlist-view > .dialog > .splitter .filters .bool,
    .room-view.roomlist-view > .container > .splitter .filters .bool {
        margin-right: 6px;
        padding: 1px 6px;
        background-color: #29201f;
        border-radius: 5px;
    }
    .dialog select,
    .room-view > .container select {
        border: 1px solid #19111600;
        background-color: #29201f;
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: white;
        padding: 1px 5px;
    }
    .ps__thumb-y {
        background-color: #29201f;
        border-radius: 6px;
        transition: background-color .2s linear, width .2s ease-in-out;
        -webkit-transition: background-color .2s linear, width .2s ease-in-out;
        width: 6px;
        right: 2px;
        position: absolute;
    }
    .roomlist-view > .dialog > .splitter > .list .separator,
    .room-view.roomlist-view > .container > .splitter > .list .separator {
        height: 2px;
        width: 100%;
        background-color: #f98280;
    }
    .game-state-view.restricted {
        background-color: #3c312b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .landing-page .about-box .play-link {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: -40px;
        background: linear-gradient(#3c312b, #3c312bbf);
        border-radius: 200px;
        padding: 15px;
        font-size: 35px;
        font-weight: bold;
        display: block;
        text-align: center;
        width: 237px;
        color: white;
        border: 3px solid rgba(247, 255, 235, 0.7);
        box-shadow: 0 0 0 3px #8da86b, 0 0 6px 6px rgba(0, 0, 0, 0.33);
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
        transition: 0.1s linear
    }
    .replay-controls-view {
        -webkit-user-select: none;
        user-select: none;
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 100%;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 6px;
        padding-right: 6px;
        box-sizing: border-box;
    }
    .replay-controls-view button {
        background-color: #29201f;
    }
    .replay-controls-view .timebar .bar {
        background-color: #29201f;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .rc-anchor-dark {
        background: #3c312b;
        color: #fff;
    }

    .settings-view .tabs .selected {
        background-color: #f98280;
    }
    .dialog input:not([type=range]),
    .room-view > .container input:not([type=range]) {
        color: #fff;
        background-color: #29201f;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .stats-view {
        background-color: rgb(26 33 37 / 0%);
        text-shadow: 1px 1px 1px #000, 0px 1px 1px #000;
        padding: 4px;
        margin: 4px;
        white-space: nowrap;
        flex: 0 0 100px;
        line-height: 1.5em
    }
    .game-view > .bottom-section > .buttons {
        padding: 10px;
        white-space: nowrap;
        margin-left: auto;
        background-color: #3c312b00;
        border-top-left-radius: 5px;
        display: flex;
        flex-direction: column;
    }
    .game-view.chat-bg-full .bottom-section {
        align-items: flex-start;
        background-color: rgba(60, 49, 43, var(--chat-opacity, 1))
    }
    .game-view > .bottom-section button:disabled {
        background-color: #29201f
    }
    .landing-page #logo {
        position: relative;
        left: 35px;
        margin-top: 175px;
    }
    .dialog input:focus:not([type=range]),
    .room-view > .container input:focus:not([type=range]) {
        border-color: #29201f

    }
    .game-view>.buttons {
        white-space: nowrap;
        background-color: #3c312b00;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        height: 35px;
        padding: 4px 6px 4px 6px;
        position: absolute;
        top: 0;
        right: 0
    } 
    .game-view>.buttons button {
        background-color: #24496700;
        padding-left: 8px;
        padding-right: 8px
    }
    .game-view>.buttons button:hover {
        background-color: #29201f
    }
    .icon-volume {
        display: none;
    }
    .dialog select:hover:not(:disabled),.room-view>.container select:hover:not(:disabled) {
        border-color: #29201f
    }
    
    .sound-button-container {
        position: relative;
        display: none
    }
    .game-view>.buttons button:disabled {
        background-color: #29201f00
    }
    .room-view>.container>.header...