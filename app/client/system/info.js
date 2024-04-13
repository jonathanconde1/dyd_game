const info = {
  status:false
}

info.emitInfo = function (title,type,msn){
  $.toast({
      heading: title,
      text: msn,
      showHideTransition: 'slide',
      position: 'bottom-right',
      icon: type
  })
}
