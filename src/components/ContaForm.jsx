
import emailjs from '@emailjs/browser';
import React , {useRef} from "react";



function ContaForm() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5mliq6', 'template_zjqq33c', form.current, 'BqbUp6GGk8qul46Yt')
    e.target.reset();}
    
  return (
    

  <div>
        
  <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
      
      <div className="w-full p-6 bg-purple-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Contact
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" ref={form} onSubmit={sendEmail}>
              <div>
                  <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Your name</label>
                  <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""/>
              </div>
              <div>
                  <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Your name</label>
                  <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@correo" required=""/>
              </div>
              <div>
                  <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Deja tu mensaje</label>
                  <input type="text" name="project" id="text" placeholder="your message" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              
              <div className="flex items-start">
                  
                  
              </div>
              <button type="submit" className="w-full text-white bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">send your message</button>
          </form>
      </div>
  </div>

    </div>

  );
}

export default ContaForm;
