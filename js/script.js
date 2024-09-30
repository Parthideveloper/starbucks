function imgslider(anything){
          document.querySelector('.starbucks').src = anything;

};

function colorchange(color){
     const circle = document.querySelector('.circle');
     circle.style.background = color;
     document.getElementById('color-change-span').style.color = color;
          document.getElementById('change-span').style.backgroundColor = color;


}



