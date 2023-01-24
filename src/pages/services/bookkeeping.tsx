import ContentProcess from "@/components/Content_work"
import Header_Main from "@/components/Header_main"
import Footer from "@/partials/footer"
import MetricFeatrues from "@/partials/metric_stats"

const content_entry = {
    blurb1: "BookKeeping doesn't have to be a long, tiring drawn out process anymore. We've perfected a hands-off approach for our clients.",
    blurb2: "Our system allows for your business documents to be uploaded to us in a secure fashion, which we then get right to work on",
    blurb3: "We will stay in constant contact with you (or someone you appoint) in case we need to get important information from you and your team.",
    blurb4: "We are your advocate in business and will do our best to find every opprotunity for growth inside your business. Whether that is... ",
    blurb5: "We'll make sure to keep your records error free, so you can focus on building!",
    blurb6: "Once we've uncovered something of interest for your business we immediately contact you so that if needed, you can take neccessary action.",
    blurb7: "We then look for ways to mitigate and improve the key metrics that matter to your business",
    item1: "Understanding where you can save money",
    item2: "Understanding where you should deploy capital to grow",
    item3: "Understanding how take advantage of your tax benefits",
}

export default function BookKeeping() {
    return(
        <>
        <Header_Main heading={"BookKeeping"} subheading={"Put your mind at ease with our team by your side"}/>
        <ContentProcess 
            entry1={content_entry} 
            entry2={content_entry} 
            entry3={content_entry} 
            entry4={content_entry}
            entry5={content_entry}
            entry6={content_entry}
            entry7={content_entry}
            listItem1={content_entry}
            listItem2={content_entry}
            listItem3={content_entry}
            />
            <MetricFeatrues/>
            <Footer/>
        </>
        
    )
}