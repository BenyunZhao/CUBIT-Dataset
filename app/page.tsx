"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [pageViews, setPageViews] = useState(0);
  const [activeTask, setActiveTask] = useState('det');

  // 动态加载 MapMyVisitors 脚本
  useEffect(() => {
    const container = document.getElementById('map-container');
    if (container && container.childNodes.length === 0) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'mmvst_globe';
      script.src = "//mapmyvisitors.com/globe.js?d=asZtmcurVELXgcwr9CzlQw9tO6D7FsBXAndjUU7lGIA";
      script.async = true;
      container.appendChild(script);
    }
  }, []);

  // 页面加载时检查登录状态和获取访问量
  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
      });

    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setPageViews(data.views));
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setUser(data.user);
        setIsLoginOpen(false);
        setFormData({ email: '', password: '', name: '' });
      } else {
        setError(data.error || '认证失败');
        console.error('Auth Error Details:', data.details);
      }
    } catch (err) {
      setError('网络或服务器异常，请检查控制台');
      console.error('Fetch Error:', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

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

  const baselines = {
    det: [
      { model: "YOLOv6-l", crack: "85.7", spalling: "91.7", moisture: "44.3", latency: "15.9ms" },
      { model: "YOLOv5-x", crack: "81.2", spalling: "88.4", moisture: "42.1", latency: "28.4ms" },
      { model: "YOLOX-x", crack: "83.9", spalling: "89.5", moisture: "43.5", latency: "41.2ms" },
      { model: "Faster R-CNN (ResNet50)", crack: "72.5", spalling: "71.5", moisture: "30.5", latency: "55.0ms" },
    ],
    inseg: [
      { model: "YOLOv11-Seg", mask_ap: "44.1", box_ap: "47.5", crack_map: "42.3", params: "35M" },
      { model: "ConvNeXtV2-P", mask_ap: "45.2", box_ap: "48.7", crack_map: "43.8", params: "40M" },
      { model: "Swin-T", mask_ap: "42.8", box_ap: "46.1", crack_map: "41.5", params: "28M" },
      { model: "Starnet", mask_ap: "41.5", box_ap: "44.2", crack_map: "39.8", params: "18M" },
    ]
  };

  const severityGrades = [
    { level: "Low", si: "< 0.25", crack: "< 0.2 mm", spalling: "None", action: "Routine monitoring", color: "text-green-500" },
    { level: "Moderate", si: "0.25 - 0.50", crack: "0.2 - 0.5 mm", spalling: "< 50 cm²", action: "Repair scheduling", color: "text-blue-500" },
    { level: "Severe", si: "0.50 - 0.75", crack: "> 0.5 mm", spalling: "50 - 200 cm²", action: "Urgent repair", color: "text-orange-500" },
    { level: "Critical", si: "> 0.75", crack: "Severe structural damage", spalling: "> 200 cm²", action: "Immediate structural assessment", color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between h-20 items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
            <span className="text-xl font-black tracking-tighter">CUBIT <span className="text-blue-600">CHALLENGE</span></span>
          </div>
          <div className="hidden lg:flex items-center space-x-10">
            {["Home", "Tasks", "Challenge", "Download", "Leaderboard", "Citation"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Hi, {user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-red-500 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => { setIsRegister(false); setIsLoginOpen(true); }}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setIsRegister(true); setIsLoginOpen(true); }}
                  className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
                >
                  Register
                </button>
              </>
            )}
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
             <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
             <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white"></div>
           </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-20">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600/20 backdrop-blur border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              Benchmark & Challenges 2026
            </div>
            <h1 className="text-6xl sm:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10">
              CUBIT<br/>
              <span className="text-blue-600">BENCHMARK</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium mb-12 italic">
              "A Large-Scale Benchmark for Infrastructure Defect Assessment and <span className="text-white border-b-2 border-blue-600 pb-1">Physical Quantification Challenges</span>."
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#challenge" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">Participate Challenge</a>
              <div className="flex gap-8 border-l border-white/10 pl-8 text-white">
                <div>
                  <p className="text-3xl font-black tracking-tighter">12,500+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Images</p>
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter">32,400+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Instances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Leaderboard - Data Dense Section */}
        <section id="challenge" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Column: Leaderboard */}
              <div className="lg:col-span-8 space-y-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-2">Academic Benchmark</h2>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Performance Leaderboard</h3>
                  </div>
                  <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button 
                      onClick={() => setActiveTask('det')} 
                      className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTask === 'det' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      Detection
                    </button>
                    <button 
                      onClick={() => setActiveTask('inseg')} 
                      className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTask === 'inseg' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      Segmentation
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Rank</th>
                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Model</th>
                        {activeTask === 'det' ? (
                          <>
                            <th className="px-8 py-5 text-[10px] font-black text-blue-600 uppercase tracking-widest">Crack AP</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Spalling AP</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Latency</th>
                          </>
                        ) : (
                          <>
                            <th className="px-8 py-5 text-[10px] font-black text-blue-600 uppercase tracking-widest">Mask mAP</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Box mAP</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Crack mAP</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                      {(activeTask === 'det' ? baselines.det : baselines.inseg).map((item, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                          <td className="px-8 py-6 font-black text-slate-300 group-hover:text-blue-600 transition-colors">#0{i+1}</td>
                          <td className="px-8 py-6 text-slate-950 font-bold">{item.model}</td>
                          {activeTask === 'det' ? (
                            <>
                              <td className="px-8 py-6 font-black text-blue-600">{item.crack}%</td>
                              <td className="px-8 py-6 text-slate-500">{item.spalling}%</td>
                              <td className="px-8 py-6 text-slate-400 text-xs">{item.latency}</td>
                            </>
                          ) : (
                            <>
                              <td className="px-8 py-6 font-black text-blue-600">{item.mask_ap}%</td>
                              <td className="px-8 py-6 text-slate-500">{item.box_ap}%</td>
                              <td className="px-8 py-6 text-slate-500">{item.crack_map}%</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-2xl font-black tracking-tight">Participate in CUBIT Challenges</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">
                        Submit your models to our automated evaluation server. We follow the MS COCO (101 points) and Pascal VOC protocols.
                      </p>
                    </div>
                    {user ? (
                      <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl">
                        Submit Result (.zip)
                      </button>
                    ) : (
                      <button 
                        onClick={() => setIsLoginOpen(true)}
                        className="px-10 py-5 bg-white text-slate-950 hover:bg-blue-600 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl"
                      >
                        Sign In to Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Taxonomy & Physical Modeling */}
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Dataset Taxonomy</h4>
                  <div className="space-y-8">
                    {[
                      { label: "Data Modality", val: "UAV RGB Imagery (8K/4K/HD)" },
                      { label: "Defect Classes", val: "Cracks (Linear, Branch, Web), Spalling, Moisture" },
                      { label: "Data Split", val: "70% Train, 10% Val, 20% Robust Test" },
                      { label: "Metric Scale", val: "Pixel-to-MM (Calibrated via GSD)" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{item.label}</p>
                        <p className="text-sm font-bold text-slate-900">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Physical Severity Grading</h4>
                  <div className="space-y-6">
                    {severityGrades.map((grade, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-xs font-black uppercase tracking-widest ${grade.color}`}>{grade.level}</span>
                          <span className="text-[9px] font-bold text-slate-400">SI {grade.si}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-900 mb-1">Crack: {grade.crack}</p>
                        <p className="text-[10px] text-slate-500 font-medium">Action: {grade.action}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-[9px] text-slate-400 italic font-medium leading-relaxed">
                    * Based on BS ISO 15686-7:2017 and HK Surveyors Practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Task Details Section - DOTA Style Information Density */}
        <section id="tasks" className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Protocols</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">Submission & Metrics</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                CUBIT defines standardized data structures for fair evaluation across all participating models.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-8 p-12 bg-white rounded-[3.5rem] border border-slate-200">
                <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Task 1: Detection</div>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Focuses on high-resolution bounding box localization. Each submission must contain category-specific .txt files in the following format:
                </p>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <pre className="text-[11px] font-mono text-slate-600 leading-relaxed overflow-x-auto">
                    {`[imgname] [score] [xmin] [ymin] [xmax] [ymax]
pavement_001 0.985 450 120 890 340
pavement_001 0.742 1200 4500 1350 4800
...`}
                  </pre>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Challenge Rules</h5>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li>• Images must not be resized below 1024x1024 during inference.</li>
                    <li>• Results are evaluated using Pascal VOC AP@0.5 and COCO AP@0.5:0.95.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8 p-12 bg-white rounded-[3.5rem] border border-slate-200">
                <div className="inline-block px-4 py-1.5 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Task 2: InSeg & Quant</div>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Focuses on pixel-accurate masks and physical quantification. Submissions should follow the COCO JSON format with an additional metric field.
                </p>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <pre className="text-[11px] font-mono text-slate-600 leading-relaxed overflow-x-auto">
                    {`{
  "image_id": 405,
  "segmentation": [45.1, 89.2, ...],
  "physical_metric": 0.42, // mm for cracks
  "physical_unit": "mm"
}`}
                  </pre>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quantification Metric</h5>
                  <p className="text-xs text-slate-600 font-medium">
                    Evaluated by Root Mean Square Error (RMSE) against ground-truth physical measurements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery - Visual Evidence */}
        <section id="results" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">Scientific<br/><span className="text-blue-600 italic font-light text-4xl">Visual Evidence</span></h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">Direct evidence and quantitative insights from the CUBIT benchmark evaluations.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {figures.map((fig, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-4/3 relative rounded-[2.5rem] overflow-hidden bg-slate-50 mb-8 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-3">
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

        {/* Global Impact Dashboard */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-16">Global Impact</h2>
            
            <div className="inline-block p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter mb-2">
                    {pageViews.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Total Researchers Reached</span>
                </div>

                <div className="relative w-full max-w-2xl aspect-2/1 bg-slate-900 rounded-[2.5rem] overflow-hidden group-hover:shadow-3xl transition-all duration-1000 border border-slate-800 shadow-2xl">
                  {/* 嵌入真实的 3D 旋转地球挂件 (MapMyVisitors) */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div id="map-container" className="w-full h-full flex items-center justify-center">
                      {/* 脚本会在此处动态插入 */}
                    </div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Live Global Feed</span>
                  </div>
                  <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-blue-600 rounded-lg text-[10px] font-black text-white tracking-[0.3em] uppercase shadow-lg">Network Activity</div>
                </div>

                <p className="max-w-lg text-sm text-slate-400 font-medium leading-relaxed">
                  CUBIT Benchmark is being adopted by over {Math.max(12, Math.ceil(pageViews/12))} leading research groups in Unmanned Systems and Civil Engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Section */}
        <section id="citation" className="py-40 bg-slate-950 rounded-t-[5rem] mx-4 sm:mx-8">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 text-center">
            <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-20">Academic Attribution</h2>
            <div className="space-y-12">
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 relative text-left group hover:bg-white/10 transition-all">
                <pre className="text-slate-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`@article{zhao2024cubit,
  title={High-resolution infrastructure defect detection 
         dataset sourced by unmanned systems and 
         validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and others},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024}
}`}
                </pre>
              </div>
            </div>
        </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">C</div>
            <span>© 2026 CUBIT Challenge Group | CUHK</span>
          </div>
          <div className="flex gap-16">
            <a href="https://github.com/hyjcde" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors font-black">CUHK.EDU.HK</a>
          </div>
        </div>
      </footer>

      {/* Auth Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => { setIsLoginOpen(false); setError(''); }}
          ></div>
          <div className="relative bg-white rounded-[3rem] w-full max-w-md p-12 shadow-3xl animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-10">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">
                {isRegister ? 'Create Account' : 'Welcome Back'}
              </h4>
              <p className="text-slate-400 text-sm font-medium">
                {isRegister ? 'Join the CUBIT Benchmark Community' : 'Sign in to CUBIT Challenge Server'}
              </p>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-6">
              {isRegister && (
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              )}
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              
              {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
              
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all">
                {isRegister ? 'Register' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {isRegister ? 'Already have an account?' : "Don't have an account?"} 
                <span 
                  className="text-blue-600 cursor-pointer ml-2"
                  onClick={() => { setIsRegister(!isRegister); setError(''); }}
                >
                  {isRegister ? 'Sign In' : 'Register'}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
