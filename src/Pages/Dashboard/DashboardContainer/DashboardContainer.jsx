// import React from 'react'
// import AdminDashboard from '../Admin/AdminDashboard/AdminDashBoard'
// import MemberDashboard from '../Member/MemberDashboard'

// const DashboardContainer = () => {
//   const { user } = useContext(AuthContext)
//   const [isAdmin] = useAdmin(user?.email)
//   const [isCustomer] = useCustomer(user?.email)

// }

// export default DashboardContainer
import React from 'react'
import AdminDashboard from '../Admin/AdminDashboard/AdminDashBoard'
import MemberDashboard from '../Member/MemberDashboard'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import useAdmin from '../../../hooks/useAdmin'
import useCustomer from '../../../hooks/useCustomer'

const DashboardContainer = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isCustomer] = useCustomer(user?.email)
  return (
    <div>
      {/* {isAdmin===false && <AdminDashboard></AdminDashboard>} */}
      {/* {!isCustomer && <MemberDashboard></MemberDashboard>} */}
    </div>
  )
}

export default DashboardContainer
