
export const  introReduser = (state = [], action) => {
    return state
}

export const initialIntro = [
    {
      id: 1,
      title: "Attendance management",
      description: "Employee attendance management is extremely important for the smooth functioning of any team.",
      image: require("../../../assets/intru1.png"),
    },
    {
      id: 2,
      title: "Automation of work flows",
      description: "Instead of manual entry, you can automatically track employee attendance.",
      image: require("../../../assets/intru2.png"),
    },
    {
      id: 3,
      title: "Increasing work efficiency",
      description: "Tracking attendance of your employees keeps them responsible, productive, and boosts the profitability of your business.",
      image: require("../../../assets/intru3.png"),
    },
  ];

  export const selectIntro =  (state) => {
    return state.intro
  }