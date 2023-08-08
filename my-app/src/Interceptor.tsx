import axios from "axios";
import React, { useEffect } from "react";

const MyComponent: React.FC = () => {
    // Created the instance of the axios so that we can use it multiple times
    const AxiosInstance = axios.create({
        baseURL: 'http://192.168.1.12:4999/api',
    });

    AxiosInstance.interceptors.request.use((request) => {
        // request.headers.token = 'token intereptor request';
        console.log("request", request)
        return request;
    });

    AxiosInstance.interceptors.response.use((response) => {
        console.log('Response:', response.data);
        return response;
    });

    useEffect(() => {
        console.log("request")
        AxiosInstance.get('/about')
            .then(response => {
                console.log('Get API response:', response.data);
            })
            .catch(error => {
                console.error('Error fetching sponsor data:', error);
            });
    }, []);
    return (
        <div>
            <h1>About section data fetching</h1>
        </div>
    );
}

// Request
// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });
// api.interceptors.request.use((request) => {
//   // console.log("request..", request)
//   request.headers.token = 'token intereptor request';
//   return request;
// })
// api.interceptors.response.use((response) => {
//   console.log("response.....", response)
//   return response;
// })

// ===============Using fetch function===================
// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response)
//     .then((e) => e.json())
//     .then((e) => setTodo(e as TodoItem[]))
// });
// =================using axios==================
// useEffect(() => {
//   api.get('/users')
//     .then((response) => {
//       const data = response.data as TodoItem[];
//       setTodo(data);
//       console.log(data)
//     })
//     .catch((error) => {
//       // Handle error
//       console.error('Error fetching data:', error);
//     });
// })

export default MyComponent;