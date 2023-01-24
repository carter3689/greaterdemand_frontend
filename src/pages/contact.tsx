import ContactForm from "@/components/ContactForm";
import Header_Main from "@/components/Header_main";
import Footer from "@/partials/footer";
import MetricFeatrues from "@/partials/metric_stats";

export default function Contact() {
    return (
        <>
            <Header_Main heading={"Payroll"} subheading={"Ready to get started moving and put your business in position to dominate? We'd love to work with you!"}/>
            <ContactForm/>
            <MetricFeatrues/>
            <Footer/>
        </>
    )
}