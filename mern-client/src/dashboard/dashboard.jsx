 import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { useQuery } from "@tanstack/react-query"
import './dashboard.css';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  
  const [medicines, setmedicines] = useState([]);
  const [order, setOrder] = useState([]);


  const count = medicines.length;


  useEffect(() => {
    fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setmedicines(data));

  }, []);

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/user')
      return res.json()
    },
  })
  console.log(users);
  return (  
    <div className="w-full">
    <div className="px-4">
      <div className="w-full mx-auto">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <h1 className="text-3xl font-bold mb-10"> Dashboard</h1>
        
          <hr className="my-10" />

          <div className="p-2 md:p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="p-4 bg-green-200 h-30 rounded-xl">
                    <div className="font-bold text-xl text-gray-800 leading-none">  
                    <div>
                      <h3>PRODUCTS</h3>
                      <BsFillArchiveFill className='card_icon'  />
                      </div>
                        <h1>{count}</h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">
                  <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon' />
                  </div>
                  <div className="mt-2">
                  <h1>{count}</h1>
                  </div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">
                  <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon' />
                  </div>
                  <div className="mt-2">
                  <h1>{users.length}</h1>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">
                    <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
                    </div>
                    <div className="mt-2">
                    <h1>42</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;


// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
// import { useQuery } from "@tanstack/react-query"
// import './dashboard.css';
// import { useState, useEffect } from 'react';

// function Dashboard() {


//   const [medicines, setmedicines] = useState([]);
//   const [order, setOrder] = useState([]);


//   const count = medicines.length;


//   useEffect(() => {
//     fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setmedicines(data));

//   }, []);

//   const { refetch, data: users = [] } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/user')
//       return res.json()
//     },
//   })
//   console.log(users);




//   const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];


//   return (
//     <main className='main-container'>
//       <div className='main-title'>
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className='main-cards'>
//         <div className='card'>
//           <div className='card-inner'>
//             <h3>PRODUCTS</h3>
//             <BsFillArchiveFill className='card_icon' />
//           </div>
//           <h1>{count}</h1>
//         </div>
//         <div className='card'>
//           <div className='card-inner'>
//             <h3>CATEGORIES</h3>
//             <BsFillGrid3X3GapFill className='card_icon' />
//           </div>
//           <h1>{count}</h1>
//         </div>
//         <div className='card'>
//           <div className='card-inner'>
            // <h3>CUSTOMERS</h3>
            // <BsPeopleFill className='card_icon' />
//           </div>
//           <h1>{users.length}</h1>
//         </div>
//         <div className='card'>
//           <div className='card-inner'>
            // <h3>ALERTS</h3>
            // <BsFillBellFill className='card_icon' />
//           </div>
//           <h1>42</h1>
//         </div>
//       </div>

//       <div className='charts'>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" fill="#8884d8" />
//             <Bar dataKey="uv" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>

//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>

//       </div>
//     </main>
//   )
// }

// export default Dashboard