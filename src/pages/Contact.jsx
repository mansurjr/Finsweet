import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="py-32">
        <div className="container">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-4 max-w-[38%] justify-self-center text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="max-w-[70%] mx-auto mt-10 bg-[#F4F6FB] rounded-2xl p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:outline-none "
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Provide context"
                  className="mt-2 w-full rounded-md border border-gray-300 p-3 "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <select className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:outline-none">
                  <option>Select Subject</option>
                  <option>Support</option>
                  <option>Feedback</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Write your question here"
                  rows="4"
                  className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:outline-none "></textarea>
              </div>

              <div className="col-span-2 flex justify-start">
                <button className="text-white px-[56px] py-[16px] bg-[#282938] rounded-full hover:cursor-pointer select-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact
