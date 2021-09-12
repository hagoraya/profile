const HighlightText = ({ text, backgroundColor, hyperlink }) => {
  return (
    <a
      href={hyperlink}
      target='_blank'
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </a>
  );
};

export default HighlightText;
