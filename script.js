// Az első feladat scriptje ---
var slider_content = document.getElementById('IMG');
img1=document.getElementById("img").src = "CSS3.png";
img2=document.getElementById("img").src = "HTML5.png";
imgs=[img1,img2]
i=1

function Switch(){
    i=i+1
    if (i%2==0){
    slider_content.innerHTML = "<img src="+imgs[0]+' alt='+"CSS"+' title='+"CSS"+'>';
    }
        else{
            slider_content.innerHTML = '<img src='+imgs[1]+' alt='+"HTML"+' title='+"HTML"+'>';
        }
    
}

// --- Az első feladat scriptje véget ért


// A masodik feladat scriptje ---

function terfogat(a) {
    var a = document.getElementById('a').value;
    eredmeny = parseInt(a)* parseInt(a) *  parseInt(a)

    return eredmeny
}

function felszin(a) {
    var a = document.getElementById('a').value;
    eredmeny = 6 * parseInt(a)* parseInt(a) *  parseInt(a)
    
    return eredmeny
}

function Count(){
    document.getElementById('eredmeny').innerHTML = 
    "A kocka térfogata: " +  terfogat(a) + "cm³" + "<br>" + "A kocka felszíne: " + felszin(a) + "cm²";
    
}

// A masodik feladat scriptje véget ért ---


// A harmadik feladat scriptje ---


function Age(){
    var age=document.getElementById("age").value
    var eletkor=document.getElementById("eletkor")
    
    if (age==0 || age==1 ){
        eletkor.innerHTML="0 - 1 csecsemő";
    }
        else if (age>1 && age<=18 ){
            eletkor.innerHTML="2 - 18 gyerek";
        }
            else if (age>18 && age<=64 ){
                eletkor.innerHTML="19 - 64 felnőtt";
            }
                else if (age>64){
                    eletkor.innerHTML="65-től idős";
                }

    
}

// A harmadik feladat scriptje véget ért ---


// A negyedik feladat scriptje ---

function Szamok(){
    document.getElementById("egeszSzamok").innerHTML="";
    szamok=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    szamok2=""
    for (let i = 0; i <= szamok.length-1; i++) {
       
        if(szamok[i]%2==0){
            document.getElementById("egeszSzamok").insertAdjacentHTML
            ("beforeend",'<p  class="p" style="color: red;">' + szamok[i] + "</p> ")
            
        }
            else{
                document.getElementById("egeszSzamok").insertAdjacentHTML
                ("beforeend",'<p class="p" >' + szamok[i] + "</p> ")
            
            }
    }
   
}

// A negyedik feladat scriptje véget ért ---


// Az ötödik feladat scriptje ---

function osszeadas() {
    var a = document.getElementById('egyik').value;
    var b = document.getElementById('masik').value;
    min= Math.min(parseInt(a),parseInt(b));
    max= Math.max(parseInt(a),parseInt(b));
    difference=max-min
    sum=0;

    for (let i = min+1; i<max; i++) {
        sum = sum + i;
    }
    
    return sum
}

function OsszeadKattint(){
    document.getElementById('Osszeadas').innerHTML =
    "Ha a két szélső számot nem vesszük,<br> akkor az eredmény: " + osszeadas();
}

// Az ötödik feladat scriptje véget ért ---