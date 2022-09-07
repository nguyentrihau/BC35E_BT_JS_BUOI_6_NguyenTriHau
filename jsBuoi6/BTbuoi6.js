//bai1: tìm số nguyên dương nhỏ nhất:


document.getElementById("btnKetQua").onclick= function(){
    //input
    // n:so nguyen duong,
    // sum:lấy tổng số nguyên dương
    // kq:lấy kết qua; 

    //progress
    // n < 10000 thì tiếp tục vòng lắp 
    // nếu tổng sum+=n > 10000 thì break dừng lại
    for(var n=1,sum=0,kq=0;n<=10000;n++){
        if((sum+=n) > 10000){
            // console.log(n);
            kq=n;
            break;
        };
    };
    //output:
    document.getElementById("showInfoKetQua").innerHTML="Số nguyên dương nhỏ nhất là: "+kq;
};

// bài 2:Tính tổng 

document.getElementById("btnTinhTong").onclick = function(){
    // input :
    // x:người dùng nhập 1 số x
    // n:người dùng nhập số mũ của x
    // s:tính tổng
    // dn:đếm bước nhảy 
    //progress:
    // số đếm dn <= n thì dừng lại 
    // S+= Math.pow(x,dn);(tính binh phương(giá tri,số mũ));

    for(var x=+document.getElementById("Num1").value,n=+document.getElementById("Num2").value,S=0,dn=1;dn <= n;dn++){
        S+=Math.pow(x,dn);
    };
    // console.log(S);
    //output:
    document.getElementById("showInfoTinhTong").innerHTML= "Tổng S(n) = " + S;
};

//bài 3:tính giai thừa

document.getElementById("btnGiaiThua").onclick=function(){
    //input:
    // n:người dùng nhập số
    // GT:tính giai thừa
    //bn:đếm bước nhảy

    //progress:
    // giai thừa là tích các số tự nhiên dương tới số cần giai thừa(n)=> GT*=bn(khi bn đếm sẽ nhân hết tất cả số tự nhiên dương tới nó(n))
    // số đếm bước nhảy bn < n => GT*=bn;
    for(var n=+document.getElementById("number1").value,GT=1,bn=1;bn<=n;bn++){
        GT*=bn;
    };
    // console.log(GT);

    // output:
    document.getElementById("showInfoGiaiThua").innerHTML="Giai thừa: "+GT;
};

//bài 4: tạo thẻ div

document.getElementById("btnTaoThe").onclick=function(){
    //input:
    // i=1:so bat dau dem tu 1 
    // a:de tao ket qua

    //progress
    //cho i <=10;i++ :chay tu 1 toi 10(vong lap de tao 10 div)
    //neu i chia het 2 thi tao div co bg là red
    //con lai thi bg là blue

    
    for(var i=1,a="";i <= 10;i++){
        if(i%2==0){
            a += "<div style='background:red;color:white;padding:10px;text-transform:capitalize'>div chẵn</div>"
        }else{
            a+= "<div style='background:blue;color:white;padding:10px;text-transform:capitalize'>div lẻ</div>"
        };
    };
    // output
    // id(showInfoTaoThe)inner ra man hinh = a 
    document.getElementById("showInfoTaoThe").innerHTML = a;
};