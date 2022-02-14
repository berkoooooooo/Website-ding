const API_Headers=new Headers
API_Headers.set("Content-Type","application/json")
const getGameLink=(placeId)=>`https://www.roblox.com/games/${placeId}`
const onAPIResponse=async(response)=>{if(!response.ok)throw new Error(response.statusText);const json=await response.json()
if(!json.success)throw new Error(json.message);return json}
const generatePrivateCondo=(data)=>fetch("https://condogames.xyz/api/uploads/request",{headers:API_Headers,method:"POST",body:JSON.stringify(data)}).then(onAPIResponse).then(({placeId})=>placeId)
const getFieldData=()=>fetch("https://condogames.xyz/api/fc/generateFieldData").then((r)=>{if(!r.ok)throw new Error("Failed to get fieldData");return r.text()})
const submitCaptcha=(captchaToken,fieldData)=>fetch("https://condogames.xyz/api/fc/captcha",{headers:API_Headers,method:"POST",body:JSON.stringify({captchaToken,fieldData})}).then(onAPIResponse)
const getCondoMaps=()=>fetch("https://condogames.xyz/api/uploads/maps").then((r)=>{if(!r.ok)throw new Error(r.statusText);return r.json()})
