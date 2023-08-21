import Link from "next/link";

const Button = ({ children, link, variant }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'hover-blue';
      case 'secondary':
        return 'hover-yellow';
      // Add more variants as needed
      default:
        return 'hover-blue';
    }
  };

  return (
    <Link href={link}
      className={`px-4 sm:px-6 py-2 sm:py-3 rounded transition-colors duration-300 ${getButtonStyle()}`}
    >
      {children}
    </Link>
  );
};

export default Button;
