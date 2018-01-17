
import CryptoJS from 'crypto-js';
//console.log('CryptoJS', CryptoJS);


const MarvelAPI = {
  BASE_URL: "http://gateway.marvel.com:80",
  API_PRIVATE: "5a441ae3f0157c126a5ceeae7b6ede6808b4af87",
  API_PUBLIC: "389d73f6972fa5a352e2558572ebaf02",

  getTimestamp: function(){
    return Math.floor(Date.now()/1000);
  },

  getHash: function(timestamp){
    return CryptoJS.MD5(timestamp + this.API_PRIVATE + this.API_PUBLIC).toString();
  },

  // routes
  getCharactersURI: function(){
    const timestamp = this.getTimestamp();
    return this.BASE_URL+"/v1/public/characters?apikey="+ this.API_PUBLIC + "&hash="+ this.getHash(timestamp)+"&ts="+timestamp;
  },

  getCharacterDetailsURI: function(characterId){
    const timestamp = this.getTimestamp();
    return this.BASE_URL+"/v1/public/characters/"+ characterId +"?apikey="+ this.API_PUBLIC + "&hash="+ this.getHash(timestamp)+"&ts="+timestamp;
  }
}

export default MarvelAPI;
