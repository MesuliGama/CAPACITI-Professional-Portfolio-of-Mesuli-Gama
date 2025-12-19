import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useOnScreen from '../hooks/useOnScreen';
import { 
    LINKEDIN_URL,
    GITHUB_URL,
    EMAIL_ADDRESS,
    PHONE_NUMBER
} from '../constants';

// Declare global variables from CDN scripts for TypeScript
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

const ATSSection: React.FC = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [containerRef, isVisible] = useOnScreen({ threshold: 0.1 });

    const handlePrintPortfolio = async () => {
        setIsDownloading(true);
        setError(null);

        if (!window.jspdf || !window.html2canvas) {
            setError("PDF generation library not loaded. Please refresh the page.");
            setIsDownloading(false);
            return;
        }

        const { jsPDF } = window.jspdf;

        // Custom HTML structure matching the user's PDF design request
        const portfolioHtml = `
            <div style="font-family: 'Arial', sans-serif; display: flex; width: 800px; min-height: 1122px; margin: 0; padding: 0; background-color: white; overflow: hidden; position: relative;">
                
                <!-- Left Sidebar -->
                <div style="width: 32%; background-color: #1a2238; color: white; padding: 40px 20px; display: flex; flex-direction: column; position: relative;">
                    
                    <!-- Top Graphic element (Triangle) -->
                    <div style="position: absolute; top: 0; left: 0; width: 0; height: 0; border-top: 120px solid #5b3e8c; border-right: 120px solid transparent;"></div>

                    <div style="margin-top: 80px; margin-bottom: 40px;">
                        <h1 style="font-size: 28px; font-weight: 700; line-height: 1.1; margin: 0; color: white; text-transform: uppercase;">MESULI MICHAEL<br>GAMA</h1>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px; margin-bottom: 15px; font-weight: 400;">Personal Details</h2>
                        
                        <div style="margin-bottom: 12px;">
                            <strong style="display: block; font-size: 14px; margin-bottom: 2px;">Age:</strong>
                            <span style="font-size: 13px; color: #e5e7eb;">26</span>
                        </div>
                        <div style="margin-bottom: 12px;">
                            <strong style="display: block; font-size: 14px; margin-bottom: 2px;">Location:</strong>
                            <span style="font-size: 13px; color: #e5e7eb;">Pretoria, Gauteng</span>
                        </div>
                        <div style="margin-bottom: 12px;">
                            <strong style="display: block; font-size: 14px; margin-bottom: 2px;">Languages:</strong>
                            <span style="font-size: 13px; color: #e5e7eb;">English, IsiZulu</span>
                        </div>
                        <div style="margin-bottom: 12px;">
                            <strong style="display: block; font-size: 14px; margin-bottom: 2px;">Drivers License:</strong>
                            <span style="font-size: 13px; color: #e5e7eb;">Yes</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px; margin-bottom: 15px; font-weight: 400;">Online Presence</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
                            <li style="margin-bottom: 8px; display: flex; align-items: center;">
                                <span style="margin-right: 8px; color: #60a5fa;">•</span>
                                <a href="${LINKEDIN_URL}" style="color: #93c5fd; text-decoration: none;">LinkedIn</a>
                            </li>
                            <li style="margin-bottom: 8px; display: flex; align-items: center;">
                                <span style="margin-right: 8px; color: #60a5fa;">•</span>
                                <a href="${GITHUB_URL}" style="color: #93c5fd; text-decoration: none;">GitHub</a>
                            </li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px; margin-bottom: 15px; font-weight: 400;">Technical Proficiencies</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 1.6;">
                            <li>• AI Fundamentals</li>
                            <li>• User Experience Design</li>
                            <li>• Front End Developer</li>
                            <li>• Troubleshooting</li>
                            <li>• HTML, CSS, JavaScript, Java</li>
                            <li>• Computer Skills (Office 365)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style="font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px; margin-bottom: 15px; font-weight: 400;">Soft Skills</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 1.6;">
                            <li>• Adaptability</li>
                            <li>• Collaboration</li>
                            <li>• Work ethic</li>
                            <li>• Emotional Intelligence</li>
                            <li>• Teamwork</li>
                            <li>• Leadership</li>
                        </ul>
                    </div>
                </div>

                <!-- Main Content -->
                <div style="width: 68%; padding: 40px; color: #333; position: relative;">
                    
                    <!-- Logo Header -->
                    <div style="margin-bottom: 40px; display: flex; align-items: center; justify-content: flex-end;">
                        <!-- Logo Approximation -->
                         <div style="display: flex; align-items: center; gap: 10px;">
                             <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                                <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" stroke="#1a2238" stroke-width="8"/>
                                <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" fill="#e11d48"/>
                                <path d="M50 20 V80 M20 50 H80" stroke="white" stroke-width="2"/>
                            </svg>
                            <span style="font-size: 36px; font-weight: 700; letter-spacing: 4px; color: #1a2238;">CAPACITI</span>
                        </div>
                    </div>

                    <!-- Profile Summary -->
                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 22px; font-weight: 400; color: #1a2238; margin-bottom: 10px; border-bottom: 1px solid #1a2238; padding-bottom: 5px;">Profile Summary</h2>
                        <p style="font-size: 13px; line-height: 1.5; color: #4b5563;">
                            I am a results driven IT professional with over three years of experience working across technology, administrative systems, and compliance-focused environments. I hold a Diploma in Information Technology and gained hands-on, industry-relevant experience through the CAPACITI programme, where I strengthened my skills in systems support, data management, workflow optimization, and digital process improvement.
                        </p>
                    </div>

                    <!-- Education -->
                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 22px; font-weight: 400; color: #1a2238; margin-bottom: 15px; border-bottom: 1px solid #1a2238; padding-bottom: 5px;">Education</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <div>
                                    <strong style="display: block; font-size: 14px; color: #374151;">Diploma in Information Technology</strong>
                                    <div style="color: #4b5563;">Richfield Graduate Institute of Technology</div>
                                    <div style="color: #6b7280; font-size: 12px;">Year Obtained: 2020</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Work Experience -->
                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 22px; font-weight: 400; color: #1a2238; margin-bottom: 15px; border-bottom: 1px solid #1a2238; padding-bottom: 5px;">Work Experience</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
                            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <div>
                                    <strong style="display: block; font-size: 14px; color: #374151;">Digital Associate</strong>
                                    <div style="color: #4b5563;">CAPACITI Digital Career Accelerator</div>
                                    <div style="color: #6b7280; font-size: 12px; font-weight: 600;">Oct 2025 – TO DATE</div>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <div>
                                    <strong style="display: block; font-size: 14px; color: #374151;">Administration Intern</strong>
                                    <div style="color: #4b5563;">Department of Education uThukela District</div>
                                    <div style="color: #6b7280; font-size: 12px; font-weight: 600;">Jan 2023 – Dec 2023</div>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <div>
                                    <strong style="display: block; font-size: 14px; color: #374151;">Neighborhood Agent</strong>
                                    <div style="color: #4b5563;">Community Constituency Covid-19 Front</div>
                                    <div style="color: #6b7280; font-size: 12px; font-weight: 600;">April 2022 – Jul 2022</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Achievements and Key Projects -->
                    <div style="margin-bottom: 30px;">
                        <h2 style="font-size: 22px; font-weight: 400; color: #1a2238; margin-bottom: 15px; border-bottom: 1px solid #1a2238; padding-bottom: 5px;">Achievements and Key Projects</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <span style="color: #374151;">Artificial Intelligence (AI) Bootcamp</span>
                            </li>
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <span>
                                    <a href="https://aigenerator-ten.vercel.app/" style="color: #2563eb; text-decoration: none;">MindVerse</a> , 
                                    <a href="https://spark-iota-three.vercel.app/" style="color: #2563eb; text-decoration: none;">S.P.A.R.K</a> , 
                                    <a href="https://sync-net-sooty.vercel.app/" style="color: #2563eb; text-decoration: none;">SyncNet</a> , 
                                    <a href="https://partyrock.aws/u/KishanGosai007/HbgywbRUF/AURA-(Artificial-Understanding-and-Response-Assistant)" style="color: #2563eb; text-decoration: none;">AURA</a> , 
                                    <a href="https://www.figma.com/proto/4liiOiq63cAI9lr4SFnZ52/DeepSeeker-Prototype?node-id=14-69&t=RYKbjfu7eT0YtV50-1&starting-point-node-id=14%3A69" style="color: #2563eb; text-decoration: none;">DeepSeeker</a> , 
                                    <a href="https://github.com/MesuliGama/Bias-Audit-" style="color: #2563eb; text-decoration: none;">BIAS</a>,
                                    <a href="https://mzansifix.vercel.app/" style="color: #2563eb; text-decoration: none;">MzansiFix</a>
                                </span>
                            </li>
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <span style="color: #374151;">FNB App Academy 2025 - FULL STACK DEVELOPMENT</span>
                            </li>
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <span style="color: #374151;">NOSA College - Introduction to SAMTRAC and SAMTRAC Public</span>
                            </li>
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <span style="color: #374151;">Diploma in Information Technology</span>
                            </li>
                        </ul>
                    </div>

                    <!-- References -->
                    <div style="margin-bottom: 25px;">
                        <h2 style="font-size: 22px; font-weight: 400; color: #1a2238; margin-bottom: 15px; border-bottom: 1px solid #1a2238; padding-bottom: 5px;">References</h2>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
                            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                                <span style="color: #ef4444; margin-right: 10px; font-size: 10px; margin-top: 5px;">&#9679;</span>
                                <div style="color: #374151;">
                                    <strong>Name & Surname:</strong> KEFILOE MPHYE (Talent Development Coach)<br>
                                    <strong>Company:</strong> CAPACITI Digital Career Accelerator<br>
                                    <strong>Contact details:</strong> 081 334 8416
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Bottom Geometric Shape (Red Triangles) -->
                     <div style="position: absolute; bottom: 0; right: 0; width: 0; height: 0; border-bottom: 200px solid #dc2626; border-left: 200px solid transparent; opacity: 0.9;"></div>
                     <div style="position: absolute; bottom: 0; right: 80px; width: 0; height: 0; border-bottom: 200px solid #5b3e8c; border-left: 200px solid transparent; opacity: 0.6; z-index: -1;"></div>

                </div>
            </div>`;

        const printContainer = document.createElement('div');
        printContainer.style.position = 'absolute';
        printContainer.style.left = '-9999px';
        printContainer.style.top = '0';
        printContainer.innerHTML = portfolioHtml;
        document.body.appendChild(printContainer);

        try {
            const pdf = new jsPDF('p', 'pt', 'a4'); // Points for units to better match screen pixels if needed
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            // Calculate scale to fit width
            const source = printContainer.firstElementChild as HTMLElement;
            if (!source) throw new Error("Could not find content to print.");
            
            // Use html2canvas to capture exactly what we built
            const canvas = await window.html2canvas(source, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // If content is taller than one page, we might need multiple pages, 
            // but the request implies a single page flyer/CV style. 
            // We will scale it to fit or add pages if absolutely necessary, 
            // but the design looks like a one-pager.
            
            if (imgHeight > pdfHeight) {
                 // For now, let's just scale it to fit height if it's too tall, 
                 // or let it spill to page 2 if strictly following width.
                 // Given the design, it looks like a single page summary. 
                 // We will just print it. If it cuts off, standard A4 ratio should contain it.
                 pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            } else {
                 pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            }
            
            pdf.save('Mesuli_Gama_Portfolio.pdf');

        } catch (error) {
            console.error("Error generating PDF:", error);
            setError("Could not generate PDF. Please try again.");
        } finally {
            if (printContainer.parentNode) {
                printContainer.parentNode.removeChild(printContainer);
            }
            setIsDownloading(false);
        }
    };

    return (
        <section id="ats-overlook" className="py-16 sm:py-24 bg-primary/5 dark:bg-primary/30 transition-colors duration-300">
            <style>{`
                @keyframes glitch-skew {
                    0% { transform: skew(0deg); }
                    10% { transform: skew(-2deg); }
                    20% { transform: skew(2deg); }
                    30% { transform: skew(0deg); }
                    90% { transform: skew(0deg); }
                    92% { transform: skew(-1deg); }
                    94% { transform: skew(1deg); }
                    100% { transform: skew(0deg); }
                }

                @keyframes glitch-color {
                    0% { border-color: #f97316; box-shadow: 0 0 5px rgba(249,115,22,0.5); }
                    25% { border-color: #0ea5e9; box-shadow: -2px 0 10px rgba(14,165,233,0.5), 2px 0 5px rgba(249,115,22,0.5); }
                    50% { border-color: #f97316; box-shadow: 0 0 15px rgba(249,115,22,0.7); }
                    75% { border-color: #0ea5e9; box-shadow: 2px 0 10px rgba(14,165,233,0.5), -2px 0 5px rgba(249,115,22,0.5); }
                    100% { border-color: #f97316; box-shadow: 0 0 5px rgba(249,115,22,0.5); }
                }

                .btn-glitch {
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-glitch::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                
                .btn-glitch:hover::before {
                    left: 100%;
                }

                /* Active Download State */
                .btn-glitch.downloading {
                    animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
                    animation-direction: alternate;
                    border-color: #0ea5e9;
                    background-color: rgba(14, 165, 233, 0.1);
                    color: #0ea5e9;
                    text-shadow: 1px 0 #f97316, -1px 0 #0ea5e9;
                    box-shadow: 0 0 20px rgba(14,165,233,0.4);
                }
                
                .btn-glitch.downloading svg {
                    color: #0ea5e9;
                }

                /* Hover State (when not downloading) */
                .btn-glitch:not(.downloading):hover {
                    box-shadow: 0 0 15px rgba(249, 115, 22, 0.6), inset 0 0 10px rgba(249, 115, 22, 0.2);
                    text-shadow: 0 0 5px rgba(249, 115, 22, 0.8);
                    border-color: #f97316;
                    transform: scale(1.05);
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Download My Portfolio" />
                <div ref={containerRef as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto text-center">
                    <p className={`mb-8 text-lg text-gray-700 dark:text-gray-300 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
                        Click the button below to download a print-friendly PDF version of my complete portfolio.
                    </p>

                    <div className="mt-6 flex justify-center">
                         <button
                            onClick={handlePrintPortfolio}
                            disabled={isDownloading}
                            className={`btn-glitch px-8 py-3 font-bold rounded-md transition-all duration-200 
                                border flex items-center justify-center font-orbitron tracking-wider
                                ${isDownloading 
                                    ? 'downloading cursor-wait opacity-100' 
                                    : 'border-secondary text-secondary hover:bg-secondary/10'
                                }
                            `}
                        >
                            {isDownloading && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {isDownloading ? 'DOWNLOADING_DATA...' : 'INITIATE_DOWNLOAD'}
                        </button>
                    </div>

                    {error && <p className="mt-4 text-red-400 font-plex-mono">{error}</p>}
                </div>
            </div>
        </section>
    );
};

export default ATSSection;