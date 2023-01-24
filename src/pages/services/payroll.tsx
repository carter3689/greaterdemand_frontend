import ContentProcess from "@/components/Content_work";
import Header_Main from "@/components/Header_main";
import Footer from "@/partials/footer";
import MetricFeatrues from "@/partials/metric_stats";

const content = {
    blurb1: "In today's connected world, employees expect a very seamless payroll experience from employers.",
    blurb2: "With this in mind, we built a system that allows business owners to hand-off the complicated payroll work to us. You don't have to lift a single finger afterward!",
    blurb3: "We will take care of the rest! Inside of our process we make sure to:",
    item1: "Setup the full roster of employees correctly",
    item2: "Setup initial documents for new employees",
    item3: "Update all employee records for fast changes",
    blurb6: "Payroll can be a messy process if it's not correctly handled. So we believe in removing the messy parts so that your business can thrive!",
    blurb7: "Our end goal is to make sure your employees are taken care - and you don't have to worry!"
}

export default function Payroll() {
    return (
        <>
            <Header_Main heading={"Payroll"} subheading={"Keep your business moving and your employees happy without having to manage all of the headache that comes with it!"}/>
            <ContentProcess 
            entry1={content} 
            entry2={content} 
            entry3={content} 
            entry4={content}
            entry5={content}
            entry6={content}
            entry7={content}
            listItem1={content}
            listItem2={content}
            listItem3={content}
            />
            <MetricFeatrues/>
            <Footer/>
        </>
    )
}