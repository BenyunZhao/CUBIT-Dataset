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
            {["Home", "Dataset", "Tasks", "Evaluation", "Results", "Citation"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="p-2 text-slate-900 hover:text-blue-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="#dataset" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
              Download
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
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
                  <p className="text-3xl font-black tracking-tighter">12,000+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">HD Images</p>
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter">30,000+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Instances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview - Filling the "Empty" space with structured data */}
        <section id="dataset" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Overview</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
                From Visual Sensation<br/>to <span className="text-blue-600">Metric Perception</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                CUBIT introduces a high-resolution UAV-based benchmark (8K max resolution) designed to advance the field from pixel-level segmentation toward physically grounded defect modeling.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CUBIT-Det", val: "5,500+", unit: "Images", desc: "Detection Dataset" },
                { label: "CUBIT-InSeg", val: "6,996", unit: "Images", desc: "Segmentation Dataset" },
                { label: "Resolution", val: "8000px", unit: "Max", desc: "Professional Grade" },
                { label: "Baselines", val: "110+", unit: "Models", desc: "Extensive Benchmark" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">{stat.val}</span>
                    <span className="text-[10px] font-bold text-slate-400">{stat.unit}</span>
                  </div>
                  <p className="text-[9px] font-medium text-slate-400 mt-2 italic">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[16/10] bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl group">
              <Image src="/images/framework.png" alt="Framework" fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold tracking-tight">Key Innovation</h4>
                  <p className="text-xs text-blue-100">Metric-aware defect modeling for engineering standards.</p>
                </div>
              </div>
              <a href="#evaluation" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-colors">View Benchmark</a>
            </div>
          </div>
        </section>

        {/* Tasks Section - DOTA Inspired */}
        <section id="tasks" className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
              <div className="max-w-xl">
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Research Tasks</h2>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Dataset Benchmarks</h3>
              </div>
              <p className="text-slate-500 font-medium max-w-sm">We define three core challenges to bridge the gap between computer vision and civil engineering.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Defect Detection", 
                  code: "Task 1: CUBIT-Det", 
                  desc: "Robust localization and classification of cracks, spalling, and deterioration using high-resolution bounding boxes.",
                  metrics: ["mAP@0.5 (VOC)", "mAP@0.5:0.95 (COCO)"]
                },
                { 
                  title: "Instance Segmentation", 
                  code: "Task 2: CUBIT-InSeg", 
                  desc: "Pixel-level precise mask generation for individual defect instances, supporting complex geometric reconstruction.",
                  metrics: ["Mask mAP", "Boundary IoU"]
                },
                { 
                  title: "Physical Quantification", 
                  code: "Task 3: Metric-Quant", 
                  desc: "Transforming image masks into real-world physical metrics (e.g., crack width in mm) via GSD-calibrated modeling.",
                  metrics: ["MAE / RMSE", "Engineering Rating"]
                }
              ].map((task, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 font-black mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">{i+1}</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{task.title}</h4>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{task.code}</p>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">{task.desc}</p>
                  <div className="space-y-2 pt-6 border-t border-slate-50">
                    {task.metrics.map((m, j) => (
                      <div key={j} className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Section - Similar to DOTA */}
        <section id="evaluation" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4 space-y-10">
                <div className="sticky top-32">
                  <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Evaluation</h2>
                  <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">Rigorous Standards</h3>
                  <div className="space-y-4">
                    <p className="text-slate-500 font-medium">We adopt standardized evaluation protocols to ensure the scientific validity of the CUBIT benchmark.</p>
                    <ul className="space-y-4 pt-6">
                      {[
                        "Fixed Train/Val/Test Splits (70:10:20)",
                        "Standard MS COCO Evaluation Metrics",
                        "Cross-Domain Generalization Testing",
                        "Zero-Shot Real-World Validation"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-center text-xs font-bold text-slate-700">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-12">
                <div className="bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                      <h4 className="text-2xl font-black tracking-tight">CUBIT-Det Benchmark</h4>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest">30+ Baselines</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-8 mb-12">
                      <div>
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Split</p>
                        <p className="text-xl font-bold">3980 / 442 / 1105</p>
                        <p className="text-slate-500 text-[9px] mt-1 italic">Train / Val / Test</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Metrics</p>
                        <p className="text-xl font-bold">mAP@0.5 / mAP@0.5:0.95</p>
                        <p className="text-slate-500 text-[9px] mt-1 italic">VOC & COCO Protocol</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Hardware</p>
                        <p className="text-xl font-bold">NVIDIA RTX 3090</p>
                        <p className="text-slate-500 text-[9px] mt-1 italic">400 Epochs Training</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-8 font-medium">
                      Baseline models include the full YOLO series (v5 to v13), PP-YOLO variants, and Faster R-CNN. We analyze object distribution spatial awareness and generalization ability across diverse scenarios.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                      <h4 className="text-2xl font-black tracking-tight">CUBIT-InSeg Benchmark</h4>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-[9px] font-black uppercase tracking-widest">80+ Networks</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-8 mb-12">
                      <div>
                        <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-1">Families</p>
                        <p className="text-xl font-bold">17 Model Families</p>
                        <p className="text-blue-100/50 text-[9px] mt-1 italic">Conv & Transformer</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-1">Metrics</p>
                        <p className="text-xl font-bold">Mask & Box mAP</p>
                        <p className="text-blue-100/50 text-[9px] mt-1 italic">Pixel-level Accuracy</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-1">Hardware</p>
                        <p className="text-xl font-bold">Dual RTX 4090</p>
                        <p className="text-blue-100/50 text-[9px] mt-1 italic">Ubuntu 22.04 LTS</p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed border-t border-white/10 pt-8 font-medium">
                      Extensive evaluation covering Starnet, Swin-Transformer, ConvNeXtV2, and Mamba-YOLO. Establishes a foundational performance analysis for physically grounded defect assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section id="results" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">Quantitative<br/><span className="text-blue-600">Performance</span></h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">Direct visual evidence and statistical insights from the CUBIT benchmark evaluations.</p>
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
                    className="object-contain p-6 transition-transform duration-[1.5s] group-hover:scale-110"
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

        {/* Citation Section */}
        <section id="citation" className="py-40 bg-slate-950 rounded-t-[5rem] mx-4 sm:mx-8">
          <div className="max-w-5xl mx-auto px-8 sm:px-12">
            <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-20 text-center">Academic Attribution</h2>
            <div className="space-y-10">
              {[
                { 
                  label: "Automation in Construction (2024)", 
                  bib: `@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and others},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  doi={10.1016/j.autcon.2024.105405}
}` 
                },
                { 
                  label: "CUBIT-InSeg Preprint (2025)", 
                  bib: `@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and others},
  year={2025}
}` 
                }
              ].map((cite, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[3rem] p-12 relative group hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-center mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                      {cite.label}
                    </div>
                    <button className="text-white/20 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                    </button>
                  </div>
                  <pre className="text-slate-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">{cite.bib}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-48 text-center">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-10">The Team</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-20">Research Group @CUHK</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Benyun Zhao', 'Xunkuai Zhou', 'Guidong Yang', 'Jihan Zhang', 'Yijun Huang', 'Lei Lei', 'Xi Chen', 'Ben M. Chen'].map((name) => (
              <div key={name} className="px-8 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all font-bold text-slate-950 tracking-tight">
                {name}
              </div>
            ))}
        </div>
          <p className="mt-20 text-slate-400 font-medium">Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong.</p>
        </section>
      </main>

      <footer className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">C</div>
            <span>© 2026 CUBIT Research Group</span>
          </div>
          <div className="flex gap-16">
            <a href="https://github.com/hyjcde" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors font-black">CUHK.EDU.HK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
