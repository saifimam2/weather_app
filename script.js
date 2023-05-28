const city=document.getElementById('city');
date.innerHTML=formatDate(new Date());
let searchValue=document.querySelector('#input');
let area = ''
function input(){
 city.innerHTML= searchValue.value;
 area = searchValue.value;
 searchValue.value=''
 load();
}
  let load= async ()=>{ 
  const url =`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${area}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b96e89b16msh7cd33c936df0cb5p1e3119jsnbe552a36212b',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    temp.innerHTML=`${result.temp}°C`;
    humid.innerHTML=`${result.humidity}%`
    wind.innerHTML=`${result.wind_speed} Km/h`
    direction.style.transform=`rotate(${result.wind_degrees}deg)`
    if(result.cloud_pct==0){
      remark.innerHTML="Clear";
    }
    else if(result.cloud_pct>8&&result.cloud_pct<20){
      remark.innerHTML="Partly Cloudy";
    }
    else{
      remark.innerHTML="Cloudy";
    }
  } catch (error) {
    console.error(error);
  }
}
input();
function formatDate(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-UK', options);
}
