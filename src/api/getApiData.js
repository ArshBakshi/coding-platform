export const getApiData= async()=>{
    const api_key=process.env.REACT_APP_Api_KEY;
    const api =`https://quizapi.io/api/v1/questions?apiKey=${api_key}&limit=10`;
    try {
        const res = await fetch(api);
        const data=await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}