import React from 'react';
import emailjs from '@emailjs/browser';
function ContactsUs() {
  const ref = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  change parameters with env variables
    emailjs.sendForm('service_942xkh4', 'template_x60vs0s', ref.current ? ref.current : '', 'f2vYmGZfYaqWbGHJ4').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.currentTarget.reset();
  };
  return (
    // TODO add more features
    // TODO show successful after pressing send
    <>
      <div className="bg-gradient-to-b from-blue-600 to-indigo-700 h-96 w-full"></div>
      <div dir="ltr" className="-mt-80 mx-auto w-9/12">
        <div className="flex flex-col md:flex-row gap-6 py-8 px-5 md:px-10 lg:px-15 xl:px-20 bg-white shadow rounded ">
          <div className="md:-mr-12 md:my-12 md:ml-10 px-6 py-12 w-full  flex flex-col  bg-transparent rounded-lg shadow-xl md:backdrop-blur-xl">
            <form ref={ref} onSubmit={sendEmail} className="flex  flex-col w-full mx-auto">
              <h2 className="text-3xl text-center font-bold mb-12">Contact us</h2>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Phone Number"
                  name="number"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="form-control scrollbar-hide resize-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Message"
                  name="msg"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-2/5 mx-auto  py-2.5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded font-normal uppercase"
              >
                Send
              </button>
            </form>
          </div>
          <div className="shadow-lg h-56 md:h-auto w-full rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.924828377964!2d31.27464983007349!3d29.975827989792695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c2f3f871cee3fc!2zMjnCsDU4JzMzLjAiTiAzMcKwMTYnMzEuMCJF!5e0!3m2!1sen!2seg!4v1664354200920!5m2!1sen!2seg"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsUs;
