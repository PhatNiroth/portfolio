const DownloadCv = () => {
    return (
      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-blue-100 text-blue-800 font-medium border border-blue-300 hover:bg-blue-200 transition-colors duration-200"
      >
        <i className="fa-solid fa-circle-down text-xl"></i>
        <span>Download CV</span>
      </a>
    );
  };
  
  export default DownloadCv;
  