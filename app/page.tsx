import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Hierarchical Framework",
      src: "/images/framework.png",
      link: "/images/framework.pdf",
      description: "Comprehensive pipeline covering UAV data acquisition, multi-modal annotation, and metric assessment protocols.",
    },
    {
      title: "Network Analysis",
      src: "/images/network-attributed.png",
      link: "/images/network-attributed.png",
      description: "Evaluation of deep learning backbones on the CUBIT benchmark, analyzing accuracy and computational trade-offs.",
    },
    {
      title: "Dataset Distribution",
      src: "/images/distribution-dataset.png",
      link: "/images/distribution-dataset.pdf",
      description: "Instance-level analysis across defect categories and spatial scales, ensuring benchmark diversity.",
    },
    {
      title: "Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      link: "/images/highway_crackseg_param_AP.png",
      description: "Quantitative performance (AP) across different infrastructure scenarios and hyper-parameter configurations.",
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.png",
      link: "/images/radar-compare.pdf",
      description: "Performance visualization comparing the CUBIT method against state-of-the-art baseline models.",
    },
    {
      title: "Real-world Case Study",
      src: "/images/mawan.png",
      link: "/images/mawan.pdf",
      description: "Large-scale deployment visualization at the Mawan site, demonstrating model robustness in complex environments.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 transition-all">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-xl font-bold tracking-tight text-slate-900">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {["Home", "Dataset", "Tasks", "Results", "Citation", "People"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://github.com/hyjcde/cubit-dataset-page" target="_blank" className="text-slate-900 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Clean & Minimal */}
        <section id="home" className="relative min-h-[80vh] flex items-center bg-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="z-10 py-20">
              <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 tracking-tight mb-8">
                CUBIT <span className="text-blue-600 font-light">Dataset</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed font-normal mb-10 text-balance">
                A large-scale benchmark for infrastructure defect assessment and physical quantification based on high-resolution UAV imagery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#dataset" className="px-8 py-3 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-sm">
                  Explore Dataset
                </a>
                <a href="#citation" className="px-8 py-3 bg-white text-slate-600 rounded-full text-sm font-semibold border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-all">
                  Cite the Work
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white">
              <Image
                src="/images/hero-bg.png"
                alt="CUBIT Samples"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats - Light Cards */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "10K+", lab: "Images" },
              { val: "20K+", lab: "Instances" },
              { val: "4K+", lab: "Resolution" },
              { val: "3", lab: "Scenarios" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">{stat.val}</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{stat.lab}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Abstract / Intro */}
        <section id="dataset" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Introduction</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              CUBIT advances automated infrastructure inspection by providing the necessary <strong>metric and geometric information</strong> for physical modeling.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our dataset moves beyond traditional 2D appearance cues, enabling reliable quantification of severity indicators such as crack width, propagation, and spalling volume.
            </p>
          </div>
        </section>

        {/* Tasks - Subtle Layout */}
        <section id="tasks" className="bg-slate-50 py-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-16">Research Tasks</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-900">Instance Segmentation</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Pixel-level classification and instance separation for structural defects like cracks and concrete spalling.</p>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-200">Metric: mAP</div>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-900">Metric Quantification</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Calculating real-world dimensions (mm, cm²) of defects using Ground Sample Distance and camera parameters.</p>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-200">Metric: MAE / RMSE</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results - Clean Grid */}
        <section id="results" className="max-w-6xl mx-auto px-6 sm:px-8 py-32">
          <h2 className="text-2xl font-bold text-slate-900 mb-16">Scientific Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {figures.map((fig, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-slate-100 mb-6 transition-all group-hover:shadow-lg">
                  <Image 
                    src={fig.src} 
                    alt={fig.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <a href={fig.link} target="_blank" className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">View Full PDF</span>
                  </a>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{fig.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{fig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation - Minimalist Mono */}
        <section id="citation" className="max-w-6xl mx-auto px-6 sm:px-8 py-32 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-16">BibTeX Citation</h2>
          <div className="space-y-12">
            {[
              { label: "Automation in Construction (2024)", bib: `@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong and Wen, Junjie and Zhang, Jihan and Dou, Jia and Li, Guang and Chen, Xi and Chen, Ben M.},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  doi={10.1016/j.autcon.2024.105405}
}` },
              { label: "Preprint (2025)", bib: `@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and Yang, Guidong and Huang, Yijun and Lei, Lei and Chen, Xi and Chen, Ben M.},
  year={2025}
}` }
            ].map((cite, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{cite.label}</div>
                <pre className="text-slate-600 text-xs sm:text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">{cite.bib}</pre>
              </div>
            ))}
          </div>
        </section>

        {/* People - Simple List */}
        <section id="people" className="max-w-6xl mx-auto px-6 sm:px-8 py-32 border-t border-slate-100 mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-16">The Team</h2>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              { name: "Benyun Zhao", email: "benyunzhao@cuhk.edu.hk", role: "CUHK" },
              { name: "Xi Chen", email: "xichen002@cuhk.edu.hk", role: "CUHK" },
              { name: "Ben M. Chen", email: "bmchen@cuhk.edu.hk", role: "CUHK" }
            ].map((person, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold text-slate-900 text-lg">{person.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{person.role}</p>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer">{person.email}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2026 CUBIT TEAM</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="https://www.cuhk.edu.hk" className="hover:text-blue-600">CUHK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
