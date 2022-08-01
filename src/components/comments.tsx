export function Comments({ discussion }: { discussion: string }) {
  return (
    <div class="rounded-lg bg-white px-5 py-4">
      <div class="-my-[17px] -mx-[11px]">
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?19"
          data-telegram-discussion={discussion}
          data-comments-limit="5"
          data-color="fb923c"
        />
      </div>
    </div>
  );
}
