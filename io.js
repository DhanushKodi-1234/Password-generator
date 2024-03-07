function pass(len,lcase,ucase,num,syn)
{
    const l="abcdefghijklmnopqrstuvwxyz";
    const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const n="0123456789";
    const s="!@#$%^&*()_-/*";
    let chars="";
    let p="";


    chars+=lcase ? l :"";
    chars+=ucase ? u :"";
    chars+=num ? n :"";
    chars+=syn? s :"";

    if(len<=0)
    {
        return `(password musts be atleast one)`;
    }
    if(chars.length===0)
    {
        return `(sorry)`;
    }
    for(let i=0;i<len;i++)
    {
        const ran=Math.floor(Math.random()*chars.length);
        p+=chars[ran];
    }
    return p;

}

document.getElementById("but").onclick=function(){
    const l=document.getElementById("num").value;
    const lcase=true;
    const ucase=true;
    const num=true;
    const sym=true;
    const password=pass(l,lcase,ucase,num,sym);
    console.log(`Generate Password: ${password}`);
    document.getElementById("ans").textContent=password;
    return l;
   // const len=6;

}

