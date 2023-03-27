import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../data'

export const HouseContext = createContext();


const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('ადგილმდებარეობა (ნებისმიერი)');

  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('ქონების ტიპი (ნებისმიერი)');
  const [properties, setProperties] = useState([]);
  const [houseType, setHouseType] = useState('');
  const [status, setStatus] = useState('გარიგების ტიპი (ნებისმიერი)');
  const [statuses, setStatuses] = useState([]);
  const [price, setPrice] = useState('ფასის ფარგლები (ნებისმიერი)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    
//remove duplicates
    const uniqueCountries = ['ადგილმდებარეობა (ნებისმიერი)', ...
    new Set(allCountries)]

   

    //set countries state
    setCountries(uniqueCountries)
  },[]);

  //Show houses button
  function showHouses () {

    setLoading(true);
    const element = document.getElementById("houseList");
  element.scrollIntoView({ behavior: "smooth" });

    const onlyHouses = housesData.filter(house => {
      if(house.type === 'სახლი'){
        return house
      }
    })

    setTimeout(() => {
      console.log('asd')
      return onlyHouses.length < 1 ? setHouses([]) :
      setHouses(onlyHouses),
      setLoading(false);
    }, 1000);
  }

  //---------------Status
   useEffect(() => {
    const allStatus = houses.map((house) => {
      return house.status;
    })
    
//remove duplicates
    const uniqueStatus = ['გარიგების ტიპი (ნებისმიერი)', ...
    new Set(allStatus)]

   

    //set status state
    setStatuses(uniqueStatus)
  },[]);


  //------------


  //duplicated useState. return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })
    
//remove duplicates
    const uniqueProperties = ['უძრავი ქონება (ნებისმიერი)', ...
    new Set(allProperties)]

   

    //set properties state
    setProperties(uniqueProperties)
  },[]);


  //show houses by clicking on menu houses
 

  

  const handleClick = () => {
   //set loading
   setLoading(true);
    const element = document.getElementById("houseList");
  element.scrollIntoView({ behavior: "smooth" });

    //create a function that checks if the string 
    //includes '(any)' 
    const isDefault = (str) => {
      return str.split(' ').includes('(ნებისმიერი)')
    }


    //get first value of price and parse it to number

    const minPrice = (parseInt(price.split(' ')[0]))

    //get seecond value of rpice which is the
    // maximum price & parse it to number

    const maxPrice = parseInt(price.split(' ')[2]);
    

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price)

      //if all values are selected
      if(house.country === country && house.type
        === property && house.status === status){
          return house;
        }

        //if all values are default
        if(isDefault(country) && isDefault(property) &&
        isDefault(status)){
          return house;
        }

        //if country is not default 
        if(!isDefault(country) && isDefault(property) &&
        isDefault(status)) {
          return house.country === country;
        }

     

        //if propery is not default
        if(!isDefault(property) && isDefault(country) 
        && isDefault(status)){
          return house.type === property; 
        }

         //if status is not default
        if(!isDefault(status) && isDefault(country) 
        && isDefault(property)){
          return house.status === status; 
        }

      { /*}  //if price is not default
        if(!isDefault(price) && isDefault(country) &&
        isDefault(property)){
          if(housePrice >= minPrice && housePrice <= 
            maxPrice) {
              return house;
            }
        } */}

        //if country & property is not default
        if(!isDefault(country) && !isDefault(property)
        && isDefault(status)){
          return house.country === country && house.type === property;
        }

        // if country and price not default
        if(!isDefault(country) && isDefault(property) 
        && !isDefault(status)) {
         
            return house.country === country && house.status;
          
        }

        //property and price is not default
        if(isDefault(country) && !isDefault(property) &&
        !isDefault(status)) {
          
              return house.type === property && house.status === status;
            
        }
    })

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) :
      setHouses(newHouses),
      setLoading(false);
    }, 1000);
    
  }

  return   <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    status,
    setStatus,
    statuses,
    setStatuses,
    houses,
    loading,
    handleClick,
    loading,
    showHouses,
    setHouseType,
  }}>
    {children}
    </HouseContext.Provider>;
};

export default HouseContextProvider;
