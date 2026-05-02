import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import LeftNavber from "../components/LayoutComponent/LeftNavber"
import RightNavber from "../components/LayoutComponent/RightNavber"
import Navber from "../components/Navber"
import LatestNews from "./LatestNews"



const HomeLayout = () => {
    return (
        <div className='container mx-auto'>

            <header>
                <Header></Header>
                <section >
                    <LatestNews></LatestNews>
                </section>
            </header>


            <nav>
                <Navber></Navber>
            </nav>

            <main className='grid grid-cols-1 md:grid-cols-12 py-12 justify-between text-center gap-12'>

                <aside className="md:col-span-3  w-full">
                    <LeftNavber></LeftNavber>
                </aside>


                <section className="md:col-span-6  w-full">
                  <Outlet></Outlet>
                </section>



                <aside className="md:col-span-3  w-full">
                   <RightNavber></RightNavber>
                </aside>

            </main>
        </div>
    )
}

export default HomeLayout
