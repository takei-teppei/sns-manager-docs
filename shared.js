/* ============================================================
   SHARED SCRIPT — SNS Manager Documentation
   ヘッダー・フッター生成、スクロール、アニメーション
   ============================================================ */

(function () {
  'use strict';

  /* ── 現在のページ判定 ── */
  var path = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === path) return ' class="active"';
    return '';
  }

  /* ── ヘッダー生成 ── */
  var headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.outerHTML =
      '<header>' +
        '<div class="nav-inner">' +
          '<a href="index.html" class="logo">' +
            '<div class="logo-mark">S</div>SNS Manager' +
          '</a>' +
          '<ul class="nav-links">' +
            '<li><a href="index.html#features"' + isActive('index.html') + '>機能</a></li>' +
            '<li><a href="index.html#pricing">料金</a></li>' +
            '<li><a href="setup-guide.html"' + isActive('setup-guide.html') + '>セットアップ</a></li>' +
            '<li><a href="how-to-use.html"' + isActive('how-to-use.html') + '>使い方</a></li>' +
            '<li><a href="faq.html"' + isActive('faq.html') + '>FAQ</a></li>' +
            '<li><a href="index.html#cta" class="nav-cta">購入する</a></li>' +
          '</ul>' +
          '<button class="hamburger" onclick="this.closest(\'header\').querySelector(\'.nav-links\').classList.toggle(\'open\')" aria-label="メニュー">' +
            '<svg viewBox="0 0 24 24" width="24" height="24">' +
              '<line x1="3" y1="6" x2="21" y2="6" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>' +
              '<line x1="3" y1="12" x2="21" y2="12" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>' +
              '<line x1="3" y1="18" x2="21" y2="18" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>' +
            '</svg>' +
          '</button>' +
        '</div>' +
      '</header>';
  }

  /* ── フッター生成 ── */
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML =
      '<footer>' +
        '<div class="footer-inner">' +
          '<a href="index.html" class="footer-logo">' +
            '<div class="logo-mark-sm">S</div>' +
            'SNS Manager' +
          '</a>' +
          '<div class="footer-links">' +
            '<a href="setup-guide.html">セットアップ</a>' +
            '<a href="how-to-use.html">使い方</a>' +
            '<a href="faq.html">FAQ</a>' +
            '<a href="terms.html">利用規約</a>' +
            '<a href="privacy.html">プライバシーポリシー</a>' +
          '</div>' +
        '</div>' +
        '<div style="max-width:1100px;margin:0 auto;padding:0 5%;">' +
          '<div class="footer-copy">&copy; 2026 SNS Manager. All rights reserved.</div>' +
        '</div>' +
      '</footer>';
  }

  /* ── スクロールプログレスバー ── */
  var progressEl = document.getElementById('progress');
  if (progressEl) {
    window.addEventListener('scroll', function () {
      var s = document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progressEl.style.width = (h > 0 ? (s / h * 100) : 0) + '%';
    });
  }

  /* ── Reveal アニメーション ── */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { ro.observe(el); });
  }

})();
