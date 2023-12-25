const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#e17055';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width*0.015;
    

      const w = width*0.1;
      const h = height*0.1;
      const gap = width*0.03;
      const ix = width*0.17;
      const iy = height*0.17;
  
      const off = width*0.02;
  
      let x,y;

      const cx = width*.5;
      const cy = height*.5;

      const num = 110;
      const radius = width * 0.6;

      for(let i=0;i<num;i++) {
        const slice = math.degToRad(360/num);
        const angle = slice*i;

        x = cx+radius*Math.sin(angle);
        y = cy+radius*Math.cos(angle);

        context.save();
        context.translate(cx,cy);
        context.rotate(-angle);

        context.lineWidth = random.range(5,20);
        context.strokeStyle = "#fab1a0";
        context.beginPath();
        context.arc(0,0,radius*random.range(0.7,1.3),-slice*random.range(1,8),slice*random.range(1,5));
        context.stroke();
        context.restore();
      }

      
  
        for(let i=0;i<5;i++){
          for(let j=0;j<5;j++){
  
            x = ix+(gap+w)*i;
            y = iy+(gap+h)*j;
            
            context.strokeStyle = "#ffeaa7";
            context.beginPath();
            context.rect(x,y,w,h);
            context.stroke();
  
            if(Math.random()>0.5){
              context.strokeStyle = "#fdcb6e";
              context.beginPath();
              context.rect(x+off/2,y+off/2,w-off,h-off);
              context.stroke();
          }
          };
        };
    }
};

canvasSketch(sketch, settings);
