class Logger {
    static #getLogContainer(){
        const logContainerClass = "logContainer";
        let logContainer = document.currentScript.nextElementSibling;
        
        if(logContainer && logContainer.classList.contains(logContainerClass)){
            return logContainer;
        } 
        
        logContainer = document.createElement("div");
        logContainer.classList.add(logContainerClass);
        document.currentScript.insertAdjacentElement('afterend', logContainer);
        return logContainer;
    }

    static log(item){
        const logItem=document.createElement("article");
        logItem.innerHTML = item;
        this.#getLogContainer().appendChild(logItem);
        console.log("lib.log", item);
    }
}

function log(item){
    Logger.log(item);
}

function renderScripts(){
    // inline scripts
    const scripts = document.querySelectorAll("#scriptsToShow > script:not([src])");
    for(const script of scripts){
        const pre = document.createElement("pre");
        pre.innerText = script.text;
        script.insertAdjacentElement('afterend', pre);
    }
}