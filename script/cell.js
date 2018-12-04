//создает поле,предоставит методы для установки значений и автоматически перересовутет их
class Cell {
    constructor(fieldElement){
        this.element = createAndAppend({
            className:'cell',
            parentElement: fieldElement
        });

        if(Math.random()>0.8){
            this.value = Math.random()>0.5 ? 4 : 2;
        }
        
        this.element.onclick = this.merge.bind(this);  //выполняется не в контексте window  а в текущем.
        
    }

    get value(){
        return this._value || 0 //что б небыло в пустых клетка NaN
    }

    set value(value){
        this._value = value;
        this.element.innerHTML = value ? value : ''; //если ноль тогда пустая строка.
    }

    clear(){                    //очищает значени
        this.value = '';
    }

    merge(){        // умножает 
        this.value *= 2;
    }
}