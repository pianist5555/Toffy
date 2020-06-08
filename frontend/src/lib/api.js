import axios from 'axios';

export const getGameList = id =>
    axios.get("http://ttoffyy.pythonanywhere.com/api/tfgame/").catch(error => {if(error.response){console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);}})