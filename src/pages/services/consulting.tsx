import ContentProcess from "@/components/Content_work"
import Header_Main from "@/components/Header_main"
import Footer from "@/partials/footer"
import MetricFeatrues from "@/partials/metric_stats"

const content = {
    blurb1: "Consulting in today's world really is more about compassion to listen, then being right. Understanding the full weight of client's needs is where we start first!",
    blurb2: "From there, we use our years of experience to discover what you are looking to add or remove from your business.",
    blurb3: "Our process is built from the heart so that we can partner in the success of your business. Inside of our process we make sure to:",
    item1: "Create a clear vision or goal for your business - within a short/long term time frame",
    item2: "Create a plan to secure capital(when needed)",
    item3: "Create a course of action that is easy to understand and execute",
    blurb6: "We don't want to just fix a short-term problem that will come back in a few years. Our goal for each client, is always rooted in finding lasting answers to problems.",
    blurb7: "Simply put, we're different because we care - and we listen to our unique client's requests so that we don't miss any details. No matter how small!"
}

export default function Consulting () {
    return(
        <>
            <Header_Main heading={"Consulting"} subheading={"Let us help your find success in the small details! Scaling a business requires swift decisions and even faster action at times. Don't make the mistake of doing all of that alone!"}/>
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