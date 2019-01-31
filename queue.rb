def computeQueueTime(customers, n)
  $customers = customers
  $n = n
  start = Time.now


  serve($customers.shift)

  done = Time.now
  totaltime = done - start
end

def serve(cust)
  $n = $n -1
  if $n > 0
    serve($customers.shift)
  end
  if cust != nil
    sleep cust
    puts $customers
    puts "hi"
    serve($customers.shift)
  end
end

puts computeQueueTime([10,2,3,3], 2)
puts "total"
