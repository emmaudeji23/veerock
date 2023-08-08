import Link from "next/link";

const Button = ({ children, link, variant }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'secondary':
        return 'bg-gray-300 text-gray-700 hover:bg-gray-400';
      // Add more variants as needed
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  return (
    <Link href={link}
      className={`px-4 py-2 rounded transition-colors duration-300 ${getButtonStyle()}`}
    >
      {children}
    </Link>
  );
};

export default Button;
