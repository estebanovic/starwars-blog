const getState = ({ getStore, getACtions, setStore }) => {
    return {
        store: {
            people: null,
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
                            people : data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            }
        }
    };
};

export default getState;