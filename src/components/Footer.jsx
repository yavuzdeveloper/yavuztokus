const Footer = () => {
  return (
    <footer className="w-full py-6 bg-transparent">
      <div className="container mx-auto px-4 flex justify-center items-center pt-4 border-t border-white/10 dark:border-white/10">
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/yavuztokus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.04-1.852-3.04-1.853 0-2.136 1.447-2.136 2.941v5.668H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.599 0 4.266 2.368 4.266 5.451v6.292zM5.337 7.433c-1.144 0-2.069-.925-2.069-2.069a2.07 2.07 0 114.138 0c0 1.144-.925 2.069-2.069 2.069zM6.991 20.452H3.683V9h3.308v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.273V1.727C24 .774 23.207 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/yavuzdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12a12 12 0 008.208 11.386c.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.415-4.042-1.415-.547-1.39-1.335-1.76-1.335-1.76-1.091-.746.082-.731.082-.731 1.205.084 1.84 1.237 1.84 1.237 1.072 1.835 2.812 1.305 3.496.998.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.934 0-1.312.468-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 016 0c2.29-1.554 3.296-1.23 3.296-1.23.653 1.652.24 2.873.118 3.176.77.84 1.234 1.91 1.234 3.222 0 4.61-2.806 5.628-5.479 5.924.43.372.823 1.104.823 2.226v3.293c0 .319.218.69.824.574A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
