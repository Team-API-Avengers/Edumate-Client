import React from 'react';

const dataQuery = () => {

    

    const { data = [], refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
          try {
            const res = await fetch('https://edumate-second-server.vercel.app/api/v1/tutor'
            );
            const data = await res.json();
            return data?.data;
          } catch (err) {
            console.error(err);
          }
        },
      });

console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default dataQuery;