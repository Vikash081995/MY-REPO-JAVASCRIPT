// function returbing Function

function myFunc() {
    function Hello() {
      return "hello world";
    }
    return Hello;
  }
  const ans = myFunc();
  console.log(ans()); //hello world
  