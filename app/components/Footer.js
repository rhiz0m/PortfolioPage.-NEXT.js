const Footer = () => {
    return (
      <footer className="bg-slate-800 text-blue-200 rounded-sm p-4 mt-auto">
        <h1 className="text-center text-lg font-semibold">Contact Info</h1>
        <div className="flex flex-col items-center">
          <div>
            <p className="text-left">
              <span className="font-semibold text-white">Mail:</span>{" "}
              antonsson.andreas@hotmail.com
            </p>
            <p className="text-left">
              <span className="font-semibold text-white">Mob:</span> 070-3107858
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer