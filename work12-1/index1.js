let year = new Date().getFullYear()
document.getElementById("cal").innerHTML = calendar(year)
function setCalender(year){
    for(var a=0;a<oSpan.length;a++){
        oSpan[a].index=a;
        oSpan[a].onclick=function(){
          for(var i=0;i<oSpan.length;i++){
            oSpan[i];
          }
          switch(this.index1){
            case 0:y-=1;break;
            case 1:{
                      m-=1;
                      if(m<0){
                        m=11;
                        y-=1;
                      }
            }break;
            case 2:{
                      m+=1;
                      if(m>11){
                      m=0;
                      y+=1;
                      }
            }break;break;
            case 3:y+=1;break;
          }
          oCalendar.removeChild(cTable);
          update();
          oDetail.innerHTML=y+'年'+(m+1)+'月'+d+'日'+' '+'星期'+aWeek[w];
        };
      }
     }
