// import { useState, useEffect } from 'react';

// const useWindowDimensions = () => {
//     const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const getWindowDimensions = () => {
//                 const { innerWidth: width, innerHeight: height } = window;
//                 setWindowDimensions({
//                     width: width,
//                     height: height
//                 })
//             }
//         }

//         const handleResize = () => {
//             getWindowDimensions();
//         }

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, []);

//     return windowDimensions;
// }

// export default useWindowDimensions;