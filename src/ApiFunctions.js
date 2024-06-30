import axios from "axios";

const KEY="CC1z818Dhc1Wsh4HgSQAF2Cm8fVGgOJD"
export const getBooks = async (path,params={}) => {
    try {
        console.log("requesting books list...");
        const url=`https://api.nytimes.com/svc/books/v3/${path}`

        const response = await axios.get(url,{
            params:{
                ...params,
                "api-key":`${KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const bookLookup = async (isbn) => {
    try {
        console.log("getting book info");
        const url=`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};