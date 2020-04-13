class Enemy{
    constructor(container, src,width,height,velX,velY,x,y){
        this.container=container; //어디에 붙을지
        this.src=src;
        this.img=document.createElement("img");
        this.img.src = this.src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;

        //각종 스타일 적용
        this.img.style.widows=this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.trop = this.y + "px";

        //적군을 무보 요소에 부착!!
        container.appendChild(this.img);
    }
    //물리량의 변화
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

    }
    //변화된 물리량을 그래픽처리
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

    }
}