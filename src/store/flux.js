const getState = ({ getStore, getACtions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null,
            starships: null,
            readList: null,
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
            setReadList: (object, readList) => {
                let aux = [];
                if (readList !== null) {
                    if(Array.isArray(readList)){
                        if(!readList.includes(object)){
                            readList.forEach(element => {
                                aux.push(element);
                            });
                            aux.push(object);
                        }else{
                            aux = readList;
                        }
                    }else{
                        if(object !== readList){
                            aux.push(readList);
                            aux.push(object);
                        }else{
                            aux = readList;
                        }
                    }
                    setStore({
                        readList: aux
                    })
                }else{
                    setStore({
                        readList: object
                    })
                }

            },
            removeReadList : (object, readList) =>{
                if(!Array.isArray(readList)){
                    setStore({
                        readList: null
                    })
                } else if(readList.length === 1){
                    setStore({
                        readList: null
                    })
                }else{
                    let aux = readList;
                    let position = readList.indexOf(object);
                    aux.splice(position,1);
                    setStore({
                        readList: aux
                    })
                }
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