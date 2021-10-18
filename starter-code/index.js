
const mode = document.querySelector(".mode")
const modetext = document.querySelector(".modetext")
const modeicon = document.querySelector(".modeicon")
const modeiconSun = document.querySelector(".modeiconSun")
const input = document.getElementById("input");
const searchbutton = document.querySelector(".searchbutton");
const searchtext = document.querySelector(".searchtext");
const noMatch = document.querySelector(".error")
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const namme = document.querySelector(".name");
const login = document.querySelector(".userName");
const date = document.querySelector(".date");
const followers = document.querySelector(".followers");
const public_repos = document.querySelector(".repos");
const following = document.querySelector(".following");
const locat = document.querySelector(".location");
const blog = document.querySelector(".website");
const twitter_username = document.querySelector(".twitter");
const company = document.querySelector(".company");
const bio = document.querySelector(".description");
const avatar = document.querySelector(".avatar")
let userData={}

console.log(input.value)

function display_data(userData){
    noMatch.classList.add('hide')
    avatar.src = userData.avatar_url
    namme.innerHTML =  userData.name ?? userData.login
    login.innerHTML =  `@${userData.login}`
    date.innerHTML =  `Joined ${userData.created_at.slice(8,10)} ${months[userData.created_at.slice(5,7)-1]} ${userData.created_at.slice(0,4)}`
    bio.innerHTML =  userData.bio || "This profile has no bio"
    userData.bio === null ? bio.classList.add('grayish') : bio.classList.remove('grayish')
    public_repos.innerHTML =  userData.public_repos
    following.innerHTML =  userData.following
    followers.innerHTML =  userData.followers
    locat.innerHTML = userData.location || "Not Available"
    userData.location === null ? document.querySelector(".lo").classList.add('gray') : document.querySelector(".lo").classList.remove('gray')
    blog.innerHTML =  blog.href = userData.blog || "Not Available"
    userData.blog == false ? document.querySelector(".bl").classList.add('gray') : document.querySelector(".bl").classList.remove('gray')
    twitter_username.innerHTML = twitter_username.href =  userData.twitter_username || "Not Available"
    userData.twitter_username === null ? document.querySelector(".tw").classList.add('gray') : document.querySelector(".tw").classList.remove('gray')
    company.innerHTML =  company.href = userData.company || "Not Available"
    userData.company === null ? document.querySelector(".co").classList.add('gray') : document.querySelector(".co").classList.remove('gray');

}
function toggleMode(){
    document.body.classList.toggle('dark')
    modetext.innerHTML =='DARK' ?  modetext.innerHTML = 'LIGHT' : modetext.innerHTML = 'DARK'
    modeicon.classList.toggle('hide')
    modeiconSun.classList.toggle('hide')
}
function noResult(){
    noMatch.classList.remove('hide')
}

function getUserData(inp){
    fetch(`https://api.github.com/users/${inp}`)
    .then(res=>{
        if(res.ok){return res.json()}
        else{noResult();
            throw Error}
        })
    .then(data=>{
    console.log(data)
    display_data(data)})
}


searchbutton.addEventListener('click',()=> {getUserData(input.value)});

mode.addEventListener('click',()=>{toggleMode()});




