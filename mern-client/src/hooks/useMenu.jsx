
import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const [medicines, setMedicines] = useState([]);

    const refetch = async () => {
      try {
        const response = await axiosPublic.get('/all-medicines');
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };
    useEffect(() => {
      refetch(); // Initial fetch when component mounts
    }, []); // Empty dependency array ensures it only runs once on mount
  
    return [medicines, refetch];
}

export default useMenu