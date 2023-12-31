'use client'

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { contactlinks } from "../data/contactlinks";

const ReactWhatsapp = () => {
    return (
        <WhatsAppWidget
            phoneNo={contactlinks?.phonenumber}
            position="right"
            widgetWidth="250px"
            widgetWidthMobile="260px"
            autoOpen={false}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt=""
            iconSize="60"
            iconColor="white"
            iconBgColor="green"
            headerIcon="/favicon.png"
            headerIconColor="#24358a"
            headerTxtColor="white"
            headerBgColor="#24358a"
            headerTitle="Veerock"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="green"
            btnTxt="Start Chat"
            btnTxtColor="white"
        />
    );
};

export default ReactWhatsapp;