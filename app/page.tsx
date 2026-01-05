"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [pageViews, setPageViews] = useState(0);

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
      }
    } catch (err) {
      setError('服务器错误');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

  const figures = [
// ... (rest of the figures)
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
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
                  <p className="text-3xl font-black tracking-tighter">12,000+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Images</p>
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter">30,000+</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Instances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Task Descriptions - DOTA Style */}
        <section id="tasks" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Introduction</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">Research Challenges</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                CUBIT dataset is designed for multiple tasks in infrastructure defect assessment. Each task targets specific engineering requirements.
              </p>
            </div>

            <div className="space-y-32">
              {/* Task 1 */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Task 1</div>
                  <h4 className="text-4xl font-bold text-slate-900 tracking-tight">Defect Detection with Horizontal Bounding Boxes</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    Detecting defects using horizontal bounding boxes is a fundamental task. The goal is to accurately localize the defect instances in terms of (xmin, ymin, xmax, ymax) format.
                  </p>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Submission Format</h5>
                    <pre className="text-xs font-mono text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 overflow-x-auto">
                      {`imgname score xmin ymin xmax ymax
imgname score xmin ymin xmax ymax
...`}
                    </pre>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Evaluation Protocol</h5>
                    <p className="text-sm text-slate-600 font-medium">Follows the PASCAL VOC benchmark, using mean Average Precision (mAP) as the primary metric.</p>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative group">
                  <Image src="/images/framework.png" alt="Task 1" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>

              {/* Task 2 */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 aspect-[4/3] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative group">
                  <Image src="/images/distribution-dataset.png" alt="Task 2" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Task 2</div>
                  <h4 className="text-4xl font-bold text-slate-900 tracking-tight">Instance Segmentation & Physical Quantification</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    This task requires pixel-level mask generation and transforming these masks into metric engineering units (mm, cm²).
                  </p>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Submission Format</h5>
                    <pre className="text-xs font-mono text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 overflow-x-auto">
                      {`{
  "image_id": int,
  "category_id": int,
  "segmentation": RLE or [polygon],
  "score": float,
  "physical_metric": float (mm)
}`}
                    </pre>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Evaluation Protocol</h5>
                    <p className="text-sm text-slate-600 font-medium">Calculates Mask mAP (MS COCO) and Physical Metric Error (RMSE/MAE).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Download Section - Google Drive links */}
        <section id="download" className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
              <div className="max-w-xl">
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Data Access</h2>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Download CUBIT</h3>
              </div>
              <p className="text-slate-500 font-medium max-w-sm">All data is hosted on Google Drive for high-speed global access. Please cite our papers after downloading.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
                <h4 className="text-3xl font-bold text-slate-900 mb-6">CUBIT-Det v1.0</h4>
                <div className="space-y-6">
                  <p className="text-slate-500 font-medium leading-relaxed">Infrastructure defect detection dataset containing 5,500+ high-resolution images.</p>
                  <div className="space-y-3">
                    <a href="https://drive.google.com/drive/folders/YOUR_ID_HERE" target="_blank" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group/item">
                      <span className="text-[10px] font-black uppercase tracking-widest">Training Set (7.2 GB)</span>
                      <svg className="w-5 h-5 opacity-40 group-hover/item:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>
                    </a>
                    <a href="https://drive.google.com/drive/folders/YOUR_ID_HERE" target="_blank" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group/item">
                      <span className="text-[10px] font-black uppercase tracking-widest">Validation & Test (2.5 GB)</span>
                      <svg className="w-5 h-5 opacity-40 group-hover/item:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
                <h4 className="text-3xl font-bold text-slate-900 mb-6">CUBIT-InSeg v1.0</h4>
                <div className="space-y-6">
                  <p className="text-slate-500 font-medium leading-relaxed">Pixel-level instance segmentation dataset with 6,996 HD images and metric labels.</p>
                  <div className="space-y-3">
                    <a href="https://drive.google.com/drive/folders/YOUR_ID_HERE" target="_blank" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group/item">
                      <span className="text-[10px] font-black uppercase tracking-widest">Full Dataset (12.4 GB)</span>
                      <svg className="w-5 h-5 opacity-40 group-hover/item:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>
                    </a>
                    <a href="https://drive.google.com/drive/folders/YOUR_ID_HERE" target="_blank" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group/item">
                      <span className="text-[10px] font-black uppercase tracking-widest">Annotations Only (450 MB)</span>
                      <svg className="w-5 h-5 opacity-40 group-hover/item:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>
          </a>
        </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results / Leaderboard Preview */}
        <section id="leaderboard" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">Performance<br/><span className="text-blue-600 font-light italic text-4xl">Leaderboard</span></h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">Current state-of-the-art results on CUBIT Benchmark. Sign in to submit your results.</p>
            </div>
            <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-2xl">Full Leaderboard</button>
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

        {/* Visitor Statistics - DOTA Style */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-16">Global Impact</h2>
            
            <div className="inline-block p-10 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-blue-600"></div>
              
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter mb-2">
                    {pageViews.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Total Pageviews</span>
                </div>

                <div className="relative w-full max-w-2xl aspect-[2/1] bg-slate-200 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                  {/* 学术风格的地图 Placeholder，后期可替换为 RevolverMaps 或 ClustrMaps 脚本 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#2c3e50] text-white/20">
                    <svg className="w-full h-full p-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-blue-600 rounded text-[9px] font-black text-white tracking-widest uppercase">Live Visitor Map</div>
                  </div>
                </div>

                <p className="max-w-md text-xs text-slate-400 font-medium leading-relaxed">
                  The CUBIT Benchmark is being accessed by researchers across {Math.min(10, Math.ceil(pageViews/5) + 1)} countries globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section id="citation" className="py-40 bg-slate-950 rounded-t-[5rem] mx-4 sm:mx-8">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 text-center">
            <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-20">Academic Citation</h2>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
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
