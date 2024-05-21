export const customStyles = {
    option: (base, { isFocused }) => {
      return {
        ...base,
        backgroundColor: isFocused ? "#FB953E" : "white",
        color: isFocused ? "white" : "black",
        borderRadius: "0",
        "&:hover": {
            cursor: "pointer",

        }
      };
    },
    control: (base, { isFocused }) => {
        return {
          ...base,
          borderColor: isFocused ? "black" : "black",
          color: isFocused ? "white" : "black",
          borderRadius: "0",
          outline: "none",
          cursor: "pointer",
          "&:hover": {
            outline: "none",

        }
        };
      },
  };