barba.init({
});
var $links = $("a[href]");
var noLinkFunc = function (e) {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault();
    e.stopPropagation();
  }
};
$links.each(function (index, element) {
  console.log(element);
  $(element).on("click", function (e) {
    noLinkFunc(e);
  });
});