import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "ABRAHAM",
        surname: "Sisay",
        birthDay: new Date(1995, 4, 11),
        startDescription: "Hello I’m Abraham",
        phoneNumber: " Addis Ababa (+251) 92-274-1678",
        description:
            ", I am a graduate of Addis Ababa Institute of Technology under the  department of Centre of Information Technology and Scientific Computing with a Bachelor of  Science in Software Engineering program.",
    },
    technologies: {
        programming:  [
            { name: "Python", level: 60 , },
            { name: "Java & JavaEE", level: 60 , },
            { name: "Java for Android", level: 60 , },
            { name: "HTML & (S)CSS", level: 90 },
            { name: "Javascript (ES6)", level: 70 },
            { name: "Typescript", level: 60 },
            { name: "C#", level: 50 },
            { name: "PHP", level: 50 }
        ],
        frameworks: [
            { name: "Vue.js", level: 50 },
            { name: "AngularJS / Angular2+", level: 30 },
            { name: "Spring Boot", level: 50 },
            { name: "Bootstrap", level: 80 },
            { name: "Node.js", level: 60 },
        ],
        tools:[
            { name: "git" },
            { name: "Gradle" },
            { name: "Maven" },
            { name: "Django" },
            { name: "Bootstrap" },
            {name: "Ruby on Rails"},
            {name: "Bootstrap"},
            {name: "Spring Framework"},
            { name: "Wordpress" }
        ]
    },
    projects: [{
        name: "yየኔ Service",
        description: "yየኔ Service offers a mobile app for home service business owner, service provider and your customers to easily manage operations on one platform. I worked as the major designer in this project, I designed and implemented admin featurs such as users validation before regisaring to the system wich is done by the admin.",
        link: "https://github.com/hanibalgirmay/Yene-Service",
        icon: "leaf",
        startDate: "Nov, 2020",
        endDate: "Dec, 2020",
        developer: "Abraham, Hanibal, Henos, Redeat ",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#app" },
            { name: "#nodeJs" },
            { name: "#firebase|firestore" },
            { name: "#vueJs" },
            { name: "#converter-gson"}
        ]
    }, {
        name: "Jimma Institute of Technology (JiT)",
        description: "Students can view their grade report and news notification on their phone thorough this mobile application. ",
        link: "https://github.com/Abrahamsiasy/GradeView",
        //link: "https://github.com/Abrahamsiasy/ChatApp",
        icon: "address-card",
        startDate: "Feb 20, 2019",
        endDate: "seb 20, 2019",
        developer: "Abraham Sisay",
        tags: [
            { name: "#php" },
            { name: "#Java" },
            { name: "#tailwindcss" },
            { name: "#converter-gson"},
            { name: "#retrofit "},
            { name: "#mysql "}
        ]
    },{
        name: "Bookstore-Spring",
        description: "This is a simple online book store was made by using java , mysql and springboot. Booksstore system using spring boot The Model (M) in MVC and Processing Form Inputs",
        link: "https://github.com/Abrahamsiasy/Bookstore-Spring",
        icon: "address-card",
        startDate: "Feb 20, 2019",
        endDate: "Aprill 20, 2019",
        developer: "Abraham Sisay",
        tags: [
            { name: "#jpa" },
            { name: "#hybernat" },
            { name: "#java" },
            { name: "#mysql" },
            { name: "#springboot" },
            { name: "springJPA"}

        ]
    }
    ], events: [
        { 
            name: "Abraham Sisay",
            description: " ",
            role: "Student",
            type: "education",
            startDate: "Sep 2015",
            endDate: "Dec 2021",
            roles:[
                { description:" In depth learning of OOP programing with Java and C#. " },
                { description:" Python, Java (Object-Oriented Programming and Spring Boot), JavaScript, C# (Advanced Object-Oriented Programming). " },
                { description:" In depth learning of HTML, CSS, JS & Jquery. " },
                { description:" Learned basics of development of C & C++." },
                { description:" Learned basics of networks and their structure. " },
                { description:" Learned basics of Big Data Modeling and Management System. " },
                { description:" Learned basics of Database Adminstrator. " },
                { description:" Software Engneering1 Software Engneering2, Software Project Management, Software Quality Assurance, and Testing, Distributed and Object Database, Distributed Systems  Programming, Fundamentals of Data Structures and Algorithms " },

                

                
            ]
        },
        { 
            name: "Student Intern @Jimma Institute of Technology (JiT)",
            description: "I work in this institute  as a mobile  developer and web api developer, I mostly use JavaEE with Android Studio and PHP and MYSQL for the API",
            role: "Full Stack Developer ",
            type: "Intern",
            startDate: "Feb 2019",
            endDate: "Sep 2019",
            roles:[
                {description:" Improved and maintained students grade viewing system." },
                {description:" Developed and maintained atudents grade mobile app." },

            ]
        },
        { 
            name: "Unity 2D game",
            description: "bigginer UNity Game devloper ",
            role: "Unity Game Engine ",
            type: "practice",
            startDate: "jan 2021",
            endDate: "Present",
            roles:[
                {description:" Unity Game Engine " },
            ]
        }
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/linkedin.com/in/abraham-sisay-629b2117a",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/Abrahamsiasy",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/abrahamsisaysis",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/abraham_sisay/",
            icon: "instagram" 
        }, {
            name: "Facebook",
            link: "https://www.facebook.com/abrsis",
            icon: "facebook" 
        },  
        {
            name: "Telegram",
            link: "https://t.me/Lincken",
            icon: "telegram" 
        },  
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
