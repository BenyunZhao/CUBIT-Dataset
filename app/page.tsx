import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Hierarchical Framework",
      src: "/images/framework.png",
      link: "/images/framework.pdf",
      description: "The end-to-end pipeline of the CUBIT-InSeg dataset, covering data acquisition, multi-modal annotation, and metric assessment protocols.",
    },
    {
      title: "Network Performance Analysis",
      src: "/images/network-attributed.png",
      link: "/images/network-attributed.png",
      description: "Comprehensive evaluation of various deep learning backbones on the CUBIT benchmark, highlighting the trade-off between accuracy and computational efficiency.",
    },
    {
      title: "Distribution Statistics",
      src: "/images/distribution-dataset.png",
      link: "/images/distribution-dataset.pdf",
      description: "Instance-level distribution analysis across categories (Cracks vs Spalling) and spatial scales, ensuring dataset diversity and balance.",
    },
    {
      title: "Crack Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      link: "/images/highway_crackseg_param_AP.png",
      description: "Quantitative analysis of segmentation performance (AP) across different highway infrastructure scenarios and hyper-parameter configurations.",
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.png",
      link: "/images/radar-compare.pdf",
      description: "Radar chart visualizing the CUBIT method's superiority across multiple engineering metrics compared to baseline models.",
    },
    {
      title: "Real-world Case Study",
      src: "/images/mawan.png",
      link: "/images/mawan.pdf",
      description: "Large-scale deployment at the Mawan site, demonstrating the robustness of CUBIT-trained models in complex real-world environments.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50">
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
                    className="text-slate-500 hover:text-blue-600 px-1 py-2 text-xs font-bold uppercase tracking-widest transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-100 transition-all active:scale-95 flex items-center gap-2">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="CUBIT Dataset Background"
              fill
              className="object-cover scale-100"
              priority
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl shadow-blue-600/20">
              New Publication 2026
            </div>
            <h1 className="text-6xl sm:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl opacity-95">
              CUBIT<br/>
              <span className="text-blue-500">DATASET</span>
            </h1>
            <p className="text-xl sm:text-3xl text-slate-200 max-w-3xl leading-snug font-medium drop-shadow-lg">
              Precision Infrastructure Assessment through <span className="text-blue-400 font-bold">Metric-Ground</span> UAV Intelligence.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
          {/* News Banner */}
          <div className="bg-white rounded-3xl p-10 mb-32 shadow-2xl shadow-slate-200/50 border border-slate-100 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[10px] font-black text-blue-600 mb-6 flex items-center gap-3 uppercase tracking-[0.4em]">
                Latest Milestone
              </h2>
              <p className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                CUBIT-Det paper published in Automation in Construction.
              </p>
              <a href="https://doi.org/10.1016/j.autcon.2024.105405" target="_blank" className="inline-flex items-center text-[10px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-700 transition-colors">
                Read Publication <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 border-l border-slate-100 pl-12 hidden md:grid">
              <div>
                <span className="text-4xl font-black text-slate-900">10K+</span>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">High-Res Images</p>
              </div>
              <div>
                <span className="text-4xl font-black text-blue-600">20K+</span>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Defect Instances</p>
              </div>
            </div>
          </div>

          {/* Key Value Prop */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Visualizing <br/>
                <span className="text-blue-600 italic">Physical Gravity</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                CUBIT provides the industry's first physically grounded benchmark for infrastructure inspection, integrating camera intrinsics and GSD to enable sub-millimeter quantification.
              </p>
              <div className="flex gap-10">
                {["Building", "Pavement", "Bridge"].map(cat => (
                  <div key={cat} className="px-6 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100">{cat}</div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square bg-slate-100 rounded-[4rem] overflow-hidden shadow-inner group">
              <Image src="/images/hero-bg.png" alt="Dataset Sample" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
            </div>
          </div>
        </section>

        {/* Tasks - DOTA Style but cleaner */}
        <section id="tasks" className="py-40 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-xs font-black text-blue-600 mb-6 uppercase tracking-[0.5em]">Benchmark Tasks</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Defined Research Challenges</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[3rem] p-12 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-10 shadow-xl">01</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">Defect Instance Segmentation</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-10">Pixel-level classification and boundary localization for structural defects including cracks, spalling, and rebar exposure.</p>
                <div className="bg-slate-50 rounded-2xl p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Metric: mean Average Precision (mAP)
                </div>
              </div>
              <div className="bg-white rounded-[3rem] p-12 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-10 shadow-xl">02</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">Physical Metric Quantification</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-10">Extraction of physically meaningful severity indicators (width, area, volume) by mapping 2D pixels to 3D metric space.</p>
                <div className="bg-slate-50 rounded-2xl p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Metric: MAE / RMSE / Absolute Accuracy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery - NO PLACEHOLDERS */}
        <section id="results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="text-center mb-32">
            <h2 className="text-xs font-black text-blue-600 mb-6 uppercase tracking-[0.5em]">Scientific Results</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Quantitative Insights</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {figures.map((fig, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image 
                    src={fig.src} 
                    alt={fig.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
                  <a href={fig.link} target="_blank" className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:bg-blue-600 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{fig.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{fig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation */}
        <section id="citation" className="py-40 bg-slate-950 text-white rounded-t-[5rem]">
          <div className="max-w-5xl mx-auto px-8 sm:px-12">
            <h2 className="text-xs font-black text-blue-400 mb-12 uppercase tracking-[0.5em] text-center">Citation</h2>
            <div className="space-y-12">
              {[
                { label: "Automation in Construction (2024)", bib: `@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong and Wen, Junjie and Zhang, Jihan and Dou, Jia and Li, Guang and Chen, Xi and Chen, Ben M.},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.autcon.2024.105405}
}` },
                { label: "CUBIT-InSeg Preprint (2025)", bib: `@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and Yang, Guidong and Huang, Yijun and Lei, Lei and Chen, Xi and Chen, Ben M.},
  year={2025},
  note={Preprint}
}` }
              ].map((cite, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative group">
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6">{cite.label}</div>
                  <pre className="text-slate-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{cite.bib}</pre>
                  <button className="absolute top-10 right-10 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Copy BibTeX</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People */}
        <section id="people" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-xs font-black text-blue-600 mb-6 uppercase tracking-[0.5em]">Our Team</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 italic leading-[0.9]">Engineering <br/>Excellence @CUHK</h3>
              <p className="text-slate-500 font-medium">Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
              {[
                { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk" },
                { name: "Xi Chen", email: "xichen002@cuhk.edu.hk" },
                { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk" }
              ].map((person, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-slate-300 uppercase tracking-widest">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h4 className="font-black text-slate-900 tracking-tight">{person.name}</h4>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest underline decoration-blue-600/20">{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm">C</div>
            <span className="text-xl font-black tracking-tighter">CUBIT</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="https://www.cuhk.edu.hk" className="hover:text-blue-600">CUHK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
