import { TextPlugin } from "gsap/TextPlugin"
import gsap from "gsap"


const textElement1 = document.querySelector(".about-p1")
const textElement2 = document.querySelector(".about-p2")
const textElement3 = document.querySelector(".about-p3")
const textElement4 = document.querySelector(".about-p4")

const text1 = "Navigating the complexities of social media can be daunting for businesses. At W STOIC AGENCY, we specialize in simplifying this process. We craft engaging content, interact with your audience, and implement strategies to boost your online presence."

const text2 = "W STOIC AGENCY understands that managing social media accounts, especially on platforms like Instagram, can be time-consuming and overwhelming. With so many other aspects of your business to focus on, it's challenging to give your social media the attention it deserves."


const text3 = "That's where W STOIC AGENCY comes in. We specialize in managing social media accounts for businesses just like yours. W STOIC AGENCY crafts engaging content, interacts with your audience, and implements strategies to boost your online presence."

const text4 = "By entrusting your social media to us, you can free up valuable time to focus on what you do best – running your business. Plus, with a strong social media presence, you'll not only increase brand awareness but also drive more traffic and sales."

gsap.registerPlugin(TextPlugin)



const options = {
  root: null, 
  rootMargin: '0px',
  threshold: 0.5 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
	gsap.to(textElement1, {
        	duration: 4,
        	text: text1
      	});

	gsap.to(textElement2, {
		duration: 4,
		text: text2
	});
	
	gsap.to(textElement3, {
                duration: 4,
                text: text3
        });

	gsap.to(textElement4, {
                duration: 4,
                text: text4
        });
	

      
      observer.disconnect();
    }
  });
});

observer.observe(textElement1);


const title = document.getElementById("main-title")
gsap.to(title, {
        duration: 4,
	text: "Social Media Management Services."
});


const previewtitle1 = document.querySelector(".preview-1-title")
const previewtitle2 = document.querySelector(".preview-2-title")



const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {                                                                                   gsap.to(previewtitle1, {                                                                                          duration: 2,
                text: "Maybe your social media page looks like this now."
        });   
                                                                                                               observer.disconnect();
    }
  });
});

observer1.observe(previewtitle1);


const observer2 = new IntersectionObserver((entries, observer) => {                                         entries.forEach(entry => {
    if (entry.isIntersecting) {
       gsap.to(previewtitle2, {
                duration: 2,
                text: "When we manage your social media page."
        });


      observer.disconnect();
    }
  });
});


observer2.observe(previewtitle2);
