const fs=require('fs'), vm=require('vm'), path=require('path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const core=script.slice(0,script.indexOf('function render('));
let failures=0;
for(const seed of [7,42,131]) for(const n of [12,20,32,48]){
 const config={seed,agents:n};
 const ctx={console,Uint8Array,Int32Array,Set,Map,Array,Math,document:{getElementById:id=>({value:config[id]??0})}};
 vm.createContext(ctx);
 vm.runInContext(core+'\nvar result=build();',ctx,{timeout:90000});
 const r=ctx.result;
 const distinct=new Set(r.agents.map(a=>a.start)).size===r.agents.length;
 const routes=r.agents.every(a=>a.start===a.path[0]&&a.goal===a.path.at(-1)&&a.path.every((p,j)=>r.open[p]&&(!j||Math.abs(p%44-a.path[j-1]%44)+Math.abs(Math.floor(p/44)-Math.floor(a.path[j-1]/44))===1)));
 const done=r.finishOn!==null&&r.finishOff!==null&&r.blockedAt===null&&r.on.at(-1).every((p,i)=>p===r.agents[i].goal)&&r.off.at(-1).every((p,i)=>p===r.agents[i].goal);
 const safe=r.onContacts.at(-1).cumulative===0;
 const honest=r.requestedCount===n&&r.agents.length+r.removed.length===n;
 const ok=distinct&&routes&&done&&safe&&honest&&r.agents.length>0;
 console.log(`${ok?'PASS':'FAIL'} maze=${seed} candidates=${n} retained=${r.agents.length} excluded=${r.removed.length} finish=${r.finishOff}/${r.finishOn} collisions=${r.offContacts.at(-1).cumulative}/${r.onContacts.at(-1).cumulative}`);
 if(!ok)failures++;
}
if(failures)process.exitCode=1;
