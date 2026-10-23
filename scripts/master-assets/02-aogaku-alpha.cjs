const sharp=require(process.env.SHARP_MODULE || 'sharp');const fs=require('fs');const root=(process.env.MASTER_WORKSPACE || require('path').resolve(__dirname, '../../..'));const out=root+'/aogaku-career-info/public/assets/master';
function flood(w,h,seeds,allowed,diagonal=false){const seen=new Uint8Array(w*h),queue=new Int32Array(w*h);let head=0,tail=0;for(const p of seeds)if(!seen[p]&&allowed(p)){seen[p]=1;queue[tail++]=p;}while(head<tail){const p=queue[head++],x=p%w,y=Math.floor(p/w);for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy||!diagonal&&dx&&dy)continue;const xx=x+dx,yy=y+dy;if(xx<0||yy<0||xx>=w||yy>=h)continue;const n=yy*w+xx;if(!seen[n]&&allowed(n)){seen[n]=1;queue[tail++]=n;}}}return seen;}
const edges=(w,h)=>{const a=[];for(let x=0;x<w;x++)a.push(x,(h-1)*w+x);for(let y=0;y<h;y++)a.push(y*w,y*w+w-1);return a};
(async()=>{
 const {data}=await sharp(root+'/generated_images/exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png').extract({left:0,top:235,width:819,height:330}).ensureAlpha().raw().toBuffer({resolveWithObject:true});const w=819,h=330;
 const fg=flood(w,h,[...Array.from({length:w*4},(_,i)=>(h-4)*w+i),...Array.from({length:h},(_,i)=>i*w+w-1)],p=>Math.min(data[p*4],data[p*4+1],data[p*4+2])<234,true);
 const outside=flood(w,h,edges(w,h),p=>!fg[p],false);
 for(let p=0;p<w*h;p++){if(outside[p]){const x=p%w,y=Math.floor(p/w);let adjacent=false;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if(xx>=0&&yy>=0&&xx<w&&yy<h&&!outside[yy*w+xx])adjacent=true;}data[p*4+3]=adjacent?255:0;}}
 await sharp(data,{raw:{width:w,height:h,channels:4}}).webp({lossless:true}).toFile(out+'/hero-scene.webp');
 await sharp(data,{raw:{width:w,height:h,channels:4}}).extract({left:0,top:78,width:500,height:252}).webp({lossless:true}).toFile(out+'/campus.webp');
 await sharp(data,{raw:{width:w,height:h,channels:4}}).extract({left:500,top:0,width:319,height:330}).webp({lossless:true}).toFile(out+'/students.webp');
 await sharp(data,{raw:{width:w,height:h,channels:4}}).flatten({background:'#fff'}).png().toFile('/tmp/hero-scene-clean.png');
 for(const [name,source,box] of [['closing-tape-mobile','exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png',[175,1767,647,1814]],['closing-tape-desktop','exec-5c1628a2-673b-474f-9eb7-342d9f7cbab6.png',[449,1473,835,1532]]]){
 const [x,y,r,b]=box,ww=r-x,hh=b-y;const {data:d}=await sharp(root+'/generated_images/'+source).extract({left:x,top:y,width:ww,height:hh}).ensureAlpha().raw().toBuffer({resolveWithObject:true});const outer=flood(ww,hh,edges(ww,hh),p=>Math.max(d[p*4],d[p*4+1],d[p*4+2])<110,true);for(let i=0;i<ww*hh;i++)if(outer[i])d[i*4+3]=0;await sharp(d,{raw:{width:ww,height:hh,channels:4}}).webp({lossless:true}).toFile(out+'/'+name+'.webp');
 }
 console.log('Original connected illustration pixels isolated; enclosed white fills preserved');
})();
