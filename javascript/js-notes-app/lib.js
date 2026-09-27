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

    static #mkPlainItem(plainValue) {
        const logItem=document.createElement("span");
        logItem.classList.add("value");
        if(plainValue === null || plainValue === undefined){
            logItem.classList.add("null");
        }
        logItem.classList.add(typeof plainValue);
        logItem.innerText = 
            plainValue === null 
            ? "null" 
            : plainValue;
        return logItem;
    }

    static #renderObject(item){
        const objectElem = document.createElement("ul");
        objectElem.classList.add("objectTree")
        for(let propName of Object.getOwnPropertyNames(item)){
            const propElem = document.createElement("li");
            const nameElem = document.createElement("label");
            nameElem.classList.add("name");
            nameElem.innerText = propName;

            const valueElem = this.#render(item[propName]);
            propElem.appendChild(nameElem);
            propElem.appendChild(valueElem);
            objectElem.appendChild(propElem);
        }
        return objectElem;
    }
    
    static #render(item) {
        if(item === null || item === undefined){
            return this.#mkPlainItem(item);
        } else if(Array.isArray(item)) {
            return this.#mkPlainItem(item);
        } else if(typeof item === "object"){
            return this.#renderObject(item);
        } else {
            return this.#mkPlainItem(item);
        }
    }

    static log(item){
        const logItem=document.createElement("article");
        logItem.classList.add("logItem");
        logItem.appendChild(this.#render(item));
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