import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Network Performance Analysis",
      src: "/images/network-attributed.png",
      description: "Comprehensive evaluation of various deep learning backbones on the CUBIT benchmark, highlighting the trade-off between accuracy and computational efficiency.",
      type: "png"
    },
    {
      title: "Crack Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      description: "Quantitative analysis of segmentation performance (AP) across different highway infrastructure scenarios and hyper-parameter configurations.",
      type: "png"
    },
    {
      title: "Hierarchical Framework",
      src: "/images/framework.pdf",
      description: "The end-to-end pipeline of the CUBIT-InSeg dataset, covering data acquisition, multi-modal annotation, and metric assessment protocols.",
      type: "pdf"
    },
    {
      title: "Distribution Statistics",
      src: "/images/distribution-dataset.pdf",
      description: "Instance-level distribution analysis across categories (Cracks vs Spalling) and spatial scales, ensuring dataset diversity and balance.",
      type: "pdf"
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.pdf",
      description: "Radar chart visualizing the CUBIT method's superiority across multiple engineering metrics compared to baseline models.",
      type: "pdf"
    },
    {
      title: "Real-world Case Study",
      src: "/images/mawan.pdf",
      description: "Large-scale deployment at the Mawan site, demonstrating the robustness of CUBIT-trained models in complex real-world environments.",
      type: "pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">C</div>
              <span className="text-2xl font-black tracking-tighter text-slate-800">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {["Home", "Dataset", "Tasks", "Results", "Citation", "People"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-blue-600 px-1 py-2 text-sm font-bold tracking-tight transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-100 transition-all active:scale-95 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="CUBIT Dataset Background"
              fill
              className="object-cover scale-105"
              priority
            />
            {/* Multi-layered Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8fafc]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full translate-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-100 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Research Benchmark 2026
            </div>
            <h1 className="text-6xl sm:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl opacity-90">
              CUBIT<br/>
              <span className="text-blue-500 underline decoration-blue-500/30">DATASET</span>
            </h1>
            <p className="text-xl sm:text-3xl text-slate-200 max-w-3xl leading-snug font-medium drop-shadow-lg">
              Advanced Infrastructure Defect Assessment through <span className="text-blue-400">High-Resolution UAV Imaging</span> and Physical Metric Quantification.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
          {/* News Section */}
          <div className="bg-white rounded-[3rem] p-10 mb-24 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -mr-48 -mt-48 opacity-60"></div>
            <h2 className="text-xs font-black text-blue-600 mb-8 flex items-center gap-3 uppercase tracking-[0.4em]">
              Latest Research Updates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { date: "2024-05-13", content: "CUBIT-Det (AIC) officially published in Automation in Construction.", link: "https://doi.org/10.1016/j.autcon.2024.105405" },
                { date: "2024-01-05", content: "CUBIT-Inseg dataset release: Specialized for physically grounded defect assessment.", link: "#" }
              ].map((news, i) => (
                <div key={i} className="group flex gap-6 items-start bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-500">
                  <div className="font-mono text-[10px] font-black text-blue-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-blue-50 shrink-0 group-hover:scale-110 transition-transform">
                    {news.date}
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-700 font-bold leading-tight group-hover:text-slate-900 transition-colors">
                      {news.content}
                    </p>
                    {news.link !== "#" && (
                      <a href={news.link} target="_blank" className="inline-flex items-center text-[10px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-700 transition-colors">
                        View Publication <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intro & Stats */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
            <div className="lg:col-span-7 space-y-10">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
                Bridging Visual Intelligence <br/>
                <span className="text-blue-600 italic">& Physical Engineering</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                CUBIT is not just another detection dataset. It is a meticulously curated benchmark that empowers AI to understand the <strong>true physical scale</strong> of structural damage, moving beyond 2D boxes into the realm of metric quantification.
              </p>
              <div className="flex gap-12 border-t border-slate-100 pt-10">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-slate-900">4K+</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Imagery Standard</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-blue-600">RTK</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Positional Accuracy</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-indigo-600">Sub-mm</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Defect Resolution</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {[
                { val: "10K+", lab: "Images", bg: "bg-white" },
                { val: "20K+", lab: "Instances", bg: "bg-blue-600 text-white" },
                { val: "0.1mm", lab: "Precision", bg: "bg-white" },
                { val: "3", lab: "Scenarios", bg: "bg-slate-900 text-white shadow-xl shadow-slate-200" }
              ].map((stat, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center transition-all hover:-translate-y-2 hover:shadow-xl ${stat.bg}`}>
                  <h3 className="text-4xl font-black tracking-tighter mb-1">{stat.val}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{stat.lab}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tasks Section */}
        <section id="tasks" className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 sm:mx-8 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">
            <h2 className="text-xs font-black text-blue-400 mb-16 uppercase tracking-[0.5em] text-center">Benchmark Tasks</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Task 1 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 group hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-2xl font-black shadow-2xl shadow-blue-600/40">01</div>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest border border-blue-400/30 px-4 py-1.5 rounded-full">Instance Vision</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">Instance Segmentation</h3>
                <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                  Achieving pixel-level localization for complex defects including Surface Cracks, Concrete Spalling, and Rebar Exposure.
                </p>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 aspect-video relative group-hover:scale-[1.02] transition-transform duration-700">
                  <Image src="/images/hero-bg.png" alt="Task 1 Example" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-white/80">CUBIT-InSeg Samples</span>
                </div>
              </div>

              {/* Task 2 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 group hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center text-2xl font-black shadow-2xl shadow-indigo-600/40">02</div>
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border border-indigo-400/30 px-4 py-1.5 rounded-full">Metric Intelligence</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">Physical Metric Quantification</h3>
                <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                  Determining the real-world scale of defects using camera calibration and Ground Sample Distance (GSD) for engineering assessment.
                </p>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 aspect-video relative group-hover:scale-[1.02] transition-transform duration-700">
                  <Image src="/images/network-attributed.png" alt="Task 2 Example" fill className="object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-white/80">Performance Attribution Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section id="results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">Scientific <span className="text-blue-600 italic">Insights</span></h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Peer-reviewed results and visualizations extracted directly from the CUBIT-Det and CUBIT-InSeg research papers.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"><svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div>
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {figures.map((fig, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="aspect-[4/3] relative bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-50">
                  {fig.type === "png" ? (
                    <img 
                      src={fig.src} 
                      alt={fig.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-6 p-12 transition-all group-hover:scale-105">
                      <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-slate-200 group-hover:bg-blue-600 transition-colors">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      </div>
                      <a href={fig.src} target="_blank" className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 hover:text-slate-900 transition-colors underline decoration-2 underline-offset-4">
                        Download PDF Figure
                      </a>
                    </div>
                  )}
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{fig.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{fig.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Citation & Team */}
        <div className="bg-white rounded-t-[5rem] border-t border-slate-100 mt-20 pt-32 pb-20">
          <section id="citation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">Cite <span className="text-blue-600 italic">CUBIT</span></h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Standardized Academic Attribution</p>
            </div>
            
            <div className="grid gap-8">
              {[
                { journal: "Automation in Construction (2024)", color: "blue", bib: `@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong and Wen, Junjie and Zhang, Jihan and Dou, Jia and Li, Guang and Chen, Xi and Chen, Ben M.},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.autcon.2024.105405}
}` },
                { journal: "Preprint (2025)", color: "indigo", bib: `@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and Yang, Guidong and Huang, Yijun and Lei, Lei and Chen, Xi and Chen, Ben M.},
  year={2025},
  note={Preprint}
}` }
              ].map((cite, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-slate-900 rounded-[3rem] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                  <div className="relative bg-white border-4 border-slate-900 rounded-[3rem] p-10 sm:p-16 overflow-hidden">
                    <div className={`absolute top-0 right-0 px-8 py-3 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-bl-[2rem]`}>
                      {cite.journal}
                    </div>
                    <pre className="text-slate-600 text-xs sm:text-base font-mono leading-relaxed whitespace-pre-wrap">
                      {cite.bib}
                    </pre>
                    <button className="mt-8 px-8 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                      Copy BibTeX
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="people" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-[4rem] p-16 sm:p-24 border border-slate-100 relative overflow-hidden text-center">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-40"></div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-8">CUHK Research Team</h2>
              <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-lg font-medium">
                Developed at the Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk", role: "Primary Investigator" },
                  { name: "Xi Chen", email: "xichen002@cuhk.edu.hk", role: "Associate Professor" },
                  { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk", role: "Professor" }
                ].map((person, i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                    <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-2xl font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="font-black text-slate-900 text-xl mb-2">{person.name}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">{person.role}</p>
                    <p className="text-xs text-blue-500 font-bold underline decoration-blue-500/20">{person.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm">C</div>
                <span className="text-xl font-black tracking-tighter">CUBIT</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2026 CUBIT Research Team. HK SAR.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors">CUHK.EDU.HK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
