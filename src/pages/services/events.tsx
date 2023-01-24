import Calendar from "@/components/calendar_events"
import Header_Main from "@/components/Header_main"
import Footer from "@/partials/footer"
import MetricFeatrues from "@/partials/metric_stats"

export default function Events () {
    return (
        <>
        <Header_Main heading={"Events"} subheading={"Learn what you need to progress your business forward! Our events are always packed with value so that you can hit the ground running after you leave!"}/>
        <Calendar/>
        <MetricFeatrues/>
        <Footer/>
        </>
    )
}