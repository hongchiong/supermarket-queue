const computeQueueTime = (customers, n) => {
  let servers = n;
  let custnum = customers.length;
  let custserved = 0;
  // let customers = customers;
  let start = new Date().getTime();
  let server = (cust) => {
    servers--
    if (servers > 0) {
      server(customers.shift())
    }
    if (cust != undefined) {
      setTimeout(function() {
        // console.log("served");
        custserved++
        // console.log(custserved);
        if (custserved == custnum) {
          done();
        };
        server(customers.shift());
      }, cust*10);
    };
  };
  let done = () => {
      if (customers.length == 0) {
        let end = new Date().getTime();
        // console.log(start, end);
        return console.log(parseInt((end - start)/10));
      };
  }

  server(customers.shift());
};

computeQueueTime([2,3,10], 1)