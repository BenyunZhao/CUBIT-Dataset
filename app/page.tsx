import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Hierarchical Framework",
      src: "/images/framework.png",
      link: "/images/framework.pdf",
      description: "End-to-end pipeline from high-resolution UAV sourcing to physical quantification.",
    },
    {
      title: "Network Performance",
      src: "/images/network-attributed.png",
      link: "/images/network-attributed.png",
      description: "Attributed analysis of deep learning backbones on the CUBIT benchmark.",
    },
    {
      title: "Dataset Distribution",
      src: "/images/distribution-dataset.png",
      link: "/images/distribution-dataset.pdf",
      description: "Balanced instance distribution across diverse infrastructure categories.",
    },
    {
      title: "Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      link: "/images/highway_crackseg_param_AP.png",
      description: "Hyper-parameter influence on segmentation accuracy across scenarios.",
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.png",
      link: "/images/radar-compare.pdf",
      description: "Radar visualization of engineering metric superiority against baselines.",
    },
    {
      title: "Mawan Site Application",
      src: "/images/mawan.png",
      link: "/images/mawan.pdf",
      description: "Real-world site assessment demonstrating model robustness and scalability.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation Bar - Transparent to Blurred White */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {["Home", "Dataset", "Tasks", "Results", "Citation", "People"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-blue-600 text-sm font-semibold transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Balanced Background Design */}
        <section id="home" className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="CUBIT Dataset Background"
              fill
              className="object-cover transition-transform duration-[10s] hover:scale-105"
              priority
            />
            {/* Sophisticated Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Large-Scale Infrastructure Benchmark
              </div>
              <h1 className="text-6xl sm:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl opacity-95">
                CUBIT <br/>
                <span className="text-blue-500 font-medium">Dataset</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200/90 max-w-2xl leading-relaxed font-medium mb-12 drop-shadow-lg">
                Advancing infrastructure assessment through <span className="text-white border-b-2 border-blue-500 pb-1">high-resolution UAV imagery</span> and physical quantification.
              </p>
              <div className="flex items-center gap-10">
                <a href="#dataset" className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95">
                  Explore Dataset
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <div className="hidden sm:flex gap-8 border-l border-white/20 pl-8">
                  <div>
                    <p className="text-white text-2xl font-bold tracking-tight">10K+</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Images</p>
                  </div>
                  <div>
                    <p className="text-white text-2xl font-bold tracking-tight">20K+</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Instances</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="dataset" className="max-w-7xl mx-auto px-6 sm:px-10 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                From Visual Detection <br/>
                <span className="text-blue-600 font-light italic text-3xl">to Physical Modelling</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed">
                CUBIT provides the first high-resolution benchmark that bridges the gap between pixel-level segmentation and physically meaningful quantification for building façades, bridges, and pavements.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { title: "Metric Accuracy", desc: "Sub-millimeter precision for crack width." },
                  { title: "Diverse Scales", desc: "Defects from <10px to structural scale." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <Image src="/images/hero-bg.png" alt="Dataset Visualization" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-[0.2em]">CUBIT-InSeg Sample Batch</div>
            </div>
          </div>
        </section>

        {/* Tasks Section - Modernized */}
        <section id="tasks" className="bg-slate-50 py-32 rounded-[4rem] mx-4 sm:mx-10 border border-slate-100 shadow-inner">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-24">
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Benchmarks</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tighter">Core Research Challenges</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {[
                { 
                  id: "01", 
                  title: "Defect Instance Segmentation", 
                  desc: "Pixel-level classification and separation for structural defects including cracks, spalling, and efflorescence.",
                  metric: "Metric: mAP @ IoU [0.5:0.95]"
                },
                { 
                  id: "02", 
                  title: "Metric Physical Quantification", 
                  desc: "Extracting severity indicators (mm, cm²) by mapping 2D pixel clusters into 3D metric space using GSD.",
                  metric: "Metric: MAE / RMSE (mm)"
                }
              ].map((task, i) => (
                <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500">{task.id}</div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                      {i === 0 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                      )}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{task.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium mb-10">{task.desc}</p>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest py-3 border-t border-slate-50">
                    {task.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Gallery - High Quality Previews */}
        <section id="results" className="max-w-7xl mx-auto px-6 sm:px-10 py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Scientific Results</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tighter leading-none mb-6">
                Quantitative <br/> Insights
              </h3>
              <p className="text-slate-500 text-lg">Key visualizations and statistical benchmarks from our peer-reviewed research.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {figures.map((fig, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden bg-slate-50 mb-8 border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image 
                    src={fig.src} 
                    alt={fig.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                  <a href={fig.link} target="_blank" className="absolute bottom-6 right-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:bg-blue-600 hover:text-white translate-y-2 group-hover:translate-y-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{fig.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{fig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation Section - Elegant Slate */}
        <section id="citation" className="py-40 bg-slate-950 text-white relative">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 relative z-10">
            <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em] mb-16 text-center">Standardized Attribution</h2>
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
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 px-6 py-2 bg-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {cite.label}
                  </div>
                  <pre className="text-slate-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed pt-4">{cite.bib}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="people" className="max-w-7xl mx-auto px-6 sm:px-10 py-40 border-t border-slate-100">
          <div className="grid lg:grid-cols-3 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tighter mb-6">The Research <br/>Team</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Department of Mechanical and Automation Engineering, <br/>
                The Chinese University of Hong Kong.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-12">
              {[
                { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk" },
                { name: "Xi Chen", email: "xichen002@cuhk.edu.hk" },
                { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk" }
              ].map((person, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden mb-6 border border-slate-100 relative group-hover:border-blue-100 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-200 group-hover:text-blue-100 transition-colors uppercase tracking-tighter">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{person.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">CUHK Research</p>
                  <p className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors">{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">C</div>
            <span>© 2026 CUBIT Research Group</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors">CUHK Home</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
