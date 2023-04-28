import { useEffect, useState } from 'react'

const useMember = (email) => {
  const [isCustomer, setIsCustomer] = useState(false)
  const [isCustomerLoading, setIsCustomerLoading] = useState(true)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/customer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsCustomer(data.isCustomer)
          setIsCustomerLoading(false)
        })
    }
  }, [email])
  return [isCustomer, isCustomerLoading]
}

export default useMember
