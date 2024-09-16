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
  const url =`https://weatherapi-com.p.rapidapi.com?city=${area}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23bca35c23msh1b019e317a19cb5p1b1b36jsn4defd6cbe5f7',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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
