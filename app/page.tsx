import Image from "next/image";

export default function Home() {
  const figures = [
    {
      title: "Network Performance Analysis",
      src: "/images/network-attributed.png",
      description: "Comparison of different network backbones and their attributed performance on defect localization within the CUBIT dataset.",
      type: "png"
    },
    {
      title: "Crack Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      description: "Analysis of average precision (AP) and hyper-parameter influence on crack segmentation for highway infrastructure inspection.",
      type: "png"
    },
    {
      title: "CUBIT-InSeg Framework",
      src: "/images/framework.pdf",
      description: "The hierarchical framework of the CUBIT-InSeg dataset, illustrating the pipeline from UAV data collection to physical quantification.",
      type: "pdf"
    },
    {
      title: "Dataset Distribution",
      src: "/images/distribution-dataset.pdf",
      description: "Statistical distribution of defect instances across different categories and scales in the CUBIT-InSeg benchmark.",
      type: "pdf"
    },
    {
      title: "Radar Comparison",
      src: "/images/radar-compare.pdf",
      description: "Multi-dimensional performance comparison between the proposed method and state-of-the-art models on various metrics.",
      type: "pdf"
    },
    {
      title: "Case Study: Mawan Site",
      src: "/images/mawan.pdf",
      description: "Real-world application results and visualization of defect assessment at the Mawan infrastructure site.",
      type: "pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-blue-600">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">Home</a>
                <a href="#dataset" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">Dataset</a>
                <a href="#tasks" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">Tasks</a>
                <a href="#results" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">Results</a>
                <a href="#citation" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">Citation</a>
                <a href="#people" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-gray-600">People</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/hyjcde/cubit-dataset-page" className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm">
                Code
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section with Background Image */}
        <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="CUBIT Dataset Background"
              fill
              className="object-cover"
              priority
            />
            {/* Professional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-white"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-8xl font-extrabold text-white mb-8 tracking-tighter drop-shadow-2xl">
              CUBIT Dataset
            </h1>
            <p className="text-xl sm:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
              A Large-Scale Benchmark for Infrastructure Defect Assessment and <span className="text-blue-400 font-semibold underline decoration-2 underline-offset-8">Physical Quantification</span>
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          {/* News Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 mb-20 shadow-xl">
            <h2 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              News & Updates
            </h2>
            <div className="grid gap-4">
              <div className="flex gap-6 items-start bg-blue-50/30 p-4 rounded-2xl border border-blue-50">
                <span className="font-mono text-sm font-bold text-blue-600 bg-white px-3 py-1 rounded-lg shrink-0 shadow-sm border border-blue-100">2024-05-13</span>
                <p className="text-gray-700 text-sm sm:text-base">
                  The CUBIT-Det (AIC) paper is officially published in <strong className="text-gray-900">Automation in Construction</strong>. 
                  <a href="https://doi.org/10.1016/j.autcon.2024.105405" className="ml-2 text-blue-600 hover:underline">View DOI →</a>
                </p>
              </div>
              <div className="flex gap-6 items-start bg-blue-50/30 p-4 rounded-2xl border border-blue-50">
                <span className="font-mono text-sm font-bold text-blue-600 bg-white px-3 py-1 rounded-lg shrink-0 shadow-sm border border-blue-100">2024-01-05</span>
                <p className="text-gray-700 text-sm sm:text-base">
                  CUBIT-Inseg dataset release: High-resolution UAV images for physically grounded defect modeling.
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Introduction</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                CUBIT is a comprehensive benchmark designed to advance the field of automated infrastructure inspection. Unlike traditional datasets that focus solely on 2D localization, CUBIT emphasizes the <strong>metric and geometric information</strong> required for physical modeling.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">High-Resolution Sourcing</h4>
                    <p className="text-gray-500 text-sm">Imagery collected via specialized UAV platforms ensuring sub-millimeter precision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-100 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Physical Quantification</h4>
                    <p className="text-gray-500 text-sm">Moving beyond segmentation to calculate crack width, spalling volume, and propagation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner group hover:bg-blue-50 transition-colors">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">10K+</h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-blue-400">High-Res Images</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner group hover:bg-indigo-50 transition-colors">
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">20K+</h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-indigo-400">Annotated Instances</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner group hover:bg-emerald-50 transition-colors">
                <h3 className="text-3xl font-bold text-emerald-600 mb-2">4K</h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-emerald-400">Imagery Std.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner group hover:bg-amber-50 transition-colors">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">3</h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-amber-400">Main Scenarios</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks Section - Inspired by DOTA */}
        <section id="tasks" className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">Tasks Overview</h2>
            <div className="prose prose-blue max-w-none mb-12">
              <p className="text-lg text-gray-600">
                We introduce two fundamental research tasks for the CUBIT benchmark. While Task 1 focuses on standard visual localization, Task 2 leverages the metric nature of the dataset for engineering-level assessment.
              </p>
            </div>

            <div className="grid gap-12">
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white rounded-xl text-sm font-mono">01</span>
                      Task 1 - Instance Segmentation (Metric Ground Truth)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      The aim of this task is to accurately localize and classify defect instances using pixel-level segmentation masks.
                    </p>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">Categories:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Cracks", "Concrete Spalling", "Rebar Exposure", "Efflorescence"].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h5 className="font-bold text-gray-900 text-sm mb-2">Evaluation Protocol:</h5>
                      <p className="text-sm text-gray-500">
                        Evaluated using mean Average Precision (<strong>mAP</strong>) at different IoU thresholds. Standard metrics follow the MS-COCO benchmark protocol for instance segmentation.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-medium">
                    Segmentation Mask Example
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center bg-indigo-600 text-white rounded-xl text-sm font-mono">02</span>
                      Task 2 - Physical Metric Quantification
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      The aim of this task is to calculate physically meaningful severity indicators—such as crack width, propagation, or spalling volume.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <h5 className="font-bold text-gray-900 text-sm">Key Indicators:</h5>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Absolute Crack Width (mm)</li>
                          <li>• Spalling Surface Area (cm²)</li>
                          <li>• Defect Growth Rate Analysis</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-bold text-gray-900 text-sm">Quantification Logic:</h5>
                        <p className="text-sm text-gray-500">
                          Requires transforming 2D pixel coordinates into 3D metric space using GSD (Ground Sample Distance) and camera parameters.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h5 className="font-bold text-gray-900 text-sm mb-2">Evaluation Protocol:</h5>
                      <p className="text-sm text-gray-500">
                        Comparison against human expert ground truth measurements (metric scale). Primary metrics include Mean Absolute Error (<strong>MAE</strong>) and Root Mean Squared Error (<strong>RMSE</strong>).
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-medium">
                    Metric Quant. Example
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Gallery Section */}
        <section id="results" className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Paper Figures & Results</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Visualizations and statistical analyses extracted from the CUBIT-Det and CUBIT-InSeg research papers.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {figures.map((fig, i) => (
                <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center overflow-hidden border-b border-gray-100">
                    {fig.type === "png" ? (
                      <img 
                        src={fig.src} 
                        alt={fig.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4 text-gray-400">
                        <svg className="w-16 h-16 opacity-20" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" /><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full">PDF Document</span>
                        <a href={fig.src} target="_blank" className="text-blue-600 text-sm font-bold hover:underline transition-all">Open Full Figure →</a>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{fig.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{fig.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dataset Summary Section */}
        <section id="dataset" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <h3 className="text-3xl font-bold mb-8 relative z-10">CUBIT-InSeg Summary</h3>
                <div className="overflow-hidden rounded-2xl border border-gray-800 relative z-10">
                  <table className="w-full text-left">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">Defect Category</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">Images</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">Instances</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-6 py-5 font-medium">Surface Cracks</td>
                        <td className="px-6 py-5">3,982</td>
                        <td className="px-6 py-5">12,450</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-5 font-medium">Concrete Spalling</td>
                        <td className="px-6 py-5">3,014</td>
                        <td className="px-6 py-5">8,120</td>
                      </tr>
                      <tr className="bg-blue-600/10">
                        <td className="px-6 py-5 font-bold text-blue-400">Total (Benchmark)</td>
                        <td className="px-6 py-5 font-bold">6,996</td>
                        <td className="px-6 py-5 font-bold text-blue-400">20,570</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 relative z-10">
                  <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Resolution</p>
                    <p className="text-xl font-bold">4000 × 3000+</p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Platform</p>
                    <p className="text-xl font-bold">DJI M300 RTK</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight italic">Engineering Standards</h3>
                <div className="space-y-4">
                  {[
                    { title: "Metric Mapping", desc: "Defects are mapped to their real-world physical dimensions for maintenance prioritization." },
                    { title: "Scalable Inspection", desc: "Automated UAV workflows allow for rapid data collection over large infrastructure sites." },
                    { title: "Physically Meaningful", desc: "Dataset provides the foundation for 3D digital twin integration and structural health monitoring." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all bg-white shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-[2rem] p-8 shadow-sm">
                  <h4 className="text-indigo-900 font-bold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
                    Data Availability
                  </h4>
                  <p className="text-indigo-700/80 text-sm leading-relaxed mb-6">
                    Provided for academic research. Please follow the instructions in the code repository to request access.
                  </p>
                  <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]">
                    Request Full Dataset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Section */}
        <section id="citation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100 bg-white relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Cite Our Work</h2>
            <p className="text-gray-500">If you use CUBIT in your research, please cite the following papers.</p>
          </div>
          <div className="space-y-10">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-5 group-hover:opacity-15 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-[2rem] p-8 sm:p-12 overflow-x-auto shadow-2xl">
                <p className="text-blue-400 text-xs font-mono font-bold mb-6 flex items-center gap-2 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                  Automation in Construction (2024)
                </p>
                <pre className="text-gray-300 text-xs sm:text-sm font-mono leading-relaxed">
{`@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong and Wen, Junjie and Zhang, Jihan and Dou, Jia and Li, Guang and Chen, Xi and Chen, Ben M.},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.autcon.2024.105405}
}`}
                </pre>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2.5rem] blur opacity-5 group-hover:opacity-15 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-[2rem] p-8 sm:p-12 overflow-x-auto shadow-2xl">
                <p className="text-emerald-400 text-xs font-mono font-bold mb-6 flex items-center gap-2 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Preprint (2025)
                </p>
                <pre className="text-gray-300 text-xs sm:text-sm font-mono leading-relaxed">
{`@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and Yang, Guidong and Huang, Yijun and Lei, Lei and Chen, Xi and Chen, Ben M.},
  year={2025},
  note={Preprint}
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="people" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gray-50 rounded-[4rem] p-12 sm:p-20 text-center border border-gray-100 shadow-sm">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Our Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
              Developed by researchers at the <strong>Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong (CUHK)</strong>.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-600">BZ</div>
                <p className="font-bold text-gray-900 text-xl mb-1">Benyun Zhao</p>
                <p className="text-xs text-gray-400 font-mono">benyunzhao@cuhk.edu.hk</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-indigo-600">XC</div>
                <p className="font-bold text-gray-900 text-xl mb-1">Xi Chen</p>
                <p className="text-xs text-gray-400 font-mono">xichen002@cuhk.edu.hk</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-emerald-600">BC</div>
                <p className="font-bold text-gray-900 text-xl mb-1">Ben M. Chen</p>
                <p className="text-xs text-gray-400 font-mono">bmchen@cuhk.edu.hk</p>
              </div>
            </div>
        </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-2xl font-bold text-gray-900 tracking-tighter">CUBIT Project</span>
              <p className="text-xs text-gray-400 font-medium">© 2026 CUBIT Research Team. All rights reserved.</p>
            </div>
            <div className="flex gap-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="https://www.cuhk.edu.hk" className="hover:text-blue-600 transition-colors">CUHK Home</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
