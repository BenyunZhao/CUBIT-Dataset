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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Bar - Ultra Minimal */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-lg font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                {["Home", "Dataset", "Tasks", "Results", "Citation", "People"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="text-slate-900 hover:text-blue-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Refined Depth */}
        <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0 opacity-60">
            <Image
              src="/images/hero-bg.png"
              alt="CUBIT Dataset Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600/10 backdrop-blur-md border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                UAV-Based Metric Benchmark
              </div>
              <h1 className="text-7xl sm:text-[9.5rem] font-black text-white leading-[0.8] tracking-tighter mb-12 opacity-95">
                CUBIT<br/>
                <span className="text-blue-600">DATASET</span>
              </h1>
              <p className="text-xl sm:text-3xl text-slate-300 max-w-2xl leading-tight font-medium mb-16">
                Redefining infrastructure inspection with <span className="text-white">sub-millimeter</span> precision and geometric quantification.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <a href="#dataset" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">
                  Explore Benchmark
                </a>
                <div className="flex gap-10 border-l border-white/10 pl-10">
                  <div>
                    <p className="text-white text-3xl font-black tracking-tighter">10K+</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mt-1">4K Imagery</p>
                  </div>
                  <div>
                    <p className="text-white text-3xl font-black tracking-tighter">20K+</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Annotations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abstract - Centered & Powerful */}
        <section id="dataset" className="py-48 bg-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-8 sm:px-12 text-center">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-12">Introduction</h2>
            <p className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-16">
              Bridging the gap between <span className="text-slate-400 font-light italic">pixel-level vision</span> and physically grounded defect modeling.
            </p>
            <div className="grid sm:grid-cols-2 gap-12 text-left border-t border-slate-100 pt-16">
              <p className="text-slate-500 text-lg leading-relaxed">
                CUBIT is a high-resolution UAV-based façade defect dataset designed to move the field from 2D appearance cues to metric engineering assessment.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                By integrating camera intrinsics and GSD, it enables reliable quantification of indicators like crack width, propagation, and spalling volume.
              </p>
            </div>
          </div>
        </section>

        {/* Tasks Section - Clean Cards */}
        <section id="tasks" className="py-40 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Research<br/><span className="text-blue-600 italic font-light">Challenges</span></h2>
              <p className="text-slate-400 font-bold text-sm max-w-sm">Standardized tasks for evaluating both visual localization and physical metric precision.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                { 
                  id: "01", 
                  title: "Instance Segmentation", 
                  desc: "Precise pixel-level boundary localization for structural defects across building façades, bridges, and pavements.",
                  metric: "mean Average Precision (mAP)"
                },
                { 
                  id: "02", 
                  title: "Metric Quantification", 
                  desc: "Transforming image-based segments into real-world physical dimensions (mm, cm²) using GSD-aware modeling.",
                  metric: "Mean Absolute Error (MAE)"
                }
              ].map((task, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-12 group-hover:bg-blue-600 transition-colors">
                    {task.id}
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{task.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-lg mb-12">{task.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {task.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Gallery - Clean Aspect Ratio */}
        <section id="results" className="max-w-7xl mx-auto px-8 sm:px-12 py-48">
          <div className="text-center mb-32">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Visual Results</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Quantitative Benchmark</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {figures.map((fig, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square relative rounded-[2.5rem] overflow-hidden bg-slate-50 mb-10 transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-3">
                  <Image 
                    src={fig.src} 
                    alt={fig.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <a href={fig.link} target="_blank" className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </div>
                  </a>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{fig.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{fig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation - Modern Code Block */}
        <section id="citation" className="py-48 bg-slate-50 rounded-[5rem] mx-4 sm:mx-12">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 text-center">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-20">Citation</h2>
            <div className="space-y-12">
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
                <div key={i} className="bg-white border border-slate-200 rounded-[2.5rem] p-12 text-left relative group hover:shadow-xl transition-shadow">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {cite.label}
                  </div>
                  <pre className="text-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">{cite.bib}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Section - Ultra Clean List */}
        <section id="people" className="max-w-7xl mx-auto px-8 sm:px-12 py-48">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-10">The<br/>Research<br/>Team</h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-widest">
                Department of Mechanical and <br/>Automation Engineering, <br/>
                CUHK
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-16 gap-y-20">
              {[
                { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk", role: "Primary Investigator" },
                { name: "Xi Chen", email: "xichen002@cuhk.edu.hk", role: "Associate Professor" },
                { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk", role: "Professor" }
              ].map((person, i) => (
                <div key={i} className="group border-b border-slate-100 pb-10 hover:border-blue-600 transition-colors duration-500">
                  <h4 className="font-bold text-slate-900 text-2xl mb-2 group-hover:text-blue-600 transition-colors">{person.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{person.role}</p>
                  <a href={`mailto:${person.email}`} className="text-slate-900 font-bold text-sm underline decoration-slate-200 underline-offset-8 hover:decoration-blue-600 transition-all">{person.email}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-lg font-black tracking-tighter text-slate-900">CUBIT</div>
          <div className="flex gap-16 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors font-black">CUHK.EDU.HK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
