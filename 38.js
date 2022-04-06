function myLocalScope() {
    var myVar = "foo"
      console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    console.log('outside myLocalScope', myVar);