export function Sharing() {
  return (
    <>
      <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
      <script src="//yastatic.net/share2/share.js" async="async"></script>
      <div
        class="ya-share2"
        data-services="vkontakte,facebook,gplus,twitter,evernote,pocket,telegram"
        data-lang="{{ page.lang }}"
        data-counter=""
      ></div>
    </>
  );
}
