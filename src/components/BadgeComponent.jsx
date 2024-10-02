export const BadgeComponent = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1c1f24] via-[#2d3b45] to-black font-sans text-[#dfe1e5] flex items-center justify-center">
        <div className="badge flex flex-col items-center justify-center rounded-lg shadow-md h-[calc(100vh-60px)]">
          <img
            src="https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png"
            alt="Badge Website"
            className="w-[250px] h-[250px] hover:scale-110 transition-transform duration-300"
          />
          <div className="badge-details text-center mt-4">
            <h2 className="text-2xl mb-1 text-white hover:text-[#e8d07e] transition-colors duration-300">
              Season of AI | Beginner AI Learner
            </h2>
            <p className="text-lg">
              Awarded to: <strong className="text-[#e8d07e]">hello.rajat.rajput@gmail.com</strong>
            </p>
            <p className="text-lg">
              Issued on: <strong className="text-[#e8d07e]">Jul 28, 2024</strong> at{" "}
              <strong className="text-[#e8d07e]">1:11 AM</strong>
            </p>
          </div>
          <div className="download-card mt-5">
            <a
              download
              href="badge.png"
              className="download-button inline-block py-2 px-4 bg-[#58a6ff] text-white font-bold rounded-lg no-underline transition-colors duration-300 hover:bg-[#4183c4]"
            >
              Download Badge
            </a>
          </div>
        </div>
        <footer className="text-center p-4 bg-gradient-to-br from-[#1c1f24] via-[#2d3b45] to-black text-[#dfe1e5] w-full border-t-4 border-[#58a6ff] absolute bottom-0">
          <p>
            Follow us on{" "}
            <a href="https://github.com/rajatuiwebdev/badge-website" className="underline">
              Github
            </a>{" "}
            | <a href="#" className="underline">LinkedIn</a>
          </p>
        </footer>
      </div>
    );
  };
  