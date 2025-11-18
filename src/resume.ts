// Resume Generator - Creates downloadable PDF
export class ResumeGenerator {
    private downloadBtn: HTMLElement | null;

    constructor() {
        this.downloadBtn = document.getElementById('downloadResume');
    }

    public init(): void {
        this.downloadBtn?.addEventListener('click', () => this.generateResume());
    }

    private generateResume(): void {
        const resumeHTML = this.createResumeHTML();
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        
        if (printWindow) {
            printWindow.document.write(resumeHTML);
            printWindow.document.close();
            
            setTimeout(() => {
                printWindow.print();
            }, 250);
        }
    }

    private createResumeHTML(): string {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Fidel Iranzi - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #2563eb;
        }
        
        .header h1 {
            font-size: 32px;
            color: #2563eb;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            color: #666;
            margin: 5px 0;
        }
        
        .section {
            margin: 30px 0;
        }
        
        .section h2 {
            font-size: 20px;
            color: #2563eb;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
        }
        
        .section p, .section li {
            margin: 8px 0;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .skill-category h3 {
            font-size: 16px;
            color: #333;
            margin-bottom: 8px;
        }
        
        .skill-category ul {
            list-style: none;
            padding-left: 0;
        }
        
        .skill-category li {
            padding: 3px 0;
            font-size: 14px;
        }
        
        .skill-category li:before {
            content: "▸ ";
            color: #2563eb;
            font-weight: bold;
        }
        
        .project {
            margin: 15px 0;
        }
        
        .project h3 {
            font-size: 16px;
            color: #333;
            margin-bottom: 5px;
        }
        
        .project p {
            font-size: 14px;
            color: #666;
            margin-left: 20px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        @media print {
            body {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>FIDEL IRANZI</h1>
        <p>Web Developer & Mobile App Developer</p>
        <div class="contact-info">
            <p>📧 fideliranzii@gmail.com</p>
            <p>📱 +250 785 139 833</p>
            <p>🇷🇼 Rwanda</p>
        </div>
    </div>

    <div class="section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
            Passionate and skilled Web and Mobile Application Developer with expertise in creating elegant, 
            user-friendly digital experiences. Specializing in frontend development with a keen eye for design, 
            transforming ideas into functional, scalable applications. Proven track record in delivering innovative 
            solutions for agricultural management, e-commerce, and productivity tools.
        </p>
    </div>

    <div class="section">
        <h2>KEY PROJECTS</h2>
        
        <div class="project">
            <h3>Rwanda Digital Solutions</h3>
            <p>Developed innovative web applications contributing to Rwanda's digital transformation, 
            focusing on accessible and efficient solutions for local communities.</p>
            <p><strong>Technologies:</strong> React, JavaScript, Responsive Design</p>
        </div>

        <div class="project">
            <h3>SpplyPlus - Frontend Developer</h3>
            <p>Led frontend development implementing modern UI/UX designs and ensuring seamless 
            user experiences across all devices.</p>
            <p><strong>Technologies:</strong> Vue.js, TypeScript, CSS3</p>
        </div>

        <div class="project">
            <h3>Agriculture Management System</h3>
            <p>Comprehensive system for tracking crops, sales, farm inputs, and production reports 
            designed to optimize farming operations.</p>
            <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
        </div>

        <div class="project">
            <h3>Virtual Assistant Toolkit</h3>
            <p>Sample toolkit showcasing scheduling, automated email handling, and productivity tools.</p>
            <p><strong>Technologies:</strong> JavaScript, API Integration, Automation</p>
        </div>
    </div>

    <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Frontend Development</h3>
                <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js, Vue.js</li>
                    <li>TypeScript</li>
                    <li>Responsive Design & Mobile-First</li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h3>Mobile Development</h3>
                <ul>
                    <li>React Native</li>
                    <li>Cross-Platform Apps</li>
                    <li>Mobile UI/UX</li>
                    <li>App Optimization</li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h3>Backend & Database</h3>
                <ul>
                    <li>Node.js & Express</li>
                    <li>MongoDB, MySQL</li>
                    <li>RESTful APIs</li>
                    <li>Authentication & Security</li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h3>Tools & Frameworks</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>npm & yarn</li>
                    <li>Agile Methodology</li>
                    <li>VS Code</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>CONTACT</h2>
        <p><strong>Email:</strong> fideliranzii@gmail.com</p>
        <p><strong>WhatsApp:</strong> +250 785 139 833</p>
        <p><strong>Location:</strong> Rwanda</p>
    </div>
</body>
</html>
        `;
    }
}
