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
      getResources: async (resource, pagination = {}) => {
        // pagination:
        // page:
        // limit:
        let params = "";
        if (!!pagination.pages) {
          params = `?pages= ${pagination.pages}&limit=${pagination.limit || 10}`
        }
        let response = await fetch(apiUrl + resource);
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json();
        let newStore = { ...getStore() };
        newStore[resource] = data.results || data.result;
        setStore(newStore);
        return {
          pages: data.total_pages || "null",
        }
      },

      getDetails: async (resource, id) => {
        let response = await fetch(
          `https://www.swapi.tech/api/${resource}/${id}`
        );
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json();
        console.log(data);
        return {
          ...data.result.properties,
        };
      },
    },
  };
};

export default getState;
