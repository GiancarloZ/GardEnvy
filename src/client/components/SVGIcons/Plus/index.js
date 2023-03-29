import React from "react";
// import PropTypes from 'prop-types';

export function Plus({ color, width, height, viewBox }) {
  return (
    <div>
      <svg
        width={width || "16"}
        height={height || "16"}
        viewBox={viewBox || "0 0 16 16"}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.25 1.502C9.1017 1.502 8.15285 2.38531 8.02539 3.502H6.25C5.01625 3.502 4 4.51825 4 5.752V19.252C4 20.4858 5.01625 21.502 6.25 21.502H17.75C18.9838 21.502 20 20.4858 20 19.252V5.752C20 4.51825 18.9838 3.502 17.75 3.502H15.9746C15.8471 2.38531 14.8983 1.502 13.75 1.502H10.25ZM10.25 3.002H13.75C14.1732 3.002 14.5 3.32875 14.5 3.752C14.5 4.17525 14.1732 4.502 13.75 4.502H10.25C9.82675 4.502 9.5 4.17525 9.5 3.752C9.5 3.32875 9.82675 3.002 10.25 3.002ZM6.25 5.002H8.38477C8.79062 5.60295 9.47736 6.002 10.25 6.002H13.75C14.5226 6.002 15.2094 5.60295 15.6152 5.002H17.75C18.1732 5.002 18.5 5.32875 18.5 5.752V19.252C18.5 19.6752 18.1732 20.002 17.75 20.002H6.25C5.82675 20.002 5.5 19.6752 5.5 19.252V5.752C5.5 5.32875 5.82675 5.002 6.25 5.002Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

// Copy.propTypes = {
//   color: PropTypes.string,
//   width: PropTypes.string,
//   height: PropTypes.string,
//   viewBox: PropTypes.string,
// };

// Copy.defaultProps = {
//   color: '#ffffff',
//   height: '16',
//   width: '16',
//   viewBox: '0 0 16 16',
// };
