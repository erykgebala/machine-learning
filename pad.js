class Pad {
    constructor(container) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.canvas.style = `
            background-color:#fff;
            border: 1px solid black;
        `;
        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.#addEventsListeners();        
    }
    #addEventsListeners() {
        this.canvas.onmousedown = (e)=> {
            const rect = this.canvas.getBoundingClientRect();
            console.log(rect);

        }
    }
}
