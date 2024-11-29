import sendMsgImg from "@/assets/sendMessageImg.jpg";

const SendUsMessage = () => {
  return (
    <div
      className="rounded-[20px] p-12 h-full"
      style={{
        backgroundImage: `url(${sendMsgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {/* Form Section */}
        <div className="bg-white rounded-[20px] m-[10px] p-[30px]">
          <h1 className="text-center text-xl mb-[10px]">Send us a Message</h1>
          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Enter your name"
              className="mb-5 border-2 border-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Email"
              className="mb-5 border-2 border-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="mb-5 border-2 border-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary text-xl text-white rounded-[20px] px-6 py-3 hover:bg-primary-dark inline-block"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Empty Column */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default SendUsMessage;
