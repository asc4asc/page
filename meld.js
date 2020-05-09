const MaxPoints = 15; // 5,10,15,45 are typical for fencing.

function AddAbschnitt() {
    var n=document.getElementById("ab").innerHTML;
    if ( n<3 ) 
    { 
      n=n*1+1; 
    } 
    document.getElementById("ab").innerHTML=n;
}


function PCard() {
    var r=document.getElementById("S12a").innerHTML;
    var g=document.getElementById("S21a").innerHTML;
    if ( 1*r <= 1*g) { YellowCPRed(); };
    if ( 1*r >= 1*g) { YellowCPGreen(); };
}

function RedCPRed() {
    var n=document.getElementById("c1pr").innerHTML;
    if ( n<2 ) 
    { 
      n=n*1+1; 
    } 
    else
    { 
      BlackCPRed(); 
    } 
    document.getElementById("c1pr").innerHTML=n;
    GreenPlus();
}

function YellowCPRed() {
    var n=document.getElementById("c1py").innerHTML;
    if ( n<1 ) 
    { 
      n=n*1+1; 
    }
    else 
    {
      RedCPRed();  
    }
    document.getElementById("c1py").innerHTML=n;  
}
function BlackCPRed() {
    var n=document.getElementById("c1pb").innerHTML;
    if ( n<1 ) { n=n*1+1; };
    document.getElementById("c1pb").innerHTML=n;
}
function RedCPGreen() {      
    var n=document.getElementById("c2pr").innerHTML;
    if ( n<2 ) 
    { 
      n=n*1+1; 
    } 
    else 
    { 
      BlackCPGreen(); 
    } 
    document.getElementById("c2pr").innerHTML=n;
    RedPlus();
}
function YellowCPGreen() {     
    var n=document.getElementById("c2py").innerHTML;
    if ( n<1 ) 
    { 
      n=n*1+1; 
    }
    else 
    {
      RedCPGreen();  
    }
    document.getElementById("c2py").innerHTML=n;
}
function BlackCPGreen() {
    var n=document.getElementById("c2pb").innerHTML;
    if ( n<1 ) { n=n*1+1; };
    document.getElementById("c2pb").innerHTML=n;
}

function RedCRed() {
    var n=document.getElementById("c1r").innerHTML;
    n=n*1+1; 
    document.getElementById("c1r").innerHTML=n;
    GreenPlus();
}
function YellowCRed() {
    var n=document.getElementById("c1y").innerHTML;
    if ( n<1 ) 
    { 
      n=n*1+1;
    }
    else
    {
      RedCRed(); 
    };
    document.getElementById("c1y").innerHTML=n;
}
function RedCGreen() {      
    var n=document.getElementById("c2r").innerHTML;
    n=n*1+1; 
    document.getElementById("c2r").innerHTML=n;
    RedPlus();
}
function YellowCGreen() {     
    var n=document.getElementById("c2y").innerHTML;
    if ( n<1 ) 
    { 
      n=n*1+1;
    }
    else
    {
      RedCGreen(); 
    };
    document.getElementById("c2y").innerHTML=n;
}

function ClearAll() { 
    document.getElementById("S12").innerHTML=" ";
    document.getElementById("S21").innerHTML=" ";
    document.getElementById("S12a").innerHTML="0";
    document.getElementById("S21a").innerHTML="0";
    
    document.getElementById("c1y").innerHTML="0";
    document.getElementById("c1r").innerHTML="0";
    document.getElementById("c2y").innerHTML="0";
    document.getElementById("c2r").innerHTML="0"; 
    
    document.getElementById("c1py").innerHTML="0";
    document.getElementById("c1pr").innerHTML="0";
    document.getElementById("c2py").innerHTML="0";
    document.getElementById("c2pr").innerHTML="0"; 
    document.getElementById("c1pb").innerHTML="0";
    document.getElementById("c2pb").innerHTML="0";
    document.getElementById("ab").innerHTML="1";
} 

function ClearNull() { 
    document.getElementById("S12").innerHTML=" ";
    document.getElementById("S21").innerHTML=" ";
    document.getElementById("c1y").innerHTML="0";
    document.getElementById("c1r").innerHTML="0";
    document.getElementById("c2y").innerHTML="0";
    document.getElementById("c2r").innerHTML="0"; 
    
    document.getElementById("c1py").innerHTML="0";
    document.getElementById("c1pr").innerHTML="0";
    document.getElementById("c2py").innerHTML="0";
    document.getElementById("c2pr").innerHTML="0"; 
    document.getElementById("c1pb").innerHTML="0";
    document.getElementById("c2pb").innerHTML="0";
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
    if ( e1=='V' || e2=='V' ) {
      if ( n1<MaxPoints ) { n1=n1*1+1; };
      if ( n2<MaxPoints ) { n2=n2*1+1; };
      document.getElementById("S21").innerHTML=e1;
      document.getElementById("S12").innerHTML=e2;
      document.getElementById("S21a").innerHTML=n1;
      document.getElementById("S12a").innerHTML=n2;
      if ( n1==MaxPoints && n2<MaxPoints ) { EndBout(); };
      if ( n2==MaxPoints && n1<MaxPoints ) { EndBout(); };
      if ( n2==MaxPoints && n1==MaxPoints ) { 
        GreenMinus(); 
        RedMinus(); 
      }  
   }
}
