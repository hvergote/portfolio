import Desktop from "./desktop";
import Window from "./window";
import "../assets/css/skills.css";

const skills = [  
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React",
    "Vite",
    "Node.js",
    ".net",
    "C#",
    "Blazor",
    "Spring",
    "MySQL",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "neo4j",
    "Swift",
    "SwiftUI",
    "Kotlin",
    "Git"
]


export default function Skills() {
    return (
        <>
        <Window title="Skills" width={30} height={30} >
        <>
        <div className="skills">
            <div className="skills-list">
                {skills.map((skill, index) => {
                    return <div key={index} className="skill">
                        <div className="file-icon">
                            <img src="/src/assets/images/system_file_icon.png" alt="O" />
                        </div>
                        {skill}
                        </div>
                })
            }
            </div>

        </div>
        <div className="bottom-text">{skills.length} Objects found in Skills</div>
        </>
        </Window>
        <Desktop title="Skills"/>
        </>
    )
}