export default function getmatchp(selected:string[],profiles:any[]){

if(selected.length===0) return profiles

return profiles.filter((profile)=>

selected.some((crit)=>

profile.text?.some((line:string)=>
line.toLowerCase().includes(crit.toLowerCase())
)

)

)
}
