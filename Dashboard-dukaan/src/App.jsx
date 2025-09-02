import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { OrderSearch } from "./components/OrderSearch"
import { Overveiw } from "./components/Overveiw"
import { PayRef } from "./components/PayRef"
import { RevenueCard } from "./components/RevenueCard"

function App() {

  return (
    <div>
      <Header />
      <Overveiw />
      <div className="flex">
      <RevenueCard title={'Next Payout'} amount={'2312.23'} orderCount={23} time={'Today, 4:00PM'}/>
      <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={13}/>
      <RevenueCard title={'Amount Processed'} amount={'23,92,312.19'}/>
      </div>
      <Heading />
      <PayRef />
      <OrderSearch />
    </div>
  )
}

export default App
