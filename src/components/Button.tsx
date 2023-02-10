interface ButtonProps {
  caption: string;
  callback: () => void;
}

export default ({ caption = "Shared Button", callback }: ButtonProps) => {
  const handleOnClick = () => {
    callback();
  };
  return (
    <button className="shared-btn" onClick={handleOnClick}>
      {caption}
    </button>
  );
};
