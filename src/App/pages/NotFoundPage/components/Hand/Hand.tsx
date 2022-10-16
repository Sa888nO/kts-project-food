export enum Direction {
  Left = "Left",
  Right = "Right",
}

type HandProps = {
  direction?: Direction;
};

const Hand: React.FC<HandProps> = ({ direction }) => {
  return (
    <>
      {direction === Direction.Left ? (
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="white" fillOpacity="0.01" />
          <path
            d="M44 40.9998V18.9998H38V40.9998H44Z"
            fill="#2F88FF"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 19C30.8948 12.4302 26.7757 8.66342 25.6428 7.69966C23.9433 6.25403 22.0226 6.86106 22.0226 10.4789C22.0226 14.0967 27.2864 16.2441 27.2864 19C27.2898 19.0164 20.529 19.0175 7.00404 19.0033C5.3467 19.0015 4.00175 20.3437 4 22.001C4 22.0021 4 22.0031 4 22.0042C4 23.6633 5.34501 25.0083 7.00417 25.0083H14.0165C15.2234 32.9769 15.8893 37.3099 16.0144 38.0073C16.2019 39.0535 17.199 41 20.068 41C21.9807 41 27.9581 41 38 41V19Z"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="white" fillOpacity="0.01" />
          <path
            d="M10.0266 40.9736L10.0266 18.9736H4.02661L4.02661 40.9736H10.0266Z"
            fill="#2F88FF"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0266 18.9736C17.1495 12.4546 21.2774 8.71403 22.4104 7.75178C24.1098 6.30839 26.0306 6.91448 26.0306 10.5266C26.0306 14.1388 20.7452 16.222 20.7452 18.9736C20.7418 18.99 27.5009 18.9911 41.0226 18.9769C42.6799 18.9752 44.0249 20.3173 44.0266 21.9746L44.0266 21.9778C44.0266 23.637 42.6816 24.982 41.0224 24.982H33.013C31.8042 32.9547 31.1373 37.2893 31.0122 37.9856C30.8247 39.0302 29.8276 40.9736 26.9586 40.9736C25.0459 40.9736 20.0686 40.9736 10.0266 40.9736V18.9736Z"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default Hand;
