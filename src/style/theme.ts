const theme = {
  color: {
    primary: "#FFC107",
    primaryHover: "#C59400",
    primaryLight: "#FFF4D4",
    secondary: "#DDDDDD",
    secondaryHover: "#AAAAAA",
    tertiary: "#607D8B",
    tertiaryLight: "#607D8B4D",
    darkOpacity: "rgba(0, 0, 0, 0.7)",
    light: "#EEEEEE",
    dark: "#111111"
  },
  gradient: {
    primary:
      "linear-gradient(45deg, rgba(255,219,113,1) 0%, rgba(255,191,0,1) 35%, rgba(255,191,0,1) 64%, rgba(255,219,113,1) 100%)",
    primaryColor: "#FFDB71"
  },
  spacing: {
    s: "10px",
    m: "15px",
    l: "20px",
    xl: "30px",
    xxl: "45px"
  },
  fontSize: {
    h1: {
      mobile: "23px",
      descop: "36px"
    },
    h2: {
      mobile: "18px",
      descop: "24px"
    },
    p: "16px"
  },
  sizing: {
    inputsHeight: "40px",
    header: {
      mobile: "75px",
      descop: "85px"
    },
    navigation: {
      mobile: "60px",
      descop: "70px"
    }
  },
  shadow: {
    primary: " 0px 0px 10px 1px gray"
  }
} as const;

export default theme;
