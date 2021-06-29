const getState = ({ getStore, getACtions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null,
            starships: null,
            species: null,
            vehicles: null,
            readList: [],
            info: null,
            error: null
        },
        actions: {
            getPeople: async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getPlanets: async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            planets: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getStarships: async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getSpecies: async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            species: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getVehicles: async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicles: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setReadList: (object) => {
                let aux = getStore().readList;
                aux.push(object);
                setStore({
                    readList: aux
                })

            },
            removeReadList: (object) => {

                let aux = getStore().readList;
                let position = aux.indexOf(object);
                console.log(position);
                aux.splice(position, 1);
                setStore({
                    readList: aux
                })
            },
            getInfo:  async (url) => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            info: data.result
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            clearInfo: () => {
                setStore({
                    info: null
                })
            }
        }
    };
};

export default getState;