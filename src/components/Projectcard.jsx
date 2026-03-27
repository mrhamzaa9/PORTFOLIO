
const Projectcard = ({ video, title, description, features, tech }) => {
  return (
    <div className="p-6 sm:p-8 bg-white/5 border border-white/10 hover:-translate-y-1 transition-transform duration-300 rounded-2xl shadow-lg max-w-sm mx-auto">

      {/* Project Video */}
      {video && (
        <video
          className="rounded-xl w-full h-48 object-fill"
          src={video}
          autoPlay
          loop
          playsInline
        />
      )}

      {/* Title */}
      <p className="text-white text-2xl font-semibold mt-4">
        {title}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm mt-2 mb-4">
        {description}
      </p>

      {/* Features */}
      {features?.length > 0 && (
        <ul className="text-gray-300 text-sm mb-4 space-y-1">
          {features.map((feature, i) => (
            <li key={i}>✅ {feature}</li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      {tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* GitHub Button */}
      <a
        href="https://github.com/mrhamzaa9/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-indigo-400 to-pink-500 hover:from-indigo-500 hover:to-pink-600 transition px-6 py-2 font-medium rounded-md text-white text-sm"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Projectcard;