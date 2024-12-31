const Contact = () => {
  return (
    <div className="mt-8 max-md:w-full mb-8 flex flex-col gap-8 border p-6 rounded-lg shadow-lg shadow-slate-700">
      <h1 className="text-2xl font-mono">Contact Me</h1>
      <div className="flex flex-col gap-1 font-thin">
        <span>Name : Md Soriful Islam</span>
        <span>
          Email :{" "}
          <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw" target="blank">
            454250soriful@gmail.com
          </a>
        </span>
        <span>Moblie : 01645425043</span>
      </div>
    </div>
  );
};

export default Contact;
