class Ship{
    constructor(container){
        this.container = container;

        this.img = document.createElement("img");
        this.img.src = "../images/gallerxy/ship.png";
        this.width=30;
        this.height=30;
        this.x=300;
        this.y=470;
        this.velX=0;
        


        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //부모 요소에 부착하기
        this.container.appendChild(this.img);
    }
    tick(){
        this.x = this.x + this.velX;
    }

    // 변화된 물리량을 화면에 표현!!
    // 우리의 경우 주로 객체.style.속성 = 값
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}