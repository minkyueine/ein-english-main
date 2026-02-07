import React, { useState, useEffect } from 'react';
import {
  CheckCircle, MessageCircle, Star, BookOpen,
  ArrowRight, HelpCircle, Medal,
  ChevronDown, ChevronUp, Settings,
  RotateCcw, MessageSquare, Clock, ShieldCheck, Target, GraduationCap,
  MousePointer2, Headphones, Globe,
  Check, ShieldAlert, HeartHandshake, Smile, PlayCircle,
  Gift, Timer, PenTool, History, Sparkles, Menu, X,
  User, LogIn, Youtube, Instagram, Facebook
} from 'lucide-react';

const App = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("adult");
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);

  const videoReviews = [
    { title: "영어 울렁증 약대생의 2주간 화상 영어 도전기", desc: "김*진님 (약대생)", img: "https://img.youtube.com/vi/VMaTTtZayzc/maxresdefault.jpg", videoId: "VMaTTtZayzc", ratio: "aspect-video", category: "adult" },
    { title: "퇴화된 영어를 심폐소생 하는 방법", desc: "직장인 영어 회화", img: "https://img.youtube.com/vi/aings9mFIUo/maxresdefault.jpg", videoId: "aings9mFIUo", ratio: "aspect-video", category: "adult" },
    { title: "영어미팅이 두려운 직장인의 화상영어 후기", desc: "비즈니스 영어 비법", img: "https://img.youtube.com/vi/rYJM1G7ysIE/maxresdefault.jpg", videoId: "rYJM1G7ysIE", ratio: "aspect-video", category: "adult" },
    { title: "영포자 미국 이민을 가다! 성인 영어 발음교정", desc: "미국 이민 준비생", img: "https://img.youtube.com/vi/LePfFnMwymU/hqdefault.jpg", videoId: "LePfFnMwymU", ratio: "aspect-video", category: "adult" },
    { title: "화상영어 한달 찐후기 (Trip to Yebina)", desc: "여행 유튜버 Yebina님", img: "https://img.youtube.com/vi/XzAh9VC1F0E/maxresdefault.jpg", videoId: "XzAh9VC1F0E", ratio: "aspect-video", category: "adult" },
    { title: "대학교 4학년이 똑똑하게 화상영어 공부하는 법", desc: "대학생 영어 공부 꿀팁", img: "https://img.youtube.com/vi/pmfUxHNiuD4/maxresdefault.jpg", videoId: "pmfUxHNiuD4", ratio: "aspect-video", category: "adult" },
    { title: "매일 30분씩 외국인과 대화해 보았다", desc: "매일 30분 영어 루틴", img: "https://img.youtube.com/vi/CNUkYt2vvMQ/maxresdefault.jpg", videoId: "CNUkYt2vvMQ", ratio: "aspect-video", category: "adult" },
    { title: "어학연수, 교환학생 갈 필요 없어요!", desc: "화상영어 선택 꿀팁", img: "https://img.youtube.com/vi/MUxWrc-Kv2I/maxresdefault.jpg", videoId: "MUxWrc-Kv2I", ratio: "aspect-video", category: "adult" },
    // Junior Videos (Shorts)
    { title: "학원 갈 시간 없다고요? 새벽 6시부터 밤 늦게까지 OK", desc: "초등 영어 회화 꿀팁", img: "https://img.youtube.com/vi/5JCF_TxaqAM/maxresdefault.jpg", videoId: "5JCF_TxaqAM", ratio: "aspect-[9/16]", category: "junior" },
    { title: "우리 아이랑 딱 맞는 영어 선생님 찾았어요!", desc: "어린이 화상영어 추천", img: "https://img.youtube.com/vi/dd9Z-TCfmCo/maxresdefault.jpg", videoId: "dd9Z-TCfmCo", ratio: "aspect-[9/16]", category: "junior" },
    { title: "처음엔 긴장했지만… Raze 선생님과 첫 수업 후 웃음꽃 활짝🌸", desc: "영어 자신감 폭발 후기", img: "https://img.youtube.com/vi/tlYmdce76Y0/maxresdefault.jpg", videoId: "tlYmdce76Y0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "Raze 선생님과 대화하며 스피킹이 자연스럽게 늘었어요", desc: "자연스러운 스피킹 연습", img: "https://img.youtube.com/vi/aYYdL6Ng5I0/maxresdefault.jpg", videoId: "aYYdL6Ng5I0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "낯가림 심한 우리 아이, 웃게 만든 Mica 선생님", desc: "낯가림 극복 영어 수업", img: "https://img.youtube.com/vi/7GUf_akwZig/maxresdefault.jpg", videoId: "7GUf_akwZig", ratio: "aspect-[9/16]", category: "junior" },
    { title: "“영어가 재밌대요!” 아이가 먼저 말한 화상영어의 힘", desc: "국제학교 아이도 만족", img: "https://img.youtube.com/vi/UQ39TuqbPH0/maxresdefault.jpg", videoId: "UQ39TuqbPH0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "단어만 말하던 아이, 드디어 문장을 말하다!", desc: "문장 발화 성공 후기", img: "https://img.youtube.com/vi/CJm8DRzOQBY/maxresdefault.jpg", videoId: "CJm8DRzOQBY", ratio: "aspect-[9/16]", category: "junior" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const books = [
    { title: "일반 회화 교재", tag: "BEST", desc: "실제 원어민이 쓰는 표현으로, 교과서에 없는 살아 있는 영어를 배웁니다.", img: "/ein-english-main/images/materials/regular-class.png" },
    { title: "비즈니스 교재", tag: "HOT", desc: "회의·메일·보고 등 상황별 예문으로 실무에서 바로 쓰는 표현을 익힙니다.", img: "/ein-english-main/images/materials/business.png" },
    { title: "파닉스 교재", tag: "NEW", desc: "알파벳과 발음 규칙부터 시작해, 읽기·쓰기의 기초를 탄탄하게 잡아 줍니다.", img: "/ein-english-main/images/materials/phonics.png" },
    { title: "어린이 원서 교재", tag: null, desc: "미국·캐나다 초등교과용 영어 학습 프로그램, 3천 권 이상의 원서를 제공합니다.", img: "/ein-english-main/images/materials/razkids-english-original-book.png" },
    { title: "상황 & 사진 묘사", tag: null, desc: "사진을 보고 설명하며 이야기 만들기, 상황별 질문을 통해 영어를 배웁니다.", img: "/ein-english-main/images/materials/description-of-situation-and-photo.png" },
    { title: "비디오 교재", tag: null, desc: "TED 비디오를 활용하여 어휘, 듣기, 깊이 있는 말하기 능력을 키워줍니다.", img: "/ein-english-main/images/materials/video.png" },
    { title: "패턴 교재", tag: null, desc: "실생활 예문과 패턴을 반복 연습하며 자연스러운 대화 능력을 키워줍니다.", img: "/ein-english-main/images/materials/english-pattern.png" },
    { title: "주니어 회화", tag: null, desc: "어린이를 위한 전용 화상 수업 교재로, 실생활 주제로 재미있게 학습합니다.", img: "/ein-english-main/images/materials/junior-english.png" },
    { title: "이디엄 학습", tag: null, desc: "일상생활에서 자주 쓰이는 속담과 관용구를 재미있는 이야기와 함께 배웁니다.", img: "/ein-english-main/images/materials/idioms-me-and-you.png" }
  ];

  const allReviews = [
    { type: 'text', author: '이*현 (30대 직장인)', title: "회의에서 영어로 말문이 막히지 않아요", content: '영어 울렁증이 심해서 회의 때마다 식은땀을 흘렸는데, 아인에서 비즈니스 과정을 들은 지 3개월 만에 제가 먼저 의견을 제시하게 됐습니다. 실전 위주라 바로 업무에 쓸 수 있는 게 가장 좋았어요.' },
    { type: 'text', author: '박*은 (40대 주부)', title: "가족 여행에서, 제가 다 해결했어요", content: '애들 다 키우고 늦은 나이에 시작했는데 선생님이 너무 친절하세요. 가족 여행 갔을 때 혼자서 호텔 체크인하고 주문하는 거 보고 가족들이 다 놀랐습니다. 정말 뿌듯해요!' },
    { type: 'image', label: '수업 현장', img: "/ein-english-main/images/real-success-stories/class1.png" },
    { type: 'image', label: '꼼꼼한 피드백', img: "/ein-english-main/images/real-success-stories/feedback1.jpg" },
    { type: 'text', author: '김*현 (초등학생)', title: "영어가 이제 숙제가 아니라 놀이 같아요", content: '애니메이션으로 배우니까 학원보다 훨씬 재밌어요! 선생님이랑 수다 떠는 시간이 매일 기다려집니다.' },
    { type: 'image', label: '성장 리포트', img: "/ein-english-main/images/real-success-stories/report.png" },
    { type: 'image', label: '수업 화면', img: "/ein-english-main/images/real-success-stories/class2.jpeg" },
    { type: 'text', author: '정*아 (중학생)', title: "학교 스피킹 시험에서 만점 받았어요!", content: '문법만 할 때는 몰랐는데, 직접 입으로 뱉어보니 영어 실력이 부쩍 늘어난 게 느껴져요.' },
    { type: 'text', author: '최*민 (취준생)', title: "오픽 IH 달성했습니다!", content: '스크립트 무조건 외우라고 하는 학원 다니다가 포기했었는데, 아인 선생님이랑 프리토킹하면서 자연스러운 표현 익히니까 금방 늘더라고요. 감사합니다!' },
    { type: 'image', label: '1:1 밀착 관리', img: "/ein-english-main/images/real-success-stories/feedback2.png" },
    { type: 'text', author: '강*우 (40대 사업가)', title: "새벽 시간 수업이 가능해서 좋아요", content: '일이 바빠서 학원 다닐 시간이 없었는데, 출근 전 20분씩 꾸준히 하니까 확실히 감이 안 떨어지네요. 시간 변경도 유연해서 좋습니다.' },
    { type: 'text', author: '윤*지 (대학생)', title: "첨삭 꼼꼼하게 해주셔서 너무 좋아요", content: '제가 쓴 에세이를 실시간으로 고쳐주시는데, 문법 오류뿐만 아니라 더 원어민스러운 표현으로 바꿔주시는 게 진짜 도움 많이 됩니다.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80 font-sans text-slate-900 max-w-[1200px] mx-auto border-x border-slate-200 shadow-2xl overflow-x-hidden relative">
      {/* 상단 배너: 그라데이션 + 미세 패턴 느낌 */}
      <div
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white py-3.5 px-4 text-center text-xs md:text-sm font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:from-slate-800 hover:to-slate-900 transition-all duration-300 relative z-50 shadow-lg"
        onClick={scrollToHero}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] pointer-events-none" />
        <Sparkles size={14} className="text-yellow-400 animate-pulse shrink-0 relative z-10" fill="currentColor" />
        <span className="truncate relative z-10">2026년 새해에는 반드시 성공하세요! ✨ 아인이 <span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 decoration-2">무제한</span>으로 지원합니다.</span>
      </div>

      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
        <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="w-full bg-blue-600 text-white py-3 rounded-xl font-black text-lg shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] flex flex-col items-center justify-center gap-0.5 hover:bg-blue-700 active:scale-95 transition-all border border-blue-400/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 drop-shadow-md pb-0.5">15분 무료체험권 즉시 받기 <ArrowRight size={20} strokeWidth={3} /></div>
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-tight opacity-90">
            <span className="text-yellow-300 font-bold animate-pulse">⚡️ 소요시간 단 1분</span>
            <span className="w-[1px] h-3 bg-blue-400/50"></span>
            <span className="text-blue-100">🚫 카드정보 입력 없음</span>
          </div>
        </button>
      </div>

      {/* Utility Bar (Login/Signup) */}
      <div className="bg-white border-b border-slate-100 py-2 px-4 md:px-6 flex justify-end items-center gap-4 text-[11px] font-medium text-slate-500 relative z-50">
        <div className="flex items-center gap-3 tracking-tight">
          <a href="#" className="hover:text-blue-600 transition-colors">로그인</a>
          <span className="w-[1px] h-2 bg-slate-200"></span>
          <a href="#" className="hover:text-blue-600 transition-colors">회원가입</a>
          <span className="w-[1px] h-2 bg-slate-200"></span>
          <a href="#" className="hover:text-blue-600 transition-colors">아이디/비밀번호찾기</a>
        </div>
        <div className="flex items-center gap-1.5 ml-2 border-l border-slate-200 pl-4">
          <a href="#" className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"><Youtube size={12} /></a>
          <a href="#" className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all"><Facebook size={12} /></a>
          <a href="#" className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-100 transition-all"><Instagram size={12} /></a>
          <a href="#" className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-green-50 hover:text-green-600 hover:border-green-100 transition-all"><MessageCircle size={12} /></a>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-4 md:px-6 py-4 flex justify-between items-center transition-all">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToHero}>
          <img src="/ein-english-main/ain-english-logo.png" alt="아인잉글리쉬" className="h-8 md:h-9 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 font-bold text-sm text-slate-800 tracking-tight">
          {/* Free Trial CTA with Badge (Integrated Button to prevent clipping) */}
          <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transform hover:-translate-y-0.5">
            <span>무료체험신청</span>
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-black animate-pulse shrink-0">3,000원 할인</span>
          </button>

          <a href="#about" className="hover:text-blue-600 px-2 py-2 transition-colors">아인잉글리쉬</a>
          <a href="#curriculum" className="hover:text-blue-600 px-2 py-2 transition-colors">교육과정</a>
          <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="hover:text-blue-600 px-2 py-2 transition-colors">수강신청하기</button>
          <a href="#reviews" className="hover:text-blue-600 px-2 py-2 transition-colors">성공수강후기</a>
          <a href="#support" className="hover:text-blue-600 px-2 py-2 transition-colors">고객센터</a>
          <div className="relative">
            <a href="#events" className="hover:text-blue-600 px-2 py-2 transition-colors">이벤트</a>
            <span className="absolute top-0 right-[-8px] w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full -mt-1">N</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-6 text-xl font-black text-slate-800">
            <a href="#unlimited" onClick={() => setIsMobileMenuOpen(false)}>Premium</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Review</a>
            <a href="#why" onClick={() => setIsMobileMenuOpen(false)}>Why Ain</a>
            <a href="#safe-zone" onClick={() => setIsMobileMenuOpen(false)}>Safe Zone</a>
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-blue-600 text-white py-4 rounded-xl mt-4 shadow-lg">부담없이 신청하기</button>
          </div>
        </div>
      )}

      <header className="relative pt-20 pb-32 px-6 text-center border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-slate-50/90 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent)] z-0" />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-25"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block border-2 border-blue-200/80 bg-white/90 backdrop-blur-sm px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 rounded-full shadow-md shadow-blue-100/50 animate-bounce-subtle">
            Today's Limited Offer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-900 drop-shadow-sm">
            영포자도 3개월이면<br />
            말문이 트이는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic underline decoration-blue-200/50 decoration-8 underline-offset-8 pr-4 py-1">1:1 문장교정</span>
          </h1>
          <div className="text-lg md:text-2xl text-slate-600 mb-14 font-medium leading-relaxed max-w-2xl mx-auto">
            "그저 웃고 떠드는 화상영어가 아닙니다."<br />
            <span className="text-slate-900 font-bold bg-yellow-200/50 px-2 rounded">틀린 문장은 그 자리에서 바로 고쳐주는</span><br className="md:hidden" /> '현미경 첨삭'을 경험하세요.
          </div>
          <div className="bg-white/95 border-2 border-red-100 rounded-[2.5rem] py-10 px-8 mb-12 shadow-[0_24px_60px_-20px_rgba(239,68,68,0.2),0_0_0_1px_rgba(254,202,202,0.5)] inline-block w-full max-w-2xl transform hover:-translate-y-1 hover:shadow-[0_28px_70px_-20px_rgba(239,68,68,0.25)] transition-all duration-300 relative overflow-hidden group backdrop-blur-md">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -ml-8 -mb-8 opacity-50"></div>
            <div className="flex items-center justify-center gap-2 text-red-500 font-black mb-4 relative z-10">
              <Gift size={22} className="animate-pulse" /> <span className="text-lg tracking-wide">방문자 전원 증정</span>
            </div>
            <p className="text-slate-800 text-2xl md:text-3xl font-black mb-4 leading-tight relative z-10">
              <span className="text-red-500 underline decoration-red-200 decoration-4 underline-offset-4">15분 수다 체험</span> + <span className="text-red-500 underline decoration-red-200 decoration-4 underline-offset-4">강점 찾기 리포트</span>
            </p>
            <p className="text-slate-500 text-sm md:text-base font-bold bg-slate-50 inline-block px-4 py-1.5 rounded-full">
              결제 정보 없이 <span className="text-red-500">100% 완전 무료</span>로 지금 바로 신청
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="w-full max-w-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-6 text-2xl md:text-3xl font-black rounded-[2rem] flex items-center justify-center gap-3 hover:from-black hover:to-slate-900 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.5)] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] border border-slate-700/50">
              무료수업 시간 선택하기 <ArrowRight size={28} strokeWidth={3} />
            </button>
            <div className="flex flex-col items-center animate-fade-in-up">
              <div className="flex items-center gap-2 text-blue-600 font-black text-lg bg-white/80 border border-blue-100 px-4 py-1 rounded-full mb-2 shadow-sm">
                <Timer size={20} strokeWidth={2.5} /> 소요시간 단 1분!
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-500 tracking-wide">
                🚫 신용카드 정보 입력 없음 <span className="mx-2 text-slate-300">|</span> 🚫 자동 유료 전환 없음
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="awards" className="py-20 bg-black text-white text-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
          alt="Office Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(234,179,8,0.06),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h3 className="text-xs font-extrabold text-amber-500/90 mb-16 uppercase tracking-[0.4em]">Awards & History</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { year: "2025.01.14", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2024", name: "한국소비자만족 1위", img: "ksci_2024.png", desc: "교육부문 대상" },
              { year: "2024.02.13", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2023", name: "한국소비자만족 1위", img: "ksci_2023.png", desc: "고객만족 브랜드" },
              { year: "2023.01.31", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2022", name: "한국소비자베스트", img: "best_2022.png", desc: "브랜드 대상" },
              { year: "2021", name: "대한민국 브랜드", img: "kbba.png", desc: "어학 부문" },
              { year: "2020", name: "원격평생교육원", img: "edu.png", desc: "서울시 인증" }
            ].map((award, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-default relative">
                <div className="w-24 h-24 mb-6 relative hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-75 group-hover:bg-white/10 transition-colors"></div>
                  <img
                    src={`/ein-english-main/images/awards/${award.img}`}
                    alt={award.name}
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-2xl bg-white/10 items-center justify-center border border-white/10">
                    <Medal className="text-white/20" size={32} />
                  </div>
                </div>
                {award.name === '랭키닷컴 1위' && (
                  <div className="absolute top-0 right-1/2 translate-x-[50px] -translate-y-2">
                    <span className="bg-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded text-white shadow-lg">No.1</span>
                  </div>
                )}
                <div className="text-xs font-bold text-slate-500 mb-2 tracking-widest">{award.year}</div>
                <div className="text-base md:text-lg font-black tracking-tight mb-1 text-slate-200">{award.name}</div>
                <div className="text-[10px] text-slate-600 font-bold">{award.desc}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">Review</p>
            <h3 className="text-xl md:text-2xl font-black text-slate-500 italic">"이미 수많은 수강생이 증명했습니다"</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "영어 울렁증이 심해서 회의 때마다 식은땀을 흘렸는데, 아인에서 교정받은지 3개월 만에 제가 먼저 의견을 제시하게 됐습니다.", author: "이*현 (30대 직장인)" },
              { text: "가족 여행 갔을 때 혼자서 호텔 체크인하고 주문하는 거 보고 가족들이 다 놀랐습니다. 정말 뿌듯해요!", author: "박*은 (40대 주부)" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.12)] hover:border-blue-100/80 transition-all duration-300 group">
                <div>
                  <div className="text-yellow-400 flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={18} />)}
                  </div>
                  <p className="text-lg md:text-xl font-bold text-slate-700 mb-8 leading-relaxed break-keep">
                    "{review.text.split('아인에서').map((part, idx, arr) => (
                      <React.Fragment key={idx}>
                        {part}
                        {idx === 0 && arr.length > 1 && <span className="bg-yellow-100/80 px-1 rounded mx-1">아인에서</span>}
                      </React.Fragment>
                    ))}"
                  </p>
                </div>
                <div className="font-bold text-slate-400 text-sm border-t border-slate-50 pt-6 flex justify-between items-center">
                  <span>{review.author}</span>
                  <MessageCircle size={20} className="text-slate-200 group-hover:text-blue-100 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-20 border-t border-slate-100">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-12 text-center uppercase tracking-tight">Real Video Reviews <span className="text-red-500 text-sm align-top animate-pulse">● REC</span></h3>

            {/* Adult Reviews Row */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-3">
                  <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Adult</span>
                  <h4 className="text-lg font-black text-slate-700">성인/직장인 베스트 영상 후기</h4>
                </div>
                <button onClick={() => { setSelectedCategory('adult'); setShowAllReviewsModal(true); }} className="text-xs font-bold text-slate-400 hover:text-slate-900 flex items-center gap-1 transition-colors">
                  전체보기 <ArrowRight size={12} />
                </button>
              </div>
              <div className="flex overflow-x-auto gap-4 pb-8 snap-x px-4 -mx-4 scrollbar-hide">
                {videoReviews
                  .filter(video => video.category === 'adult')
                  .map((video, i) => (
                    <div key={i} className={`flex-none h-40 md:h-48 group relative ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 snap-center`} onClick={() => setSelectedVideo(video)}>
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                          <PlayCircle size={16} className="text-white fill-white/20" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h4 className="text-white font-bold text-[10px] leading-tight mb-0.5 line-clamp-2 drop-shadow-md">{video.title}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Junior Reviews Row */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Junior</span>
                  <h4 className="text-lg font-black text-slate-700">주니어/학생 베스트 영상 후기</h4>
                </div>
                <button onClick={() => { setSelectedCategory('junior'); setShowAllReviewsModal(true); }} className="text-xs font-bold text-slate-400 hover:text-slate-900 flex items-center gap-1 transition-colors">
                  전체보기 <ArrowRight size={12} />
                </button>
              </div>
              <div className="flex overflow-x-auto gap-4 pb-8 snap-x px-4 -mx-4 scrollbar-hide">
                {videoReviews
                  .filter(video => video.category === 'junior')
                  .map((video, i) => (
                    <div key={i} className={`flex-none h-64 md:h-72 group relative ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 snap-center`} onClick={() => setSelectedVideo(video)}>
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                          <PlayCircle size={24} className="text-white fill-white/20" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h4 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2 drop-shadow-md">{video.title}</h4>
                        <p className="text-slate-300 text-[10px] font-medium">{video.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


          </div>

        </div>
      </section>

      {/* Free Level Test CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight drop-shadow-md">
            "저도 이렇게 영어가 늘 수 있을까요?"
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-10 font-medium leading-relaxed">
            망설이지 마세요. 아인잉글리쉬와 함께라면 가능합니다.<br className="hidden md:block" />
            지금 바로 무료 레벨테스트로 내 실력을 확인해보세요.
          </p>
          <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg md:text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
            무료 레벨테스트 신청하기 <ArrowRight size={24} />
          </button>
        </div>
      </section>

      <section id="unlimited" className="py-24 px-6 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">Premium Service</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            영어 실력?<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 italic px-2">무제한(Unlimited)</span>으로<br />
            수직상승 시켜드립니다.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-20 font-medium leading-relaxed">아인만의 '무제한 맞춤 솔루션'으로<br className="md:hidden" /> 망설임 없이 시작하세요.</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: <RotateCcw size={28} className="text-blue-400" />, title: "무제한 매칭", desc: "나랑 딱 맞는 강사를 만날 때까지, 횟수 제한 없이 강사 교체가 가능합니다." },
              { icon: <PenTool size={28} className="text-green-400" />, title: "무제한 첨삭", desc: "수업은 끝나도 관리는 계속됩니다. 영어 일기, 에세이를 횟수 제한 없이 고쳐드립니다.", highlight: true },
              { icon: <History size={28} className="text-purple-400" />, title: "무제한 복습", desc: "이해될 때까지 돌려보세요. 모든 수업 녹화본과 학습 자료를 평생 소장할 수 있습니다." }
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 border ${item.highlight ? 'border-green-500/50 bg-green-500/5' : 'border-slate-800'} p-8 rounded-[2rem] hover:bg-white/10 transition-all group relative overflow-hidden backdrop-blur-sm`}>
                {item.highlight && <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/20 blur-2xl rounded-full -mr-10 -mt-10"></div>}
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                  {item.icon}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-white tracking-tight">{item.title}</h3>
                  {item.highlight && <span className="bg-green-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]">강력추천</span>}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-[2px] inline-block w-full max-w-2xl hover:scale-[1.02] transition-transform cursor-pointer shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] group">
            <div className="bg-[#0f172a] rounded-[1.4rem] py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 h-full relative overflow-hidden" onClick={() => window.location.href = 'https://einenglish.com/apply'}>
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-lg font-bold text-slate-300 relative z-10">지금 신청하면 <span className="text-white underline decoration-red-500 decoration-2 underline-offset-4">체험비 0원</span></div>
              <div className="flex items-center gap-3 text-2xl md:text-3xl font-black italic relative z-10">
                무제한 혜택 받기 <ArrowRight strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-500 text-sm font-bold tracking-wide">※ 체험 후기 작성 시 3,000원 적립금 100% 추가 증정</p>
        </div>
      </section>

      <section id="safe-zone" className="py-24 px-6 bg-gradient-to-b from-blue-50/80 to-slate-50/50">
        <div className="max-w-4xl mx-auto border-[8px] border-slate-900 rounded-[3rem] p-10 md:p-16 bg-white relative overflow-hidden shadow-[0_24px_60px_-16px_rgba(15,23,42,0.2)]">
          <div className="absolute top-0 right-0 p-10 opacity-[0.04] pointer-events-none"><HeartHandshake size={300} /></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16 flex flex-col md:flex-row items-center justify-center gap-4 leading-tight uppercase italic tracking-tighter text-slate-900">
              <ShieldCheck className="text-blue-600 drop-shadow-md" size={60} /> 손해 볼 것 전혀 없습니다
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
              <div className="space-y-6">
                <h4 className="text-blue-600 font-black text-2xl border-b-2 border-blue-100 pb-3 mb-6 uppercase tracking-tighter italic">100% Free</h4>
                <div className="flex items-center gap-4 font-bold text-lg text-slate-700 bg-blue-50/50 p-3 rounded-xl"><CheckCircle className="text-blue-600 shrink-0" size={24} fill="white" /> 15분 1:1 체험</div>
                <div className="flex items-center gap-4 font-bold text-lg text-slate-700 bg-blue-50/50 p-3 rounded-xl"><CheckCircle className="text-blue-600 shrink-0" size={24} fill="white" /> 강점 찾기 리포트</div>
                <p className="text-slate-400 font-bold text-sm pl-2">카드 정보 입력 없이 100% 무료로 제공됩니다.</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-slate-400 font-black text-2xl border-b-2 border-slate-100 pb-3 mb-6 uppercase tracking-tighter italic">Zero Risk</h4>
                <div className="flex items-center gap-4 font-bold text-lg text-slate-400 line-through decoration-red-400/50 decoration-2 p-3"><ShieldAlert size={24} className="shrink-0" /> 상담 전화 강요</div>
                <div className="flex items-center gap-4 font-bold text-lg text-slate-400 line-through decoration-red-400/50 decoration-2 p-3"><ShieldAlert size={24} className="shrink-0" /> 유료 자동 전환</div>
                <p className="text-slate-400 font-bold text-sm pl-2">체험만 해보고 마음에 안 들면 언제든 그만두세요.</p>
              </div>
            </div>
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="w-full max-w-md bg-slate-900 text-white px-10 py-5 text-xl font-black rounded-2xl hover:bg-black hover:scale-105 transition-all shadow-xl">부담없이 신청하기</button>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 px-6 border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Why Choose Us</p>
          <h2 className="text-4xl font-black italic uppercase mb-20 tracking-tighter text-slate-900">WHY EIN ENGLISH?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "집요한 실시간 문장 교정", d: "단순한 대화가 아닙니다. 틀린 문장은 강사가 그 자리에서 바로 고쳐주고, 채팅창에 기록해 줍니다. 콩글리시를 탈출하는 가장 빠른 방법입니다.", icon: <PenTool size={32} className="text-blue-600" /> },
              { t: "영포자·왕초보 전문", d: "기초부터 다시 시작해, 입을 여는 데만 집중한 전용 커리큘럼입니다. 알파벳·기본 문장부터 차근차근 반복 연습합니다.", icon: <Smile size={32} className="text-blue-600" /> },
              { t: "중도 포기 방지 시스템", d: "수업 녹화, 숙제 체크, 주간 리포트로 \"중간에 놓치지 않게\" 만드는 구조입니다. 학습 흐름이 한눈에 보입니다.", icon: <Target size={32} className="text-blue-600" /> },
              { t: "합리적 시간과 비용", d: "심야·이른 아침까지 원하는 시간대에 수업을 잡을 수 있습니다. 투명한 가격 정책과 숨겨진 비용 없는 운영.", icon: <Clock size={32} className="text-blue-600" /> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_50px_-16px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] rounded-[2.5rem] text-left group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-inner border border-blue-100/50">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-lg break-keep">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="infra" className="py-24 px-6 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Infrastructure</p>
          <h2 className="text-4xl font-black mb-16 tracking-tight uppercase italic text-slate-900">SERVICE INFRA</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "명문대 강사진", d: "상위 1% 검증된 베테랑의 맞춤 피드백.", img: "/ein-english-main/images/service-infra/teacher.png", icon: <GraduationCap size={48} className="text-white/90" />, color: "bg-blue-600" },
              { t: "스마트 매칭", d: "내 스케줄에 맞춰 시간 자유 선택.", img: "/ein-english-main/images/service-infra/smartmatching.png", icon: <MousePointer2 size={48} className="text-white/90" />, color: "bg-slate-900" },
              { t: "카톡 지원", d: "평일 18시까지 실시간 문의 해결.", img: "/ein-english-main/images/service-infra/kakao-talk-support.png", icon: <Headphones size={48} className="text-white/90" />, color: "bg-amber-400" },
              { t: "ESL 교재", d: "글로벌 스탠다드 & 아인 전용 자료.", img: "/ein-english-main/images/service-infra/esl-book.png", icon: <Globe size={48} className="text-white/90" />, color: "bg-red-500" }
            ].map((item, i) => (
              <div key={i} className="aspect-[3/4] rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer">
                <img src={item.img} alt={item.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Brand Color Tint - Reduced opacity for clarity */}
                <div className={`absolute inset-0 opacity-10 ${item.color}`}></div>
                {/* Text Readability Gradient - lighter gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 leading-tight">{item.t}</h3>
                    <p className="text-white/90 font-medium text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="management" className="py-24 px-6 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">System</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight italic uppercase underline decoration-blue-600 decoration-8 underline-offset-[-2px] text-slate-900">Management System</h2>
            <p className="text-slate-500 text-xl font-bold">"아인은 가르치는 것을 넘어, 당신의 완주를 관리합니다."</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-12">
            <div className="relative w-full max-w-[400px] border-[12px] border-slate-900 rounded-[3rem] shadow-[0_24px_60px_-16px_rgba(15,23,42,0.2)] p-10 bg-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50 rounded-full -ml-12 -mb-12 blur-2xl"></div>
              <h4 className="text-2xl font-black text-center text-blue-600 mb-12 italic uppercase relative z-10">CHECK POINT</h4>
              <ul className="space-y-6 text-left relative z-10">
                {["섬세한 평가 기준", "매 수업 후 피드백 리포트", "일일/월간 성장 분석표", "출석·숙제 통합 대시보드", "포기 방지 매니저 케어"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/li">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Check size={14} strokeWidth={4} /></div>
                    <span className="font-bold text-slate-700 text-lg tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 space-y-12">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-12 tracking-tight italic text-slate-800">평균 <span className="text-red-500">95%가 넘는 재수강률</span>이<br />이 퀄리티를 증명합니다</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 shadow-sm">
                    <p className="text-base font-black mb-8 italic text-slate-400 text-center">"만족도 89% → 95% 상승"</p>
                    <div className="flex items-end gap-4 h-32">
                      <div className="flex-1 bg-slate-200 h-[89%] rounded-t-xl flex items-end justify-center pb-2">
                        <span className="text-slate-600 font-black text-sm">2024년</span>
                      </div>
                      <div className="flex-1 bg-blue-600 h-[95%] rounded-t-xl shadow-lg relative group flex items-end justify-center pb-2">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-black text-blue-600 animate-bounce-subtle">95%</span>
                        <span className="text-white font-black text-sm relative z-10">2025년</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 shadow-sm">
                    <p className="text-base font-black mb-8 italic text-slate-400 text-center">"회원 수 76% 성장"</p>
                    <div className="flex items-end gap-4 h-32">
                      <div className="flex-1 bg-slate-200 h-[57%] rounded-t-xl flex items-end justify-center pb-2">
                        <span className="text-slate-600 font-black text-sm">2024년</span>
                      </div>
                      <div className="flex-1 bg-orange-500 h-[100%] rounded-t-xl shadow-lg relative flex items-end justify-center pb-2">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-black text-orange-500 animate-bounce-subtle">76%</span>
                        <span className="text-white font-black text-sm relative z-10">2025년</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Curriculum</p>
          <Settings className="mx-auto text-blue-500 mb-8 animate-spin-slow" size={40} />
          <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase italic tracking-tighter">나에게 맞는 학습과정</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: '일반 회화', d: '여행·일상에서 바로 써먹는 실전 표현 위주 말하기.', img: '/ein-english-main/images/curriculum/regular-class.png', color: 'bg-blue-600' },
              { t: '프리토킹', d: '자유로운 주제로 대화하며 자연스러운 문장 습득.', img: '/ein-english-main/images/curriculum/free-talking.png', color: 'bg-orange-500' },
              { t: '주니어 회화', d: '아이가 스스로 말하고 싶어지게 만드는 과정.', img: '/ein-english-main/images/curriculum/junior-class.png', color: 'bg-green-500' },
              { t: '공인시험 준비', d: 'TOEIC·OPIc 등 시험 유형별 실전 템플릿.', img: '/ein-english-main/images/service-infra/esl-book.png', color: 'bg-purple-500' },
              { t: '인터뷰 영어', d: '면접 답변 구성 및 자신감 향상 반복 훈련.', img: '/ein-english-main/images/curriculum/interview.png', color: 'bg-cyan-500' },
              { t: '비즈니스 회화', d: '이메일·회의 등 실제 업무 상황 시뮬레이션.', img: '/ein-english-main/images/curriculum/business.png', color: 'bg-pink-500' }
            ].map((course, i) => (
              <div key={i} className="group relative aspect-[1.4/1] rounded-[2rem] overflow-hidden flex flex-col justify-end p-10 text-left cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img src={course.img} alt={course.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Gradient: Dark at bottom for text, clear at top for photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <h3 className="text-2xl font-black mb-3 relative z-10 text-white uppercase tracking-tight">{course.t}</h3>
                <p className="text-sm text-gray-200 font-medium relative z-10 leading-relaxed">{course.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-fade-in-up">
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider">FREE</span>
              내 레벨에 딱 맞는 과정이 궁금하다면? <span className="text-blue-400 group-hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30">무료 진단하기</span> <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="contents" className="py-24 px-6 bg-white text-center border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Contents</p>
          <h2 className="text-4xl font-black mb-6 italic tracking-tight text-slate-900">애니메이션 📺 & 9종 무료 교재</h2>
          <p className="text-xl text-slate-500 mb-12 font-medium italic">재미와 실력을 동시에 잡은 아인만의 독점 콘텐츠</p>
          <div className="mb-16">
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-blue-50 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-100 transition-colors flex items-center gap-3 mx-auto shadow-sm">
              <BookOpen size={20} /> 이 교재들로 무료수업 받아보기 <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x px-4 -mx-4 scrollbar-hide">
            {[
              { t: 'BLUEY', i: '/ein-english-main/images/animation/bluey.png' },
              { t: 'DC KIDS', i: '/ein-english-main/images/animation/dc-kids.png' },
              { t: 'MAX & RUBY', i: '/ein-english-main/images/animation/max&ruby.png' },
              { t: 'PIP AND POSY', i: '/ein-english-main/images/animation/pip-and-posy.png' },
              { t: 'POWERPUFF GIRLS', i: '/ein-english-main/images/animation/powerpuff-girls.png' },
              { t: 'ROB THE ROBOT', i: '/ein-english-main/images/animation/robtherobot.png' },
              { t: 'VOOKS SCIENCE', i: '/ein-english-main/images/animation/vooks-science.png' }
            ].map((item, i) => (
              <div key={i} className="flex-none w-64 md:w-80 aspect-video bg-slate-50 rounded-[1.5rem] flex flex-col items-center justify-center font-black text-slate-300 border border-slate-100 group cursor-pointer hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all overflow-hidden relative snap-center">
                <div className="absolute inset-0 bg-slate-200">
                  <img src={item.i} alt={item.t} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <PlayCircle size={48} className="text-white mb-2 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100" />
                <span className="text-sm relative z-10 text-white font-bold drop-shadow-md tracking-wider">{item.t}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {(showAllBooks ? books : books.slice(0, 3)).map((book, i) => (
              <div key={i} className="bg-white p-0 rounded-[3rem] text-left border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  {book.tag && <span className="absolute top-6 right-6 text-[10px] font-black bg-blue-600 text-white px-3 py-1 rounded-full tracking-widest uppercase shadow-md z-10">{book.tag}</span>}
                </div>
                <div className="p-10 pt-4 bg-white relative z-10">
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-slate-800">{book.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-medium">{book.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowAllBooks(!showAllBooks)} className="font-black border-b-2 border-slate-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all inline-flex items-center gap-2 text-xl uppercase italic tracking-tighter">
            {showAllBooks ? '목록 접기' : '9종 전체 교재 목록 보기'} {showAllBooks ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Process</p>
            <h2 className="text-4xl font-black mb-6 uppercase italic tracking-widest text-slate-900">How It Works</h2>
            <p className="text-slate-500 font-black text-2xl italic">"당신의 말문이 트이기까지의 5단계 여정"</p>
          </div>
          <div className="relative pl-12 md:pl-24">
            <div className="absolute left-[39px] md:left-[51px] top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-100 to-slate-100 rounded-full"></div>
            <div className="space-y-16">
              {[
                { t: "무료 수업 시간 선택", d: "테스트가 아닙니다. 결제 정보 없이 원하는 시간만 선택하세요." },
                { t: "1:1 프리토킹 체험 (15분)", d: "베테랑 선생님과 수다 떨듯이 대화하며 현재 실력을 점검합니다." },
                { t: "강점 발견 & 커리큘럼 설계", d: "체험 결과를 바탕으로, 내 영어의 강점과 약점을 분석해 최적의 과정을 추천합니다." },
                { t: "정규 수강 여부 결정", d: "충분히 체험해 본 뒤, 원하는 기간과 횟수만 선택해 수강을 결정하시면 됩니다." },
                { t: "집요한 교정 & 밀착 관리", d: "매 수업마다 틀린 문장을 교정받으며, 3개월 이후의 변화를 목표로 달립니다." }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-12 md:-left-24 top-0 w-12 h-12 md:w-24 md:h-24 bg-white border-4 border-slate-900 rounded-full flex items-center justify-center font-black text-xl md:text-4xl z-10 italic shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">0{i + 1}</div>
                  <div className="bg-white p-10 border border-slate-100 hover:border-blue-100 transition-all rounded-[2.5rem] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-16px_rgba(59,130,246,0.12)] group-hover:-translate-y-1 duration-300">
                    <h4 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">{step.t}</h4>
                    <p className="text-slate-500 font-bold md:text-lg leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Stories</p>
          <h2 className="text-4xl font-black mb-24 tracking-tighter italic uppercase tracking-[0.3em] text-slate-900">REAL SUCCESS STORIES</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            {[
              { author: '이*현 (30대 직장인)', title: "회의에서 영어로 말문이 막히지 않아요", content: '영어 울렁증이 심해서 회의 때마다 식은땀을 흘렸는데, 아인에서 비즈니스 과정을 들은 지 3개월 만에 제가 먼저 의견을 제시하게 됐습니다. 실전 위주라 바로 업무에 쓸 수 있는 게 가장 좋았어요.' },
              { author: '박*은 (40대 주부)', title: "가족 여행에서, 제가 다 해결했어요", content: '애들 다 키우고 늦은 나이에 시작했는데 선생님이 너무 친절하세요. 가족 여행 갔을 때 혼자서 호텔 체크인하고 주문하는 거 보고 가족들이 다 놀랐습니다. 정말 뿌듯해요!' }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-14 rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] relative group overflow-hidden h-full flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_28px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 border border-slate-100">
                <div className="absolute top-0 right-0 p-10 text-slate-100 group-hover:text-blue-50 transition-colors duration-500">
                  <MessageSquare size={100} fill="currentColor" />
                </div>
                <div className="relative z-10">
                  <div className="text-yellow-400 flex gap-2 mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} size={22} fill="currentColor" />)}
                  </div>
                  <h4 className="text-2xl font-black mb-6 leading-tight italic text-slate-800">"{rev.title}"</h4>
                  <p className="text-slate-500 font-bold leading-relaxed italic mb-12 text-lg whitespace-pre-line group-hover:text-slate-700 transition-colors">"{rev.content}"</p>
                </div>
                <div className="text-sm font-black text-slate-400 border-t border-slate-100 pt-8 uppercase tracking-widest relative z-10">{rev.author}</div>
              </div>
            ))}
          </div>
          <div className={`grid grid-cols-2 ${showAllReviews ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-4'} gap-4 mb-20 border-y border-slate-200 transition-all duration-500 ease-in-out`}>
            {(showAllReviews ? allReviews : allReviews.slice(0, 4)).map((item, idx) => (
              <div key={idx} className={`aspect-square p-0 flex flex-col justify-center items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-100/50'} hover:bg-slate-200/50 transition-colors rounded-[2rem] overflow-hidden relative group`}>
                {item.type === 'image' ? (
                  <>
                    <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-0 w-full text-center z-10">
                      <span className="text-xs font-bold text-white uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">{item.label}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-left w-full h-full flex flex-col justify-between p-8">
                    <div>
                      <div className="flex text-yellow-400 mb-3 gap-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                      <h5 className="font-bold text-sm mb-3 line-clamp-1 text-slate-800">{item.title}</h5>
                      <p className="text-xs font-medium leading-relaxed text-slate-500 line-clamp-4">"{item.content}"</p>
                    </div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-tighter text-right mt-4">{item.author}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button onClick={() => setShowAllReviews(!showAllReviews)} className="bg-slate-900 text-white px-16 py-6 font-black text-lg hover:bg-black transition-all rounded-[2rem] shadow-xl hover:scale-105">
            {showAllReviews ? '후기 목록 접기' : '리얼 수강후기 더 보기 (Expand)'}
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50/50 to-white pb-40">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">FAQ</p>
          <h2 className="text-3xl font-black mb-16 flex items-center gap-4 italic uppercase underline decoration-blue-600 decoration-8 underline-offset-[-2px] tracking-tighter text-slate-900"><HelpCircle strokeWidth={4} className="text-blue-600" /> 자주 묻는 질문</h2>
          <div className="space-y-5 mb-32">
            {[
              { q: "체험 수업은 정말 무료인가요?", a: "네. 카드 정보 입력 없이, 레벨 점검을 겸한 15분 1:1 무료체험 수업까지 모두 무료입니다." },
              { q: "왕초보도 따라갈 수 있나요?", a: "알파벳부터 다시 시작하는 커리큘럼이 준비되어 있어 완전 초보도 부담 없이 시작할 수 있습니다." },
              { q: "수업 시간·강사 변경이 가능한가요?", a: "네. 사정이 생기면 카톡 또는 고객센터를 통해 시간·강사 변경을 도와드립니다." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-r from-slate-50 to-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)] transition-all duration-300 group font-black text-xl rounded-[2rem] cursor-pointer">
                <div className="flex justify-between items-center text-slate-800">
                  <span>{item.q}</span>
                  <ChevronDown size={28} className="group-hover:translate-y-1 transition-transform opacity-30" />
                </div>
                <div className="mt-6 text-base text-slate-500 font-medium hidden group-hover:block border-t border-slate-200 pt-6 animate-fade-in leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 text-white p-16 md:p-24 text-center rounded-[4rem] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-slate-700/50">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,_rgba(59,130,246,0.08),transparent_50%),linear-gradient(to_bottom,_#1e293b,_#0f172a,_#020617)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-16 italic leading-[1.1] uppercase tracking-tighter">말문이 트이는<br />3개월의 변화,<br /><span className="text-blue-500">오늘 무료로 시작하세요</span></h2>
              <div className="flex flex-col items-center gap-8">
                <button onClick={scrollToHero} className="w-full max-w-xl bg-blue-600 text-white px-12 py-8 text-2xl md:text-3xl font-black rounded-[2rem] hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.4)] uppercase italic tracking-tighter">15분 무료 수업 예약하기</button>
                <div className="flex flex-col items-center gap-3">
                  <button className="text-slate-400 font-black hover:text-white transition-colors text-lg flex items-center gap-3 uppercase tracking-widest border-b border-slate-800 pb-2">
                    <MessageCircle size={24} className="text-yellow-500" /> Kakao talk Support
                  </button>
                  <p className="text-xs opacity-40 font-bold tracking-wide">🚫 카드정보 입력 없음 | 🚫 상담 전화 강요 없음</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-10 opacity-5 font-black text-[10rem] md:text-[15rem] italic select-none pointer-events-none group-hover:scale-110 transition-transform tracking-tighter">AIN</div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 font-medium text-xs">
        {/* Top Footer: Links & Social */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-200">
          <div className="flex gap-6 font-bold">
            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-900 transition-colors">개인정보처리방침</a>
          </div>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><Youtube size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><MessageCircle size={16} /></a>
          </div>
        </div>

        {/* Main Footer: Business Info */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <img src="/ein-english-main/ain-english-logo.png" alt="아인잉글리쉬" className="h-8 mb-6 object-contain opacity-80 filter grayscale hover:grayscale-0 transition-all" />

          <div className="grid md:grid-cols-2 gap-y-2 gap-x-8 max-w-4xl text-[11px] leading-relaxed text-slate-500">
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">상호명 :</span>
              <span>아인잉글리쉬 원격평생교육원</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">대표 :</span>
              <span>강민규</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">사업자등록번호 :</span>
              <span>634-98-00756</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">통신판매업신고번호 :</span>
              <span>제2022-서울구로-1595호</span>
            </div>
            <div className="flex gap-2 md:col-span-2">
              <span className="font-bold whitespace-nowrap">주소 :</span>
              <span>서울시 구로구 디지털로 30길 31</span>
            </div>
            <div className="flex gap-2 md:col-span-2">
              <span className="font-bold whitespace-nowrap">이메일 :</span>
              <span>einenglish3@gmail.com</span>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 text-slate-400 text-[10px]">
            © 2022 아인잉글리쉬. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* All Reviews Modal */}
      {showAllReviewsModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in bg-white/90 backdrop-blur-md" onClick={() => setShowAllReviewsModal(false)}>
          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-slate-100 bg-white z-10">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                {selectedCategory === 'adult' ? '성인/직장인' : '주니어/학생'} <span className="text-blue-600">영상 후기 전체보기</span>
              </h3>
              <button onClick={() => setShowAllReviewsModal(false)} className="bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-red-500 p-2 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videoReviews
                  .filter(video => video.category === selectedCategory)
                  .map((video, i) => (
                    <div key={i} className={`group relative bg-black rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'}`} onClick={() => setSelectedVideo(video)}>
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                          <PlayCircle size={24} className="text-white fill-white/20" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h4 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2 drop-shadow-md">{video.title}</h4>
                        <p className="text-slate-300 text-[10px] font-medium line-clamp-1">{video.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div className="absolute top-6 right-6 z-10">
            <button onClick={() => setSelectedVideo(null)} className="text-white hover:text-red-500 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md">
              <X size={32} />
            </button>
          </div>
          <div className={`relative ${selectedVideo.ratio === 'aspect-[9/16]' ? 'h-[80vh] aspect-[9/16]' : 'w-full max-w-5xl aspect-video'} bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10`} onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
