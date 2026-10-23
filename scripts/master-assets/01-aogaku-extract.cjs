const sharp=require(process.env.SHARP_MODULE || 'sharp');
const fs=require('fs'); const root=(process.env.MASTER_WORKSPACE || require('path').resolve(__dirname, '../../..'));
const out=root+'/aogaku-career-info/public/assets/master';fs.mkdirSync(out,{recursive:true});
const sources={mobile:root+'/generated_images/exec-ed96bf80-79c3-4bb5-b1ec-dc4606dfcc9b.png',desktop:root+'/generated_images/exec-5c1628a2-673b-474f-9eb7-342d9f7cbab6.png'};
function inside(x,y,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!=(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;}
const scene=[[0,313],[55,313],[68,333],[120,333],[155,346],[185,347],[185,353],[225,362],[265,374],[265,389],[315,403],[350,414],[366,403],[393,420],[413,440],[451,441],[470,462],[493,508],[508,508],[515,450],[535,420],[550,408],[560,383],[564,362],[585,353],[604,350],[640,355],[649,384],[689,382],[715,369],[735,367],[735,296],[752,279],[766,257],[783,236],[819,236],[819,565],[0,565]];
const specs=[
 ['hero-title-mobile','mobile',[210,111,615,309],'white'],['hero-title-desktop','desktop',[174,135,780,288],'white'],
 ['hero-underline-mobile','mobile',[278,307,539,331],'white'],['hero-underline-desktop','desktop',[330,287,608,319],'white'],
 ['audience-mobile','mobile',[211,39,594,115],'white'],['audience-desktop','desktop',[292,80,647,134],'white'],
 ['information-title-mobile','mobile',[202,765,617,856],'white'],['information-title-desktop','desktop',[157,638,758,687],'white'],
 ['it-title-mobile','mobile',[168,878,379,919],'white'],['it-underline-mobile','mobile',[168,918,380,938],'white'],
 ['career-title-mobile','mobile',[168,1083,465,1121],'white'],['career-underline-mobile','mobile',[168,1121,466,1141],'white'],
 ['events-title-mobile','mobile',[174,1266,468,1346],'cream'],['events-underline-mobile','mobile',[173,1343,466,1368],'cream'],
 ['number-01','mobile',[44,854,148,933],'white'],['number-02','mobile',[44,1060,156,1138],'white'],['number-03','mobile',[44,1261,164,1345],'cream'],
 ['info-it','mobile',[420,866,774,1046],'keep'],['info-career','mobile',[462,1080,782,1249],'keep'],['info-events','mobile',[482,1285,781,1475],'keep'],
 ['hero-scene','mobile',[0,235,819,565],'keep',scene],['campus','mobile',[0,313,515,565],'keep',scene],['students','mobile',[500,235,819,565],'keep',scene],
 ['tree-left','mobile',[0,88,120,322],'keep',[[0,88],[120,88],[120,235],[77,270],[28,322],[0,322]]],
 ['cloud-top','mobile',[646,102,761,168],'white'],['cloud-low','mobile',[671,237,754,287],'white'],
 ['campus-caption','mobile',[60,278,211,352],'white'],
 ['closing-title-mobile','mobile',[266,1684,555,1767],'dark'],['closing-title-desktop','desktop',[88,1484,416,1593],'dark'],
 ['closing-underline-mobile','mobile',[413,1751,508,1776],'dark'],['closing-tape-mobile','mobile',[175,1763,647,1820],'dark'],
 ['closing-tape-desktop','desktop',[449,1473,835,1532],'dark'],
 ['step-one','mobile',[329,1525,494,1562],'white'],['step-two','mobile',[284,1574,535,1614],'white'],['step-three','mobile',[301,1626,517,1667],'white'],
 ['steps-rays-left','mobile',[212,1545,250,1630],'white'],['steps-rays-right','mobile',[568,1547,605,1630],'white'],
 ['step-arrow','mobile',[396,1557,420,1580],'white'],
 ['hero-rays-left','mobile',[116,234,148,269],'white'],['hero-rays-right','mobile',[627,281,661,328],'white'],['cloud-rays','mobile',[711,177,750,220],'white']
];
(async()=>{let manifest=[];for(const [name,source,box,mode,poly]of specs){const [x,y,r,b]=box,w=r-x,h=b-y;const {data,info}=await sharp(sources[source]).extract({left:x,top:y,width:w,height:h}).ensureAlpha().raw().toBuffer({resolveWithObject:true});for(let j=0;j<h;j++)for(let i=0;i<w;i++){const k=(j*w+i)*4,R=data[k],G=data[k+1],B=data[k+2];if(poly&&!inside(x+i+.5,y+j+.5,poly)){data[k+3]=0;continue;}if(mode==='white'){const mn=Math.min(R,G,B);if(mn>227){data[k+3]=0;}else if(mn>190&&Math.max(R,G,B)-mn<20){data[k+3]=Math.round((255-mn)/65*255);}}if(mode==='cream'){if(R>220&&G>215&&B>185&&Math.max(R,G,B)-Math.min(R,G,B)<65)data[k+3]=0;}if(mode==='dark'){if(Math.max(R,G,B)<95)data[k+3]=0;}}
 await sharp(data,{raw:{width:w,height:h,channels:4}}).webp({lossless:true}).toFile(out+'/'+name+'.webp');manifest.push({name,source,sourceBox:box,width:w,height:h,background:mode,polygon:poly||null});}fs.writeFileSync(out+'/extraction.json',JSON.stringify(manifest,null,2)+'\n');console.log('Exact source crops:',manifest.length)})();
