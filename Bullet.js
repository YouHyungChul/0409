class Bullet{

    constructor(container,posX,posY){

        this.container=container;
        this.img = document.createElement("img");
        this.src="../images/gallerxy/bullet.png";
        this.img.src = this.src;
        this.width=20;
        this.height=20;
        this.x= posX;
        this.y=posY;
        this.velX=0;
        this.velY=-5;

        this.img.style.width = this.width + "px";
        this.img.style.height=this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //부모에 총알 부착!!
        container.appendChild(this.img);

    }
    //동작관련!! (동작은 메서드로 정의한다!!)
    tick(){
        this.x += this.velX;
        this.y += this.velY;

        //총알의 x좌표값이 화면을 나갔는지 파악하여, 나갔다면
        //화면에서뿐안 아니라 배열에서도 삭제!!!
        //화면에서 제거!!
        if(this.y == 0){
           
            this.container.removeChild(this.img);
            var index = bulletArray.indexOf(this);
            bulletArray.splice(index,1);
        }

    }
    //변화된 물리량을 이용하여, 화면에 표시!!
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top=this.y+"px";
    }
}