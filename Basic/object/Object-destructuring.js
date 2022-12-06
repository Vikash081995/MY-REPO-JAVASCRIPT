const band = {
    bandName: "EdPlay",
    famousSong: "stringwars",
    year: 1978,
    singer: "edsheeran"
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName); //EdPlay
  console.log(famousSong); //stringwars
  console.log(restProps); //{year: 1978, singer: 'edsheeran'}
  