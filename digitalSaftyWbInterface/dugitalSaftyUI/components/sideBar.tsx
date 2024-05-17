 

export const Sidebar = () => {
	 

	return (
		<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-bold " aria-label="Sidebar" >

         
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-10 " style={
	{
		fontWeight: "1000",
	}
}>

<div className="flex items-center text-center justfy-center" style={
    {
        marginLeft: "35px",
    }
}>
                <img 
                        style={{ width: "130px", height: "85px" }}
                src="image.png" alt="ai-shield" />
            </div>
      <ul className="space-y-2 font-medium pl-4" style={{ marginTop: "50px" , fontWeight: "700",}}>
         <li>
            <a href="/email-adress-input" className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713L1.334 5.427A2 2 0 0 1 3 4h18a2 2 0 0 1 1.666.427L12 12.713z"/>
                  <path d="M12 14.743L2.025 8.148V19a2 2 0 0 0 2 2h15.95a2 2 0 0 0 2-2V8.148L12 14.743z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Email Address</span>
            </a>
         </li>
         <li>
            <a href="email-content-input" className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Email Content</span>
            </a>
         </li>
         <li>
            <a href="/url-input" className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-700 icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6 78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7 10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5 11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4 165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6 25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">URL</span>
            </a>
         </li>
         <li>
            <a href="/document-input" className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-700 icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Document</span>
            </a>
         </li>
         <li>
            <a href="/vishing-detection" className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-700 icon" aria-hidden="true"  fill="currentColor" viewBox="0 0 384 512"  >
   
  <path className="cls-1" d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96z"/>
  <path className="cls-2" d="M320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"/>
</svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Voice</span>
            </a>
         </li>
      </ul>
      
   </div>
</aside>
	);
};
