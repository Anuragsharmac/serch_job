import {useState , useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint ,query) => {
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key':  'b809c9f814msh138f5b1713f4c6dp104835jsn8a7098c5bca6',  
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
      };

//'cfe2029ca9msh6fa2aac9bc6a9afp15ea9djsnb167746c9725',

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);

        }catch (error){
            setError(error);
            //alert("There is an error");
        }finally{
            setIsLoading(false);
      }
    };

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
      
      return { data, isLoading, error, refetch};
}

export default useFetch;