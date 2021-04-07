
for(var i=0; i<5;i++){   
   console.log(i);
}
//0,1,2,3,4

/*Diagrama T
   i     0->1->2->3->4      
/*
/*************************************************/

for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
//1,3,5

/*Diagrama T
   i       0+1->1 +1->2-> 2+1-> 3 -> 3+1 ->4 +1->5
/*
/**********************************************/

for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//3,7

/*Diagrama T
   i      0 ->3 ->4+3 ->7
/*
/******************************************/


function y(num1, num2){   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))

//3,8

/* 
y (2 + 3)
y (5)
y(3+5)
y(8)
/*
/********************************************/

function y(num1, num2){
   console.log(num1);  
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))

//2,5,3,8

/*
y (2+3)
y(5)
y(3+5)
y(8)
/*
/********************************************/

a = 15;
console.log(a);                / 15 -> 10
function y(a){
   console.log(a);             / 10
   return a;
}
b = y(10);                     / 10
console.log(b);                

//15,10,10

/*Diagrama T
      a       15 -> 10
      y       10
      b       10
/********************************************/

a = 15;                   
console.log(a);                         / 15
function y(a){                          / y(10)           
   console.log(a);                      /  a=10
   return a*2;                          / 10*2= 20 
}
b = y(10);
console.log(b);                        / 20
// 15,10,20

 /* Diagrama T                                          
        a       15-> 10->20
        y        10 -> 20
        b        20






