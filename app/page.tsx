import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Hierarchical Framework",
      src: "/images/framework.png",
      link: "/images/framework.pdf",
      description: "A multi-layered pipeline detailing the flow from raw high-resolution UAV sourcing to final physical quantification metrics.",
    },
    {
      title: "Network Performance",
      src: "/images/network-attributed.png",
      link: "/images/network-attributed.png",
      description: "In-depth attribution analysis of various deep learning backbones, evaluating accuracy versus latency on infrastructure defects.",
    },
    {
      title: "Dataset Distribution",
      src: "/images/distribution-dataset.png",
      link: "/images/distribution-dataset.pdf",
      description: "Class-wise and scale-wise distribution mapping, showcasing the diversity across building, pavement, and bridge scenarios.",
    },
    {
      title: "Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      link: "/images/highway_crackseg_param_AP.png",
      description: "Quantitative metrics (AP) showing the robustness of our segmentation model across varied hyper-parameter settings.",
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.png",
      link: "/images/radar-compare.pdf",
      description: "Radar analysis comparing our proposed CUBIT benchmark results against current state-of-the-art infrastructure inspection models.",
    },
    {
      title: "Mawan Site Application",
      src: "/images/mawan.png",
      link: "/images/mawan.pdf",
      description: "Real-world visualization from the Mawan site assessment, demonstrating the practical scalability of our physically grounded models.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter">CUBIT</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Dataset", "Tasks", "Results", "Citation", "People"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors">{item}</a>
            ))}
          </div>
          <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="p-2 text-slate-900 hover:text-blue-600 transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero - Sophisticated Background Design */}
        <section id="home" className="relative h-[85vh] min-h-[750px] flex items-center bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-50 transition-transform duration-[20s] hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-20">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600/20 backdrop-blur border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              Metric-Based Research Dataset
            </div>
            <h1 className="text-6xl sm:text-9xl font-black text-white leading-none tracking-tighter mb-10">
              CUBIT<br/>
              <span className="text-blue-600">DATASET</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium mb-12">
              A Large-Scale Benchmark for Infrastructure Defect Assessment and <span className="text-white border-b-2 border-blue-600 pb-1">Physical Quantification</span>.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#dataset" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">Explore Results</a>
              <div className="flex gap-8 border-l border-white/10 pl-8 text-white">
                <div>
                  <p className="text-3xl font-black tracking-tighter">10K+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Samples</p>
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter">20K+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Instances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Content - No more "Empty" feeling */}
        <section id="dataset" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Overview</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
                Beyond Visual<br/>Identification
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                CUBIT advances the field from pixel-level segmentation toward physically grounded modeling. We provide the first benchmark that explicitly links visual appearance to metric engineering assessments.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Metric Sourcing", desc: "High-resolution imagery with calibrated GSD." },
                { title: "Multi-Scenario", desc: "Covering building façades, bridges, and pavements." },
                { title: "Engineering Std.", desc: "Aligned with maintenance prioritization protocols." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 font-black shrink-0 shadow-sm">{i+1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative aspect-video bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl group">
              <Image src="/images/hero-bg.png" alt="Data Sample" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px]"></div>
              <div className="relative z-10">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">CUBIT-InSeg Summary</p>
                <p className="text-2xl font-bold tracking-tight">6,996 HD Images with Instance Masks</p>
              </div>
              <div className="text-right relative z-10">
                <span className="text-4xl font-black text-white">4K</span>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Resolution</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks - Dark Modern Section */}
        <section id="tasks" className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-24">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Benchmarks</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Research Challenges</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {[
                { 
                  id: "Vision", 
                  title: "Instance Segmentation", 
                  desc: "Accurate pixel-level boundary localization for complex structural defects.",
                  metric: "Metric: mAP @ IoU [0.5:0.95]",
                  color: "bg-blue-600"
                },
                { 
                  id: "Metric", 
                  title: "Physical Quantification", 
                  desc: "Transforming 2D pixels into 3D metric dimensions (mm, cm²) for assessment.",
                  metric: "Metric: MAE / RMSE (Metric Units)",
                  color: "bg-slate-900"
                }
              ].map((task, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-4 py-1.5 ${task.color} text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-8`}>{task.id}</span>
                    <h4 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{task.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium mb-12">{task.desc}</p>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pt-8 border-t border-slate-50">
                    {task.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results - Rich Gallery */}
        <section id="results" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">Scientific<br/><span className="text-blue-600 italic font-light">Insights</span></h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">Direct visual evidence and quantitative results from the CUBIT benchmark establishment.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {figures.map((fig, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden bg-slate-50 mb-8 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-3">
                  <Image 
                    src={fig.src} 
                    alt={fig.title} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{fig.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">{fig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation - Textured Box */}
        <section id="citation" className="py-40 bg-slate-950 rounded-t-[5rem] mx-4 sm:mx-8">
          <div className="max-w-5xl mx-auto px-8 sm:px-12">
            <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-20 text-center">Academic Attribution</h2>
            <div className="space-y-10">
              {[
                { label: "Automation in Construction (2024)", bib: `@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and others},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  doi={10.1016/j.autcon.2024.105405}
}` },
                { label: "CUBIT-InSeg Preprint (2025)", bib: `@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and others},
  year={2025}
}` }
              ].map((cite, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[3rem] p-12 relative group hover:bg-white/10 transition-all">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-8">
                    {cite.label}
                  </div>
                  <pre className="text-slate-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">{cite.bib}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - Clean Horizontal Grid */}
        <section id="people" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-48">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-10">The Team</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">Research<br/>Engineering<br/>@CUHK</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong.</p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk", role: "Primary Investigator", initials: "BZ" },
                { name: "Xi Chen", email: "xichen002@cuhk.edu.hk", role: "Associate Professor", initials: "XC" },
                { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk", role: "Professor", initials: "BC" }
              ].map((person, i) => (
                <div key={i} className="group border-l-4 border-slate-100 pl-10 hover:border-blue-600 transition-all duration-500">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 font-black text-sm mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">{person.initials}</div>
                  <h4 className="font-bold text-slate-900 text-2xl mb-2">{person.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{person.role}</p>
                  <a href={`mailto:${person.email}`} className="text-slate-900 font-bold text-sm underline decoration-slate-200 underline-offset-8 hover:decoration-blue-600 transition-all">{person.email}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">C</div>
            <span>© 2026 CUBIT Research Group</span>
          </div>
          <div className="flex gap-16">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors font-black">CUHK.EDU.HK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
