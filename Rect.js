// 이퀄라이져 막대 하나를 정의한다!!
class Rect{
    constructor(container,width,height,x,y,color,a,targetH){
        this.container=container;
        this.div = document.createElement("div")
        this.width=width;
        this.height=height;
        this.x =x;
        this.y =y;
        this.color = color;
        this.a=a; // 부드러운 정도를 제어할 수 있는 비율계수
        this.targetH=targetH; // 어디까지 늘어날지를 결정.
        this.text; // 사각형 안에 출력될 높이 값!!

        //스타일적용
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position = "absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.background=this.color;

        //부모요소에 부착!!
        this.container.appendChild(this.div);
    }

    //동작을 정희한다(동작은 함수로 표현)


    //물리량 변화(높이값이 늘었다가 줄었다가 - 감속도로..)
    //그래픽 처리
    render(){
        this.div.style.height=parseFloat(this.div.style.height)+
            this.a*(this.targetH-parseFloat(this.div.style.height)) + "px";
    }
}