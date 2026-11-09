/**
 * LẬP TRÌNH CƠ KỸ THUẬT - SINGLE PAGE APPLICATION CORE
 * Đại học Bách Khoa TP.HCM (HCMUT)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Quản lý Theme (Dark/Light)
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("ck_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ck_theme", newTheme);
    updateThemeIcon(newTheme);
    // Render lại mermaid với theme tương ứng
    initMermaid();
  });

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeToggle.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`;
    } else {
      themeToggle.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-slate-600"></i>`;
    }
    if (window.lucide) lucide.createIcons();
  }

  // 2. Quản lý Tiến độ (Progress Tracker)
  let progressState = JSON.parse(localStorage.getItem("ck_progress")) || {
    completed: ["ch0_1", "ch2_3"],
    scores: {}
  };

  function updateProgressBar() {
    const totalChapters = window.CHAPTERS_DATA.length;
    const completedCount = progressState.completed.length;
    const percent = Math.round((completedCount / totalChapters) * 100);

    const bar = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.innerText = `${percent}% Hoàn thành (${completedCount}/${totalChapters} chương)`;

    // Cập nhật icon check trên sidebar
    document.querySelectorAll(".chapter-item").forEach(el => {
      const chId = el.getAttribute("data-chapter-id");
      const checkIcon = el.querySelector(".check-status");
      if (progressState.completed.includes(chId)) {
        checkIcon.classList.remove("hidden");
        checkIcon.classList.add("text-emerald-500");
      } else {
        checkIcon.classList.add("hidden");
      }
    });
  }

  // 3. Khởi tạo Mermaid chuẩn font và chống tràn chữ
  async function initMermaid() {
    if (!window.mermaid) return;

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch (e) {
      console.warn("Fonts ready wait:", e);
    }

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      fontSize: 14,
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true,
        padding: 24,
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: "basis"
      }
    });

    // Lưu và khôi phục mã nguồn Mermaid gốc khi re-render
    const mermaidElements = document.querySelectorAll(".mermaid");
    mermaidElements.forEach(el => {
      if (!el.hasAttribute("data-raw-code")) {
        el.setAttribute("data-raw-code", el.textContent.trim());
      } else {
        el.removeAttribute("data-processed");
        el.textContent = el.getAttribute("data-raw-code");
      }
    });

    try {
      await mermaid.run({
        querySelector: ".mermaid"
      });
    } catch (err) {
      console.error("Mermaid run error:", err);
    }
  }

  // 4. Toast Notification
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> <span>${msg}</span>`;
    toast.classList.add("show");
    if (window.lucide) lucide.createIcons();
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // 5. Điều hướng Navigation Tabs
  let activeTab = "theory"; // 'theory' | 'exercises' | 'quizzes' | 'cheatsheet'
  let activeChapterId = "ch4"; // Default focus on Chapter 4

  const navTheory = document.getElementById("nav-theory");
  const navExercises = document.getElementById("nav-exercises");
  const navQuizzes = document.getElementById("nav-quizzes");
  const navCheatsheet = document.getElementById("nav-cheatsheet");

  const tabButtons = [navTheory, navExercises, navQuizzes, navCheatsheet];

  function setActiveTab(tab) {
    activeTab = tab;
    tabButtons.forEach(btn => {
      if (btn) btn.classList.remove("active", "border-b-2", "border-blue-600", "text-blue-600", "font-bold");
    });
    const currentBtn = document.getElementById(`nav-${tab}`);
    if (currentBtn) {
      currentBtn.classList.add("active", "border-b-2", "border-blue-600", "text-blue-600", "font-bold");
    }

    renderCurrentView();
  }

  navTheory.addEventListener("click", () => setActiveTab("theory"));
  navExercises.addEventListener("click", () => setActiveTab("exercises"));
  navQuizzes.addEventListener("click", () => setActiveTab("quizzes"));
  navCheatsheet.addEventListener("click", () => setActiveTab("cheatsheet"));

  // 6. Render Sidebar Chapters
  const chapterListEl = document.getElementById("chapter-list");
  function renderSidebar() {
    chapterListEl.innerHTML = "";
    window.CHAPTERS_DATA.forEach(ch => {
      const item = document.createElement("button");
      item.className = `chapter-item w-full text-left px-3.5 py-2.5 rounded-lg mb-1 flex items-center justify-between text-sm transition ${
        ch.id === activeChapterId && activeTab === "theory"
          ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold"
          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
      }`;
      item.setAttribute("data-chapter-id", ch.id);

      item.innerHTML = `
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="text-xs px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono font-medium">${ch.code}</span>
          <span class="truncate">${ch.title.split(":")[1] || ch.title}</span>
        </div>
        <i data-lucide="check-circle-2" class="check-status w-4 h-4 hidden flex-shrink-0"></i>
      `;

      item.addEventListener("click", () => {
        activeChapterId = ch.id;
        setActiveTab("theory");
        renderSidebar();
        updateProgressBar();
      });

      chapterListEl.appendChild(item);
    });

    if (window.lucide) lucide.createIcons();
    updateProgressBar();
  }

  // 7. Render Current View
  const viewContainer = document.getElementById("view-container");

  function renderCurrentView() {
    if (activeTab === "theory") {
      renderTheoryView();
    } else if (activeTab === "exercises") {
      renderExercisesView();
    } else if (activeTab === "quizzes") {
      renderQuizzesView();
    } else if (activeTab === "cheatsheet") {
      renderCheatsheetView();
    }
  }

  // --- RENDER THEORY VIEW ---
  function renderTheoryView() {
    const ch = window.CHAPTERS_DATA.find(c => c.id === activeChapterId) || window.CHAPTERS_DATA[2];
    const isDone = progressState.completed.includes(ch.id);

    const currentIndex = window.CHAPTERS_DATA.findIndex(c => c.id === ch.id);
    const prevCh = currentIndex > 0 ? window.CHAPTERS_DATA[currentIndex - 1] : null;
    const nextCh = currentIndex < window.CHAPTERS_DATA.length - 1 ? window.CHAPTERS_DATA[currentIndex + 1] : null;
    const exCount = window.EXERCISES_DATA ? window.EXERCISES_DATA.filter(e => e.chapter === ch.id).length : 0;

    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <!-- Header Chương -->
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">${ch.tag}</span>
            <span class="text-xs text-slate-400">ĐHBK TP.HCM • Môn Cơ Kỹ Thuật</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">${ch.title}</h1>
          <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">${ch.desc}</p>
          
          <div class="mt-4 flex flex-wrap gap-3">
            <button id="btn-toggle-done" class="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              isDone
                ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            }">
              <i data-lucide="${isDone ? "check-circle" : "check"}" class="w-4 h-4"></i>
              <span>${isDone ? "Đã đánh dấu hoàn thành" : "Đánh dấu đã hiểu chương này"}</span>
            </button>
            
            <button id="btn-goto-ex" class="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2">
              <i data-lucide="dumbbell" class="w-4 h-4 text-blue-500"></i>
              <span>Luyện tập (${exCount} bài tập)</span>
            </button>
          </div>
        </div>

        <!-- Nội dung chi tiết -->
        <div class="content-body text-slate-800 dark:text-slate-200">
          ${ch.content}
        </div>

        <!-- Điều hướng cuối chương -->
        <div class="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          ${prevCh ? `
            <button id="btn-prev-ch" class="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 shadow-sm transition">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span>${prevCh.code}</span>
            </button>
          ` : '<div class="hidden sm:block"></div>'}

          <button id="btn-footer-goto-ex" class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100 text-xs font-bold flex items-center justify-center gap-2 transition">
            <i data-lucide="dumbbell" class="w-4 h-4"></i>
            <span>Ngân Hàng Bài Tập ${ch.code} (${exCount} bài)</span>
          </button>

          ${nextCh ? `
            <button id="btn-next-ch" class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition">
              <span>${nextCh.code}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          ` : '<div class="hidden sm:block"></div>'}
        </div>
      </div>
    `;

    // Nút toggle hoàn thành
    document.getElementById("btn-toggle-done").addEventListener("click", () => {
      if (progressState.completed.includes(ch.id)) {
        progressState.completed = progressState.completed.filter(id => id !== ch.id);
        showToast("Đã bỏ đánh dấu hoàn thành");
      } else {
        progressState.completed.push(ch.id);
        showToast("Chúc mừng! Đã hoàn thành " + ch.code);
        if (window.confetti) {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        }
      }
      localStorage.setItem("ck_progress", JSON.stringify(progressState));
      renderTheoryView();
      renderSidebar();
    });

    const goToEx = () => {
      setActiveTab("exercises");
      filterExercisesByChapter(ch.id);
    };

    document.getElementById("btn-goto-ex").addEventListener("click", goToEx);

    const btnFooterEx = document.getElementById("btn-footer-goto-ex");
    if (btnFooterEx) btnFooterEx.addEventListener("click", goToEx);

    const btnPrev = document.getElementById("btn-prev-ch");
    if (btnPrev && prevCh) {
      btnPrev.addEventListener("click", () => {
        activeChapterId = prevCh.id;
        renderTheoryView();
        renderSidebar();
        const mainEl = document.querySelector(".main-content");
        if (mainEl) mainEl.scrollTop = 0;
      });
    }

    const btnNext = document.getElementById("btn-next-ch");
    if (btnNext && nextCh) {
      btnNext.addEventListener("click", () => {
        activeChapterId = nextCh.id;
        renderTheoryView();
        renderSidebar();
        const mainEl = document.querySelector(".main-content");
        if (mainEl) mainEl.scrollTop = 0;
      });
    }

    postProcessContent();
  }

  // --- RENDER EXERCISES VIEW ---
  let exerciseFilterChapter = "all";
  let exerciseFilterLevel = "all";
  let exerciseSearchQuery = "";

  function renderExercisesView() {
    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Ngân Hàng Bài Tập & Lời Giải Chi Tiết</h1>
              <span id="exercise-badge-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                ${window.EXERCISES_DATA.length} Bài Tập
              </span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">Đầy đủ 100% bài tập trích xuất từ các file BT Chương 2, 3, 4, 5, 5 bis, 6a, 7 và Đề Thi Thử của PGS. TS. Nguyễn Thanh Nhã (HCMUT).</p>
          </div>
          
          <!-- Bộ lọc & Tìm kiếm -->
          <div class="flex flex-wrap items-center gap-2">
            <div class="relative">
              <input id="filter-search" type="text" placeholder="Tìm kiếm bài tập..." class="pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium w-40 md:w-52 focus:outline-none focus:ring-2 focus:ring-blue-500" value="${escapeHtml(exerciseSearchQuery)}">
              <i data-lucide="search" class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"></i>
            </div>

            <select id="filter-chapter" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium">
              <option value="all">Tất cả các chương</option>
              <option value="ch0_1">Chương 0 & 1: Máy tính & Biểu diễn số</option>
              <option value="ch2_3">Chương 2 & 3: Cơ bản & Kiểu dữ liệu</option>
              <option value="ch4">Chương 4: Cấu trúc điều khiển</option>
              <option value="ch5">Chương 5: Hàm & Module</option>
              <option value="ch6">Chương 6: Lập trình OOP</option>
              <option value="ch7">Chương 7: NumPy & Matplotlib</option>
              <option value="ch8">Chương 8: Giao diện GUI Tkinter</option>
            </select>
            
            <select id="filter-level" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium">
              <option value="all">Mọi độ khó</option>
              <option value="Dễ">Dễ</option>
              <option value="Cơ bản">Cơ bản</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Nâng cao">Nâng cao</option>
              <option value="Đề thi">Trọng tâm Đề thi</option>
            </select>
          </div>
        </div>

        <div id="exercise-list" class="space-y-6"></div>
      </div>
    `;

    const selectCh = document.getElementById("filter-chapter");
    const selectLvl = document.getElementById("filter-level");
    const inputSearch = document.getElementById("filter-search");

    selectCh.value = exerciseFilterChapter;
    selectLvl.value = exerciseFilterLevel;

    selectCh.addEventListener("change", (e) => {
      exerciseFilterChapter = e.target.value;
      populateExercises();
    });

    selectLvl.addEventListener("change", (e) => {
      exerciseFilterLevel = e.target.value;
      populateExercises();
    });

    if (inputSearch) {
      inputSearch.addEventListener("input", (e) => {
        exerciseSearchQuery = e.target.value;
        populateExercises();
      });
    }

    populateExercises();
  }

  function filterExercisesByChapter(chId) {
    exerciseFilterChapter = chId;
    const selectCh = document.getElementById("filter-chapter");
    if (selectCh) selectCh.value = chId;
    populateExercises();
  }

  function populateExercises() {
    const listEl = document.getElementById("exercise-list");
    if (!listEl) return;
    listEl.innerHTML = "";

    const searchVal = exerciseSearchQuery.trim().toLowerCase();
    const filtered = window.EXERCISES_DATA.filter(ex => {
      const matchCh = exerciseFilterChapter === "all" || ex.chapter === exerciseFilterChapter;
      const matchLvl = exerciseFilterLevel === "all" || ex.level === exerciseFilterLevel;
      const matchSearch = !searchVal || 
        (ex.title && ex.title.toLowerCase().includes(searchVal)) ||
        (ex.problem && ex.problem.toLowerCase().includes(searchVal)) ||
        (ex.analysis && ex.analysis.toLowerCase().includes(searchVal)) ||
        (ex.solution && ex.solution.toLowerCase().includes(searchVal));
      return matchCh && matchLvl && matchSearch;
    });

    const badgeEl = document.getElementById("exercise-badge-count");
    if (badgeEl) {
      badgeEl.innerText = `${filtered.length} / ${window.EXERCISES_DATA.length} Bài Tập`;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="p-8 text-center text-slate-400">Không tìm thấy bài tập phù hợp với bộ lọc hiện tại.</div>`;
      return;
    }

    filtered.forEach((ex, idx) => {
      const card = document.createElement("div");
      card.className = "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition hover:shadow-md";

      let levelBadge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
      if (ex.level === "Dễ") levelBadge = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
      if (ex.level === "Cơ bản") levelBadge = "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300";
      if (ex.level === "Trung bình") levelBadge = "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
      if (ex.level === "Nâng cao") levelBadge = "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300";
      if (ex.level === "Đề thi") levelBadge = "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold";

      card.innerHTML = `
        <div class="flex items-start justify-between gap-4 mb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs px-2 py-0.5 rounded-full ${levelBadge}">${ex.level}</span>
              <span class="text-xs text-slate-400 font-medium">${ex.chapterTitle}</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${ex.title}</h3>
          </div>
        </div>

        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <strong>Đề bài:</strong> ${ex.problem}
        </p>

        <!-- Phân tích thuật toán -->
        <div class="text-xs text-slate-600 dark:text-slate-400 mb-4">
          <strong class="text-blue-600 dark:text-blue-400">💡 Phân tích & Hướng dẫn:</strong> ${ex.analysis}
        </div>

        <!-- Flowchart nút mở rộng -->
        ${ex.flowchart ? `
          <div class="mb-4">
            <button class="btn-toggle-flow text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline">
              <i data-lucide="git-merge" class="w-3.5 h-3.5"></i>
              <span>Xem Sơ đồ khối (Flowchart)</span>
            </button>
            <div class="flow-container hidden mt-2">
              <div class="mermaid">${ex.flowchart}</div>
            </div>
          </div>
        ` : ''}

        <!-- Toggle xem lời giải -->
        <div class="border-t border-slate-100 dark:border-slate-800 pt-3">
          <button class="btn-toggle-sol px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <i data-lucide="chevron-down" class="w-4 h-4"></i>
            <span>Xem Mã nguồn mẫu & Chú thích</span>
          </button>
          
          <div class="sol-container hidden mt-3">
            <div class="code-container">
              <button class="copy-btn"><i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy</button>
              <pre><code class="language-python">${escapeHtml(ex.solution)}</code></pre>
            </div>
            ${ex.notes ? `<p class="text-xs text-amber-600 dark:text-amber-400 mt-2 bg-amber-50 dark:bg-amber-950/30 p-2 rounded">📌 <strong>Ghi chú:</strong> ${ex.notes}</p>` : ''}
          </div>
        </div>
      `;

      // Event listener mở flowchart
      const btnFlow = card.querySelector(".btn-toggle-flow");
      if (btnFlow) {
        btnFlow.addEventListener("click", () => {
          const flowBox = card.querySelector(".flow-container");
          flowBox.classList.toggle("hidden");
          initMermaid();
        });
      }

      // Event listener mở lời giải
      const btnSol = card.querySelector(".btn-toggle-sol");
      btnSol.addEventListener("click", () => {
        const solBox = card.querySelector(".sol-container");
        const isHidden = solBox.classList.toggle("hidden");
        btnSol.querySelector("span").innerText = isHidden ? "Xem Mã nguồn mẫu & Chú thích" : "Thu gọn mã nguồn";
        btnSol.querySelector("i").setAttribute("data-lucide", isHidden ? "chevron-down" : "chevron-up");
        if (window.lucide) lucide.createIcons();
        if (!isHidden && window.Prism) Prism.highlightAll();
      });

      listEl.appendChild(card);
    });

    postProcessContent();
  }

  // --- RENDER QUIZZES VIEW ---
  function renderQuizzesView() {
    viewContainer.innerHTML = `
      <div class="max-w-3xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Trắc Nghiệm Tương Tác: Học là Nhớ</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Kiểm tra mức độ hiểu sâu kiến thức bản chất, tránh lỗi sai ngớ ngẩn khi làm bài thi.</p>
        </div>

        <div id="quizzes-container" class="space-y-8"></div>
      </div>
    `;

    const container = document.getElementById("quizzes-container");

    window.QUIZZES_DATA.forEach((group, gIdx) => {
      const gBox = document.createElement("div");
      gBox.innerHTML = `
        <h2 class="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">${group.title}</h2>
        <div class="space-y-6" id="group-${gIdx}"></div>
      `;
      const qListEl = gBox.querySelector(`#group-${gIdx}`);

      group.questions.forEach((q, qIdx) => {
        const qCard = document.createElement("div");
        qCard.className = "quiz-card";

        qCard.innerHTML = `
          <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-base">${qIdx + 1}. ${escapeHtml(q.question).replace(/\\n/g, '<br>')}</h4>
          <div class="options-container space-y-2">
            ${q.options.map((opt, oIdx) => `
              <div class="quiz-option" data-option="${oIdx}">
                <span class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-500">${String.fromCharCode(65 + oIdx)}</span>
                <span class="text-sm">${escapeHtml(opt)}</span>
              </div>
            `).join('')}
          </div>
          <div class="quiz-explain text-slate-700 dark:text-slate-300">
            <strong>💡 Giải thích chi tiết:</strong> ${q.explain}
          </div>
        `;

        const options = qCard.querySelectorAll(".quiz-option");
        const explainBox = qCard.querySelector(".quiz-explain");

        options.forEach(optEl => {
          optEl.addEventListener("click", () => {
            const chosen = parseInt(optEl.getAttribute("data-option"));
            if (options[0].classList.contains("correct") || options[0].classList.contains("wrong")) return;

            if (chosen === q.answer) {
              optEl.classList.add("correct");
              showToast("Chính xác! 🎉");
            } else {
              optEl.classList.add("wrong");
              options[q.answer].classList.add("correct");
              showToast("Chưa chính xác! Hãy đọc giải thích.");
            }
            explainBox.style.display = "block";
          });
        });

        qListEl.appendChild(qCard);
      });

      container.appendChild(gBox);
    });

    postProcessContent();
  }

  // --- RENDER CHEATSHEET VIEW ---
  function renderCheatsheetView() {
    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Bảng Tra Cứu Nhanh (Cheatsheet)</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Tổng hợp các hàm NumPy, lệnh Matplotlib, Tkinter và công thức Cơ Kỹ Thuật hay dùng nhất.</p>
        </div>

        <div class="space-y-8">
          ${window.CHEATSHEET_DATA.map(sec => `
            <div>
              <h2 class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <i data-lucide="bookmark" class="w-4 h-4"></i>
                <span>${sec.category}</span>
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${sec.items.map(item => `
                  <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-sm">
                    <div class="font-semibold text-sm text-slate-900 dark:text-white mb-1">${item.name}</div>
                    <pre class="bg-slate-50 dark:bg-slate-950 p-2 rounded text-xs font-mono text-blue-600 dark:text-blue-300 my-2 overflow-x-auto border border-slate-100 dark:border-slate-800"><code>${escapeHtml(item.code)}</code></pre>
                    <p class="text-xs text-slate-500 dark:text-slate-400">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    postProcessContent();
  }

  // 8. Render công thức toán học MathType (KaTeX)
  function renderMath() {
    const container = document.getElementById("view-container") || document.body;
    if (window.renderMathInElement) {
      try {
        renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    } else {
      setTimeout(renderMath, 150);
    }
  }

  // 9. Các tiện ích hỗ trợ (Copy code, Prism, Lucide, Escape HTML)
  function postProcessContent() {
    if (window.lucide) lucide.createIcons();
    if (window.Prism) Prism.highlightAll();
    initMermaid();
    renderMath();

    // Setup nút Copy Code
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const codeEl = btn.nextElementSibling.querySelector("code");
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.innerText).then(() => {
            btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Copied!`;
            if (window.lucide) lucide.createIcons();
            showToast("Đã sao chép mã nguồn vào clipboard!");
            setTimeout(() => {
              btn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy`;
              if (window.lucide) lucide.createIcons();
            }, 2000);
          });
        }
      });
    });
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Khởi chạy ban đầu
  renderSidebar();
  renderCurrentView();
});
