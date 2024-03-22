function foo (){
    let a= 1 
    return function (){
      let b = 2
      console.log(a++,b++)
    }
  }
  const boo = foo();
  boo();
  boo();
  