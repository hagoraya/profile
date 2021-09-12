const HighlightText = ({ text, backgroundColor, hyperlink }) => {
  return (
    <a
      href={hyperlink}
      rel="noreferrer"
      target="_blank"
      style={{ backgroundColor: backgroundColor, color: 'black' }}
    >
      {text}
    </a>
  );
};

export default HighlightText;
