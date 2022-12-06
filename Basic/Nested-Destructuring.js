const users = [
    { userId: 1, fName: "Raj", gender: "M" },
    { userId: 2, fName: "kar", gender: "F" },
    { userId: 3, fName: "kirti", gender: "F" }
  ];
  
  const [{ fName: user1Fname, userId }, , { gender: User3gender }] = users;
  console.log(user1Fname); //Raj
  console.log(userId); //1 
  console.log(User3gender); //F
  // ---------------------------------------------------------
  