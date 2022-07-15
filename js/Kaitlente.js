class Kaitlente {
    constructor(skyliuKiekis) {
        this.size = skyliuKiekis;

        console.log(this);
    }

    render() {
        //Tikslas kad turinys turi atsirasti main tage
        const mainDOM = document.querySelector('main');
// Zemiau yra tiesiog turinys kaip turetu peisti

        const columns = Math.ceil(Math.sqrt(this.size));
        const width = 120 * columns + 2;
        
        const HTML = `<div class="kaitlente" style="width: ${width}px">
                        <div class="top">
                            ${'<div class="skyle"></div>'.repeat(this.size)}
                        </div>
                        <div class="bottom">
                            ${'<div class="jungiklis"></div>'.repeat(this.size)}
                        </div>
                    </div>`;
//Zemiau yra transformacija turinio(teksto) i HTML. 
// Zenklas + yra labai svarbus sio vietoje, nes priesingu atveju be jo turinis tiesiog overridintusi i HTML faila ir matytume  tik viena elementa
        mainDOM.innerHTML += HTML;
    }
}

export { Kaitlente }