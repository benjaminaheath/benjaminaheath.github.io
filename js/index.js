homepage = {
    "skillsandtech": [
        {
            "skillname": "Web Dev",
            "skills": [
                "HTML",
                "CSS",
                "Javscript"
            ]
        },
        {
            "skillname": "High-Level",
            "skills": [
                "Python",
                "C++",
                "C#",
                ".NET",
                "MVC",
                "Tkinter/Qt"
            ]
        },
        {
            "skillname": "Data Science",
            "skills": [
                "Jupyter Notebooks",
                "NumPy",
                "Pandas",
                "Matplotlib",
                "MATLAB"
            ]
        },
        {
            "skillname": "Low-Level",
            "skills": [
                "C",
                "AVR / Arduino",
                "ARM Assembly",
                "PIC"
            ]
        },
        {
            "skillname": "HDL & EDA",
            "skills": [
                "SystemVerilog",
                "QuestaSim",
                "UPF (IEEE-1801)",
                "Synopsys VC-LP",
                "Synopsys DC-NXT"
            ]
        }
    ],
    "CV": [
        {
            "company":"Microchip Technology",
            "startdate":"11/9/23",
            "enddate":"Present",
            "logo":"../content/Microchip-Logo.svg",
            "jobtitle":"Silicon Design Engineer",
            "type":"Full Time",
            "responsibilities": [
                "Working as a Design Implementation in the 32-bit Microcontrollers Business Unit",
                "Designed Python and GUI-based Automation for Generating UPF and Timing Constraints for a design",
                "Extensive use of Synopsys Synthesis, Timing and Formal Verification Tools",
                "Analysis of Synthesis Results using Data Science Techniques"
            ]
        },
        {
            "company":"Network Rail",
            "startdate":"1/7/22",
            "enddate":"1/9/22",
            "logo":"../content/Network_Rail_logo.svg",
            "jobtitle":"Summer Placement Student",
            "type":"IET Power Academy Scholarship",
            "responsibilities": [
                "Summer Placement with the IET Power Academy Scholarship at Network Rail working with the Traction Power Systems team",
                "Performing modelling and simulations using MATLAB and Python",
                "Analysed and visualised large datasets using MATLAB"
            ]
        },
        {
            "company":"Network Rail",
            "startdate":"1/6/21",
            "enddate":"1/8/21",
            "logo":"../content/Network_Rail_logo.svg",
            "jobtitle":"Summer Placement Student",
            "type":"IET Power Academy Scholarship",
            "responsibilities": [
                "Summer Placement with the IET Power Academy Scholarship at Network Rail working in the Power Systems Team",
                "Solving practical problems in High Voltage Electrification through research, modelling, design and practical experimentation.",
                "Authored an advanced technical paper in modelling electrical systems"
            ]
        },
        {
            "company":"Southampton University Tennis Club",
            "startdate":"01/09/22",
            "enddate":"01/05/23",
            "logo": "../content/sutc.jpeg",
            "jobtitle":"Assistant Tennis Coach",
            "type":"Part Time",
            "responsibilities": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "Nibh praesent tristique magna sit",
                "Pretium nibh ipsum consequat nisl vel pretium lectus"
            ]
        }
    ],
    "Education": [
        {
            "institution":"University of Southampton",
            "startdate":"01/09/19",
            "enddate":"01/07/23",
            "logo":"../content/uni_southampton_crest.jpg",
            "qualification":"MEng Electrical and Electronic Engineering",
            "specialisation":"VLSI Design, Computer Architecture, Embedded Software",
            "achieved":"First Class Honours, Grade Average 78%",
            "awards":[
                "Zepler Award for Highest Grade in Masters' Cohort (86%)",
                "Group Design Project Award for Achievement in Post-Quantum Cryptography Research Project (93%)",
                "IEEE-published post-quantum cryptography research"
            ]
        },
        {
            "institution":"Yavneh College Sixth Form",
            "startdate":"01/09/17",
            "enddate":"01/06/23",
            "logo":"../content/Yavneh-College-Logo.png",
            "qualification":"A-Levels",
            "specialisation":"Mathematics, Geography, Further Mathematics, Physics",
            "achieved":"A*A*AA",
            "awards": [null]
        }
    ]
};

const skillsContainer = document.getElementById('skills-container');
const cvContainer = document.getElementById('cv-container');
const eduContainer = document.getElementById('edu-container');

document.addEventListener('DOMContentLoaded', () => {
    loadSkillsContent();
    loadCVContent();
    loadEduContent();
});

function loadSkillsContent(){
    skills = homepage.skillsandtech;
    skillsItems = skills.map(skillItem => {
        skillListItems = skillItem.skills.map(skill => {
            skillListItem = `
                <li class="skill-item">${skill}</li>
            `;
            return skillListItem;
        })
        skillsContainerItem = `
        <div class="skills-container-item">
            <h4 class="skill-title">${skillItem.skillname}</h4>
            <ul class="skill-container">
                ${skillListItems.join('')}
            </ul>
        </div>`
        return skillsContainerItem;
    });
    skillsContainer.innerHTML = skillsItems.join('');
};

function loadCVContent(){
    cv = homepage.CV;
    cvItems = cv.map(cvItem => {
        respItems = cvItem.responsibilities.map(respItem => {
            return `<li class="cv-resp-item">${respItem}</li>`;
        });
        return `
            <div class="cv-item">
                <div class="cv-info">
                    <h4 class="cv-end">${cvItem.enddate}</h4>
                    <img class="cv-img" src="${cvItem.logo}">
                    <h4 class="cv-start">${cvItem.startdate}</h4>
                </div>
                <div class="cv-desc">
                    <h3 class="cv-company">${cvItem.company}</h3>
                    <h4 class="cv-title">${cvItem.jobtitle}</h4>
                    <h4 class="cv-position">${cvItem.type}</h4>
                    <ul class="cv-resp-container">${respItems.join('')}</ul>
                </div>
            </div>
        `
    });
    cvContainer.innerHTML = cvItems.join('');
};

function loadEduContent(){
    edu = homepage.Education;
    eduItems = edu.map(eduItem => {
        awardItems = eduItem.awards.map(awardItem => {
            return awardItem !== null ? `<li class="edu-achieve-item">${awardItem}</li>` : '';
        });
        awardItems = (awardItems === null) ? '' : awardItems.join('');
        return `
            <div class="edu-item">
                <div class="edu-info">
                    <h4 class="edu-end">${eduItem.enddate}</h4>
                    <img class="edu-img" src="${eduItem.logo}">
                    <h4 class="edu-start">${eduItem.startdate}</h4>
                </div>
                <div class="edu-desc">
                    <h3 class="edu-institute">${eduItem.institution}</h3>
                    <h4 class="edu-qualification">${eduItem.qualification}</h4>
                    <h4 class="edu-specialisation">${eduItem.specialisation}</h4>
                    <h4 class="edu-grade">${eduItem.achieved}</h4>
                    <ul class="edu-achievement-container">${awardItems}</ul>
                </div>
            </div>
        `
    });
    eduContainer.innerHTML = eduItems.join('');
    console.log(eduItems);
};