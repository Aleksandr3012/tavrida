





if ($(window).width() > 992) {
  const ps = new PerfectScrollbar('.content__events-wrapper');
  const ps2 = new PerfectScrollbar('.content__items-wrapper');
}























$('.slider').slick({
  infinite: false,
  variableWidth: true
});



if ($(window).width() > 992) {
  new fullpage('#fullpage', {
    navigation: true,
    normalScrollElements: '.content__festival .content__forum',
    onLeave: function (origin, destination, direction) {
      $('#fp-nav').attr('data-slide', destination.index);
    }
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFydC9hcnQuanMiLCJhd2FyZC9hd2FyZC5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImV2ZW50L2V2ZW50LmpzIiwiZmVhdHVyZS9mZWF0dXJlLmpzIiwiZmVlZGJhY2svZmVlZGJhY2suanMiLCJmb290ZXIvZm9vdGVyLmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwiaGVhZGVyLWlubmVyL2hlYWRlci1pbm5lci5qcyIsImhlYWRsaW5lci9oZWFkbGluZXIuanMiLCJpbmZvL2luZm8uanMiLCJpbnB1dC9pbnB1dC5qcyIsIml0ZW0vaXRlbS5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0bmVycy9wYXJ0bmVycy5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJzZWN0aW9uL3NlY3Rpb24uanMiLCJzZWxlY3Qvc2VsZWN0LmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInRpbWVsaW5lL3RpbWVsaW5lLmpzIiwid3JhcHBlci93cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FDREE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5Mikge1xyXG4gIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBzMiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9faXRlbXMtd3JhcHBlcicpO1xyXG59XHJcbiIsIlxyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG4iLCIiLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHtcclxuICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICBub3JtYWxTY3JvbGxFbGVtZW50czogJy5jb250ZW50X19mZXN0aXZhbCAuY29udGVudF9fZm9ydW0nLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXX0=
