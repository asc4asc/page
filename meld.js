const MaxPoints = 15; // 5,10,15,45 are typical for fencing.

function ClearAll() { 
    document.getElementById("S12").innerHTML="0";
    document.getElementById("S21").innerHTML="0";
    document.getElementById("S12a").innerHTML="0";
    document.getElementById("S21a").innerHTML="0";
} 

function ClearNull() { 
    document.getElementById("S12").innerHTML="0";
    document.getElementById("S21").innerHTML="0";
}     
    
function RedPlus() {
    var e=document.getElementById("S12").innerHTML[0];
    var n1=document.getElementById("S12a").innerHTML;
    var a=document.getElementById("S21").innerHTML[0];
    if ( n1<MaxPoints ) { n1=n1*1+1; };
    document.getElementById("S12").innerHTML=e;
    document.getElementById("S12a").innerHTML=n1; 
    if ( n1==MaxPoints ) { EndBout(); }
    else {if ( e=="A" || a=="A" ) { EndBout(); }; }    
}

function RedMinus() {
    var e=document.getElementById("S12").innerHTML[0];
    var n1=document.getElementById("S12a").innerHTML;
    if ( n1>0 ) { n1=n1*1-1; };
    document.getElementById("S12").innerHTML=e;
    document.getElementById("S12a").innerHTML=n1;
}

function GreenPlus() {
    var e=document.getElementById("S21").innerHTML[0];
    var n1=document.getElementById("S21a").innerHTML;
    var a=document.getElementById("S12").innerHTML[0];
    if ( n1<MaxPoints ) { n1=n1*1+1; };
    document.getElementById("S21").innerHTML=e;
    document.getElementById("S21a").innerHTML=n1;
    if ( n1==MaxPoints ) { EndBout(); }
    else {if ( e=="A" || a=="A" ) { EndBout(); }; }
}

function GreenMinus() {
    var e=document.getElementById("S21").innerHTML[0];
    var n1=document.getElementById("S21a").innerHTML;
    if ( n1>0 ) { n1=n1*1-1; };
    document.getElementById("S21").innerHTML=e;
    document.getElementById("S21a").innerHTML=n1;
}

function GreenV() {
    document.getElementById("S21").innerHTML="A";
}    
function RedV() {
    document.getElementById("S12").innerHTML="A";
}
    
function EndBout() { 
    var e1=document.getElementById("S21").innerHTML[0];
    var e2=document.getElementById("S12").innerHTML[0];
    var n1=document.getElementById("S21a").innerHTML;
    var n2=document.getElementById("S12a").innerHTML;
    if ( n1==MaxPoints ) { e1="V"; e2="D" };
    if ( n2==MaxPoints ) { e2="V"; e1="D" };
    if ( n1>n2 ) { e1="V"; e2="D" };
    if ( n1<n2 ) { e2="V"; e1="D" };
    if ( n1==n2 ) {
      if (e1=="A") { e1="V"; e2="D" }
      if (e2=="A") { e2="V"; e1="D" } 
    };
    document.getElementById("S21").innerHTML=e1;
    document.getElementById("S12").innerHTML=e2;
    document.getElementById("S21a").innerHTML=n1;
    document.getElementById("S12a").innerHTML=n2;
}
    
function Double() {
    var e1=document.getElementById("S21").innerHTML[0]; 
    var n1=document.getElementById("S21a").innerHTML;
    var e2=document.getElementById("S12").innerHTML[0];
    var n2=document.getElementById("S12a").innerHTML;
    if ( n1<MaxPoints ) { n1=n1*1+1; };
    if ( n2<MaxPoints ) { n2=n2*1+1; };
    document.getElementById("S21").innerHTML=e1;
    document.getElementById("S12").innerHTML=e2;
    document.getElementById("S21a").innerHTML=n1;
    document.getElementById("S12a").innerHTML=n2;
    if ( n1==MaxPoints && n2<MaxPoints ) { EndBout(); };
    if ( n2==MaxPoints && n1<MaxPoints ) { EndBout(); };
    if ( n2==MaxPoints && n1==MaxPoints ) { GreenMinus(); RedMinus(); }  
}

function RedCRed() {
    var c=document.getElementById("c1y").innerHTML;
    n1=n1*1+1; 
    document.getElementById("c1y").innerHTML=c;
}
function YellowCRed() {
    var c=document.getElementById("c1r").innerHTML;
    if ( n1<2 ) { n1=n1*1+1; };
    document.getElementById("c1r").innerHTML=c;
}
function RedCGreen() {      
    var c=document.getElementById("c2y").innerHTML;
    n1=n1*1+1; 
    document.getElementById("c2y").innerHTML=c;
}
function YellowCGreen() {     
    var c=document.getElementById("c1y").innerHTML;
    if ( n1<2 ) { n1=n1*1+1; };
    document.getElementById("c1y").innerHTML=c;
}


