const apiUrl = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      species: [],
      films: [],
      people: [],
      starships: [],
      vehicles: [],
      planetsid: [],
    },

    actions: {
      getResources: async (resource) => {
        let response = await fetch(apiUrl + resource);
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json();
        let newStore = { ...getStore() };
        newStore[resource] = data.results || data.result;
        setStore(newStore);
      },

      getDetails: async (resource, id) => {
        let response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`);
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json()
        return {
          ...data.result.properties
        }
        
      },

      //loadInfo: async () => {
        //fetch(`https://www.swapi.tech/api/${resource}/${id}`)
          //  .then((res) => res.json())
            //.then((data) => setStore(planetsid = data.result.properties))
     // }
    },
  };
};

export default getState;
